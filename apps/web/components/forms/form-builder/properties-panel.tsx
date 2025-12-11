import { useFormBuilderStore } from '@/stores/form-builder-store';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { nanoid } from 'nanoid';

// Simple Checkbox defined inline
const Checkbox = ({ checked, onCheckedChange, label }: { checked: boolean, onCheckedChange: (c: boolean) => void, label: string }) => (
    <label className="flex items-center gap-3 cursor-pointer group">
        <div className={cn(
            "w-5 h-5 rounded border flex items-center justify-center transition-colors",
            checked ? "bg-neutral-900 border-neutral-900" : "bg-white border-neutral-300 group-hover:border-neutral-400"
        )}>
            {checked && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
        </div>
        <span className="text-sm text-neutral-700 font-medium select-none">{label}</span>
    </label>
);

export function QuestionProperties({ questionId }: { questionId: string }) {
    const { questions, updateQuestion } = useFormBuilderStore();
    const question = questions.find(q => q.id === questionId);

    if (!question) return null;

    const handleAddOption = () => {
        const newOptions = [...(question.options || [])];
        newOptions.push({
            id: nanoid(),
            value: `Option ${newOptions.length + 1}`,
            label: `Option ${newOptions.length + 1}`,
            order: newOptions.length,
        });
        updateQuestion(question.id, { options: newOptions });
    };

    const handleUpdateOption = (optionId: string, value: string) => {
        const newOptions = question.options?.map(opt =>
            opt.id === optionId ? { ...opt, value, label: value } : opt
        );
        updateQuestion(question.id, { options: newOptions });
    };

    const handleRemoveOption = (optionId: string) => {
        const newOptions = question.options?.filter(opt => opt.id !== optionId);
        updateQuestion(question.id, { options: newOptions });
    };

    return (
        <div className="space-y-6">
            <div>
                <h4 className="font-semibold text-neutral-900 mb-4">Properties</h4>
                <div className="space-y-4">
                    <Checkbox
                        label="Required"
                        checked={question.required}
                        onCheckedChange={(c) => updateQuestion(question.id, { required: c })}
                    />
                </div>
            </div>

            {(question.type === 'SINGLE_CHOICE' || question.type === 'MULTIPLE_CHOICE' || question.type === 'DROPDOWN') && (
                <div className="pt-6 border-t border-neutral-100">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-neutral-900">Options</h4>
                    </div>
                    <div className="space-y-3">
                        {question.options?.map((option) => (
                            <div key={option.id} className="flex items-center gap-2">
                                <Input
                                    value={option.label}
                                    onChange={(e) => handleUpdateOption(option.id, e.target.value)}
                                    className="h-8 text-sm"
                                />
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-8 w-8 text-neutral-400 hover:text-red-500"
                                    onClick={() => handleRemoveOption(option.id)}
                                    disabled={(question.options?.length || 0) <= 1}
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        ))}
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full mt-2"
                            onClick={handleAddOption}
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            Add Option
                        </Button>
                    </div>
                </div>
            )}

            <div className="pt-6 border-t border-neutral-100">
                <h4 className="font-semibold text-neutral-900 mb-4">AI Configuration</h4>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between items-center mb-1.5">
                            <label className="text-sm font-medium text-neutral-700">Weight (Impact)</label>
                            <span className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded text-neutral-600">
                                {question.aiWeight}/10
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="10"
                            value={question.aiWeight}
                            onChange={(e) => updateQuestion(question.id, { aiWeight: parseInt(e.target.value) })}
                            className="w-full"
                        />
                    </div>

                    <Textarea
                        label="Analysis Instructions"
                        value={question.aiInstructions || ''}
                        onChange={(e) => updateQuestion(question.id, { aiInstructions: e.target.value })}
                        placeholder="Tell AI what to look for in the answer..."
                        className="text-sm"
                        rows={3}
                    />
                </div>
            </div>
        </div>
    );
}
