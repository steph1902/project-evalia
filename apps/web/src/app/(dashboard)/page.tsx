'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Users, BarChart, Plus, Loader2 } from 'lucide-react';
import { apiClient } from '@/lib/api-client';
import type { Form } from '@/types';

export default function DashboardPage() {
    const [forms, setForms] = useState<Form[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchForms = async () => {
            try {
                const response = await apiClient.get<Form[]>('/forms');
                setForms(response.data);
            } catch (error) {
                console.error('Failed to fetch forms:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchForms();
    }, []);

    // Calculate stats
    const totalForms = forms.length;
    // Assuming backend might not return stats, or we just count basic stuff.
    // Ideally the /forms endpoint includes response counts (FormsService.findAll has include: { _count: { responses: true } }).
    // But Form type in frontend (types/index.ts) does not have _count property yet.
    // I will cast or just ignore stats for now to be safe, or just check length.
    // Total Responses logic would require summing up across all forms if available.
    // Since I can't be sure of the type match without checking backend payload closely, I'll be conservative.

    // Quick hack for _count type if backend sends it
    const totalResponses = forms.reduce((acc, form: any) => acc + (form._count?.responses || 0), 0);
    // Average score is hard without data.

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-neutral-900">Dashboard</h1>
                    <p className="text-neutral-500 mt-2">Welcome back, here's an overview of your forms.</p>
                </div>
                <Link href="/forms/new">
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Create Form
                    </Button>
                </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-neutral-500">Total Forms</CardTitle>
                        <FileText className="h-4 w-4 text-neutral-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-neutral-900">{totalForms}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-neutral-500">Total Responses</CardTitle>
                        <Users className="h-4 w-4 text-neutral-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-neutral-900">{totalResponses}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-neutral-500">Average Score</CardTitle>
                        <BarChart className="h-4 w-4 text-neutral-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-neutral-900">--</div>
                        <p className="text-xs text-neutral-500 mt-1">Not available yet</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Forms */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="h-full">
                    <CardHeader>
                        <CardTitle>Your Forms</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <div className="flex justify-center py-8">
                                <Loader2 className="w-6 h-6 animate-spin text-neutral-400" />
                            </div>
                        ) : forms.length === 0 ? (
                            <div className="text-center py-8 text-neutral-500">
                                No forms created yet.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {forms.map((form: any) => (
                                    <Link key={form.id} href={`/forms/${form.id}`}>
                                        <div className="flex items-center justify-between p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500">
                                                    <FileText className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-neutral-900">{form.title}</h4>
                                                    <p className="text-sm text-neutral-500">
                                                        {form.status} • {form._count?.responses || 0} responses
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button variant="ghost" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                                                    <Link href={`/f/${form.shareId}`} target="_blank">View Public</Link>
                                                </Button>
                                                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                        {!loading && forms.length > 0 && (
                            <div className="mt-6 text-center">
                                {/* Pagination could go here */}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Pro Tip */}
                <Card className="h-full bg-gradient-to-br from-neutral-900 to-neutral-800 text-white border-transparent">
                    <CardHeader>
                        <CardTitle className="text-white">Pro Tip</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-neutral-300 leading-relaxed mb-6">
                            Use AI-powered analysis to automatically grade open-ended responses.
                            You can customize the scoring criteria in the form settings to match your specific requirements.
                        </p>
                        <Button variant="secondary">
                            Learn about AI Analysis
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
