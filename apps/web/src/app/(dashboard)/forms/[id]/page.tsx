'use client';

import { useEffect, useState } from 'react';
import { FormBuilder } from '@/components/forms/form-builder/form-builder';
import { useFormBuilderStore } from '@/stores/form-builder-store';
import { apiClient } from '@/lib/api-client';
import { Loader2 } from 'lucide-react';
import type { Form } from '@/types';

export default function EditFormPage({ params }: { params: Promise<{ id: string }> }) {
    const { loadForm, reset } = useFormBuilderStore();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [formId, setFormId] = useState<string>('');

    useEffect(() => {
        const unwrap = async () => {
            const resolved = await params;
            setFormId(resolved.id);
        };
        unwrap();
    }, [params]);

    useEffect(() => {
        if (!formId) return;

        const fetchForm = async () => {
            try {
                const response = await apiClient.get<Form>(`/forms/${formId}`);
                loadForm(response.data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        // Reset store before fetching to avoid stale state
        reset();
        fetchForm();
    }, [formId, loadForm, reset]);

    if (loading) {
        return (
            <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-neutral-400" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">Failed to load form</h2>
                <p className="text-neutral-500">Please try refreshing the page.</p>
            </div>
        );
    }

    return <FormBuilder />;
}
