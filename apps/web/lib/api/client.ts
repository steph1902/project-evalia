import axios, { AxiosInstance, AxiosError } from 'axios';
import { useAuthStore } from '@/stores/auth-store';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

class ApiClient {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: API_URL,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.setupInterceptors();
    }

    private setupInterceptors() {
        // Request interceptor
        this.instance.interceptors.request.use(
            (config) => {
                const token = useAuthStore.getState().accessToken;
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Response interceptor
        this.instance.interceptors.response.use(
            (response) => response.data,
            async (error: AxiosError) => {
                const originalRequest = error.config as any;

                // Handle 401 - Token expired
                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;

                    try {
                        const refreshToken = useAuthStore.getState().refreshToken;
                        if (!refreshToken) throw new Error('No refresh token');

                        const { data } = await axios.post(`${API_URL}/auth/refresh`, {
                            refreshToken,
                        });

                        useAuthStore.getState().setTokens(
                            data.accessToken,
                            data.refreshToken
                        );

                        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
                        return this.instance(originalRequest);
                    } catch (refreshError) {
                        useAuthStore.getState().logout();
                        // Redirect to login handled by protected route component
                        return Promise.reject(refreshError);
                    }
                }

                // Format error response
                const errorResponse = {
                    success: false,
                    error: {
                        code: (error.response?.data as any)?.error || 'UNKNOWN',
                        message: (error.response?.data as any)?.message || error.message,
                        status: error.response?.status,
                    },
                };

                return Promise.reject(errorResponse);
            }
        );
    }

    get<T>(url: string, config?: any): Promise<T> {
        return this.instance.get(url, config);
    }

    post<T>(url: string, data?: any, config?: any): Promise<T> {
        return this.instance.post(url, data, config);
    }

    patch<T>(url: string, data?: any, config?: any): Promise<T> {
        return this.instance.patch(url, data, config);
    }

    delete<T>(url: string, config?: any): Promise<T> {
        return this.instance.delete(url, config);
    }
}

export const api = new ApiClient();
