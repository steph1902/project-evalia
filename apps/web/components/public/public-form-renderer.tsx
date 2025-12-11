'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/utils/cn';
import { apiClient } from '@/lib/api-client';
import type { Form, Question, QuestionType } from '@/types';

interface PublicFormRendererProps {
    form: Form;
}

export function PublicFormRenderer({ form }: PublicFormRendererProps) {
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleAnswerChange = (questionId: string, value: any) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: value,
        }));
    };

    const handleSubmit = async () => {
        // Basic validation
        const missingRequired = form.questions.filter(q => q.required && !answers[q.id]);
        if (missingRequired.length > 0) {
            setError(`Please answer required questions: ${missingRequired.map(q => q.title).join(', ')}`);
            return;
        }

        if (form.settings.requireEmail && !email) {
            setError('Please provide your email address.');
            return;
        }

        setSubmitting(true);
        setError(null);

        try {
            const formattedAnswers = Object.entries(answers).map(([questionId, value]) => {
                const question = form.questions.find(q => q.id === questionId);
                const answerPayload: any = { questionId };

                if (!question) return null;

                switch (question.type) {
                    case 'SHORT_TEXT':
                    case 'LONG_TEXT':
                    case 'SINGLE_CHOICE':
                    case 'DROPDOWN':
                        answerPayload.textValue = value as string;
                        break;
                    case 'MULTIPLE_CHOICE':
                        answerPayload.arrayValue = value as string[];
                        break;
                    case 'LINEAR_SCALE':
                        answerPayload.numberValue = Number(value);
                        break;
                    case 'DATE':
                        answerPayload.dateValue = value; // string ISO or similar
                        break;
                    default:
                        answerPayload.textValue = String(value);
                }
                return answerPayload;
            }).filter(Boolean);

            await apiClient.post(`/responses/${form.id}`, {
                respondentEmail: email || undefined,
                answers: formattedAnswers,
            });

            setSubmitted(true);
        } catch (err) {
            console.error(err);
            setError('Failed to submit form. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-neutral-200 p-8 text-center"
                >
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                        {form.settings.confirmationTitle || 'Thank you!'}
                    </h2>
                    <p className="text-neutral-500">
                        {form.settings.confirmationMessage || 'Your response has been recorded.'}
                    </p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
                    <h1 className="text-3xl font-bold text-neutral-900">{form.title}</h1>
                    {form.description && (
                        <p className="mt-2 text-neutral-500 text-lg">{form.description}</p>
                    )}
                </div>

                {/* Email Collection */}
                {form.settings.collectEmail && (
                    <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
                        <label className="block text-sm font-medium text-neutral-900 mb-2">
                            Email Address {form.settings.requireEmail && <span className="text-red-500">*</span>}
                        </label>
                        <Input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                )}

                {/* Questions */}
                <div className="space-y-4">
                    {form.questions.map((question) => (
                        <div key={question.id} className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
                            <label className="block text-lg font-medium text-neutral-900 mb-2">
                                {question.title}
                                {question.required && <span className="text-red-500 ml-1">*</span>}
                            </label>
                            {question.description && (
                                <p className="text-sm text-neutral-500 mb-4">{question.description}</p>
                            )}

                            <QuestionInput
                                question={question}
                                value={answers[question.id]}
                                onChange={(val) => handleAnswerChange(question.id, val)}
                            />
                        </div>
                    ))}
                </div>

                {/* Error & Submit */}
                {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                        {error}
                    </div>
                )}

                <Button
                    size="lg"
                    className="w-full text-lg h-12"
                    onClick={handleSubmit}
                    disabled={submitting}
                >
                    {submitting && <Loader2 className="w-5 h-5 animate-spin mr-2" />}
                    Submit Response
                </Button>
            </div>
        </div>
    );
}

function QuestionInput({ question, value, onChange }: { question: Question, value: any, onChange: (val: any) => void }) {
    switch (question.type) {
        case 'SHORT_TEXT':
            return (
                <Input
                    placeholder={question.placeholder || 'Your answer'}
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                />
            );
        case 'LONG_TEXT':
            return (
                <Textarea
                    placeholder={question.placeholder || 'Your answer'}
                    value={value || ''}
                    onChange={(e) => onChange(e.target.value)}
                    rows={4}
                />
            );
        case 'SINGLE_CHOICE':
            return (
                <div className="space-y-2">
                    {question.options?.map((opt) => (
                        <label key={opt.id} className="flex items-center gap-3 p-3 rounded-lg border border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-colors">
                            <div className={cn(
                                "w-5 h-5 rounded-full border flex items-center justify-center",
                                value === opt.value ? "border-black bg-black" : "border-neutral-300"
                            )}>
                                {value === opt.value && <div className="w-2 h-2 rounded-full bg-white" />}
                            </div>
                            <input
                                type="radio"
                                name={question.id}
                                className="hidden"
                                checked={value === opt.value}
                                onChange={() => onChange(opt.value)}
                            />
                            <span className="text-neutral-700">{opt.label}</span>
                        </label>
                    ))}
                </div>
            );
        case 'MULTIPLE_CHOICE':
            const selected = (value as string[]) || [];
            return (
                <div className="space-y-2">
                    {question.options?.map((opt) => {
                        const isSelected = selected.includes(opt.value);
                        return (
                            <label key={opt.id} className="flex items-center gap-3 p-3 rounded-lg border border-neutral-100 hover:bg-neutral-50 cursor-pointer transition-colors">
                                <div className={cn(
                                    "w-5 h-5 rounded-md border flex items-center justify-center",
                                    isSelected ? "border-black bg-black" : "border-neutral-300"
                                )}>
                                    {isSelected && <div className="w-3 h-3 text-white">✓</div>}
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={isSelected}
                                    onChange={() => {
                                        if (isSelected) {
                                            onChange(selected.filter(v => v !== opt.value));
                                        } else {
                                            onChange([...selected, opt.value]);
                                        }
                                    }}
                                />
                                <span className="text-neutral-700">{opt.label}</span>
                            </label>
                        );
                    })}
                </div>
            );
        // Add other types as needed
        default:
            return <div className="text-neutral-400 italic">Unsupported question type</div>;
    }
}
