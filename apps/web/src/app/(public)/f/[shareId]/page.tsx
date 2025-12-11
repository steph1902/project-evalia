'use client';

import { PublicFormRenderer } from '@/components/public/public-form-renderer';
import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api-client';
import { Loader2 } from 'lucide-react';
import type { Form } from '@/types';

export default function PublicFormPage({ params }: { params: Promise<{ shareId: string }> }) {
    const [form, setForm] = useState<Form | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [sharedId, setSharedId] = useState<string>('');

    useEffect(() => {
        // Next.js 15+ params are async promises in some contexts, but let's handle it safely
        // Actually in Next 16 (Beta) it might be different, but sticking to standard pattern:
        // Client components receive params as props directly in some versions or via use(), but here it's typed as Promise or object depending on version.
        // The user input file showed `params: { shareId: string }`. I will respect that if it compiles, 
        // but Next 15 changed params to be a Promise. Next 16 likely keeps it.
        // Let's assume params is a Promise to be safe or use `use` hook.
        // For now, I'll unwrap it if needed or trust the previous file signature if it was working? 
        // The previous file had `params: { shareId: string }`. I will enable async unwrapping just in case.

        const unwrapParams = async () => {
            const resolvedParams = await params;
            setSharedId(resolvedParams.shareId);
        };
        unwrapParams();
    }, [params]);

    useEffect(() => {
        if (!sharedId) return;

        const fetchForm = async () => {
            try {
                // Determine if we are fetching public or internal form. The URL scheme implies public.
                const response = await apiClient.get<Form>(`/forms/public/${sharedId}`);
                setForm(response.data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchForm();
    }, [sharedId]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-neutral-50">
                <Loader2 className="w-8 h-8 animate-spin text-neutral-400" />
            </div>
        );
    }

    if (error || !form) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 p-4 text-center">
                <h1 className="text-2xl font-bold text-neutral-900 mb-2">Form Not Found</h1>
                <p className="text-neutral-500">This form is unavailable or does not exist.</p>
            </div>
        );
    }

    return <PublicFormRenderer form={form} />;
}
