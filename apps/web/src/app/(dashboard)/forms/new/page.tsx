import { useEffect } from 'react';
import { FormBuilder } from '@/components/forms/form-builder/form-builder';
import { useFormBuilderStore } from '@/stores/form-builder-store';

export default function NewFormPage() {
    const { reset } = useFormBuilderStore();

    useEffect(() => {
        reset();
    }, [reset]);

    return <FormBuilder />;
}
