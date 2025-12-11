'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { apiClient } from '@/lib/api-client';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const { data } = await apiClient.post('/auth/login', formData);

            // Save token
            if (data.accessToken) {
                localStorage.setItem('accessToken', data.accessToken);
                // Redirect to dashboard
                router.push('/forms');
            } else {
                setError('Login failed - no token received');
            }
        } catch (err: any) {
            console.error('Login error:', err);
            setError(err.response?.data?.message || 'Invalid email or password');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left: Form */}
            <div className="flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-sm space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                        <p className="text-neutral-500">Enter your credentials to access your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-3 text-sm text-red-500 bg-red-50 rounded-lg">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? (
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            ) : null}
                            Sign In
                        </Button>
                    </form>

                    <div className="text-center text-sm">
                        <span className="text-neutral-500">Don't have an account? </span>
                        <Link href="/register" className="font-medium hover:underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right: Design */}
            <div className="hidden lg:flex bg-neutral-100 items-center justify-center p-8">
                <div className="max-w-md text-center">
                    <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-8 flex items-center justify-center text-white text-3xl font-bold">
                        F
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Project Evalia</h2>
                    <p className="text-neutral-600">
                        The AI-powered platform for smarter recruitment and data collection.
                    </p>
                </div>
            </div>
        </div>
    );
}
