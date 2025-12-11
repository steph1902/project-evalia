'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { apiClient } from '@/lib/api-client';

export default function RegisterPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const { data } = await apiClient.post('/auth/register', formData);

            // Backend register returns created user, might not return token immediately (depends on impl).
            // But usually we can auto-login or redirect to login.
            // Let's assume we need to login or it returns token. 
            // Checking AuthController.register -> returns AuthService.register.
            // AuthService.register typically returns user object only. 
            // So we should redirect to login or auto-login.
            // For simplicity: Redirect to Login with success message (or just Login).

            router.push('/login');
        } catch (err: any) {
            console.error('Registration error:', err);
            setError(err.response?.data?.message || 'Registration failed');
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
                        <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
                        <p className="text-neutral-500">Get started with Project Evalia today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="p-3 text-sm text-red-500 bg-red-50 rounded-lg">
                                {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                required
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

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
                                minLength={6}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            <p className="text-xs text-neutral-500">Must be at least 6 characters</p>
                        </div>

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? (
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            ) : null}
                            Create Account
                        </Button>
                    </form>

                    <div className="text-center text-sm">
                        <span className="text-neutral-500">Already have an account? </span>
                        <Link href="/login" className="font-medium hover:underline">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right: Design */}
            <div className="hidden lg:flex bg-neutral-900 text-white items-center justify-center p-8">
                <div className="max-w-md text-center">
                    <h2 className="text-3xl font-bold mb-4">Start collecting better data.</h2>
                    <p className="text-neutral-400">
                        Join thousands of recruiters and managers using AI to streamline their hiring process.
                    </p>
                </div>
            </div>
        </div>
    );
}
