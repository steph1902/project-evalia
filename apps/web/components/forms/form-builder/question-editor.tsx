import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
import { GripVertical, Trash2, Copy, MoreVertical } from 'lucide-react';
import { useFormBuilderStore } from '@/stores/form-builder-store';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Question } from '@/types';

interface QuestionEditorProps {
    question: Question;
    index: number;
    isSelected: boolean;
    onSelect: () => void;
}

export function QuestionEditor({ question, index, isSelected, onSelect }: QuestionEditorProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: question.id });

    const { updateQuestion, removeQuestion, duplicateQuestion } = useFormBuilderStore();

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 10 : 1,
    };

    return (
        <motion.div
            ref={setNodeRef}
            style={style}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                'group relative bg-white rounded-xl border transition-all duration-200 mb-4',
                isSelected
                    ? 'border-neutral-900 ring-1 ring-neutral-900 shadow-md'
                    : 'border-neutral-200 hover:border-neutral-300',
                isDragging && 'opacity-50'
            )}
            onClick={onSelect}
        >
            <div className="flex items-start p-4 gap-4">
                {/* Drag Handle */}
                <div
                    {...attributes}
                    {...listeners}
                    className="mt-2 cursor-grab active:cursor-grabbing text-neutral-300 hover:text-neutral-500 transition-colors"
                >
                    <GripVertical className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <Input
                                value={question.title}
                                onChange={(e) => updateQuestion(question.id, { title: e.target.value })}
                                placeholder="Question Title"
                                className={cn(
                                    "text-lg font-medium bg-transparent border-transparent px-0 h-auto focus:ring-0 focus:border-neutral-200 rounded-none border-b transition-colors",
                                    !question.title && "italic"
                                )}
                            />
                        </div>

                        {/* Quick Actions */}
                        {isSelected && (
                            <div className="flex items-center gap-1">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        duplicateQuestion(question.id);
                                    }}
                                    title="Duplicate"
                                >
                                    <Copy className="w-4 h-4" />
                                </Button>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeQuestion(question.id);
                                    }}
                                    title="Delete"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Type-specific preview (simplified) */}
                    <div className="pointer-events-none opacity-60">
                        {question.type === 'SHORT_TEXT' && (
                            <Input disabled placeholder="Short answer text" />
                        )}
                        {question.type === 'LONG_TEXT' && (
                            <div className="h-24 rounded-lg border border-neutral-200 border-dashed bg-neutral-50" />
                        )}
                        {(question.type === 'SINGLE_CHOICE' || question.type === 'MULTIPLE_CHOICE') && (
                            <div className="space-y-2">
                                {question.options?.map((opt, i) => (
                                    <div key={opt.id} className="flex items-center gap-2">
                                        <div className={cn(
                                            "w-4 h-4 border border-neutral-300",
                                            question.type === 'SINGLE_CHOICE' ? 'rounded-full' : 'rounded-md'
                                        )} />
                                        <span className="text-sm text-neutral-500">{opt.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
