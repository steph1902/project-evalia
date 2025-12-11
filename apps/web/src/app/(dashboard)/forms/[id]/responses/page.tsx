'use client';

import { useEffect, useState } from 'react';
import { api } from '@/lib/api/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ResponsesPage({ params }: { params: { id: string } }) {
    const [responses, setResponses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResponses = async () => {
            try {
                const data = await api.get<any[]>(`/responses/form/${params.id}`);
                setResponses(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchResponses();
    }, [params.id]);

    if (loading) {
        return (
            <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-neutral-400" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="w-4 h-4" />
                        </Button>
                    </Link>
                    <h1 className="text-2xl font-bold text-neutral-900">Form Responses</h1>
                </div>
                <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export CSV
                </Button>
            </div>

            <div className="grid gap-4">
                {responses.map((response) => (
                    <Card key={response.id} className="hover:border-neutral-300 transition-colors cursor-pointer">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                                    <span className="font-medium text-neutral-900">
                                        {response.respondentEmail || 'Anonymous'}
                                    </span>
                                </div>
                                <span className="text-sm text-neutral-500">
                                    {new Date(response.createdAt).toLocaleDateString()}
                                </span>
                            </div>

                            <div className="space-y-2">
                                {/* AI Summary if available */}
                                {response.aiAnalysis && (
                                    <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider">AI Summary</span>
                                            <span className="text-xs font-medium text-neutral-500">Score: {response.aiAnalysis.overallScore}/100</span>
                                        </div>
                                        <p className="text-sm text-neutral-600 line-clamp-2">
                                            {response.aiAnalysis.summary}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}

                {responses.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-xl border border-neutral-200 border-dashed">
                        <p className="text-neutral-500">No responses yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
