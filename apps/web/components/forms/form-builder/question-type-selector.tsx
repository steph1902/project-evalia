import {
    Type,
    AlignLeft,
    CheckSquare,
    List,
    ChevronDown,
    BarChartHorizontal,
    Calendar,
    Upload
} from 'lucide-react';
import type { QuestionType } from '@/types';

const questionTypes: { type: QuestionType; label: string; icon: any }[] = [
    { type: 'SHORT_TEXT', label: 'Short Text', icon: Type },
    { type: 'LONG_TEXT', label: 'Long Text', icon: AlignLeft },
    { type: 'SINGLE_CHOICE', label: 'Single Choice', icon: CheckSquare },
    { type: 'MULTIPLE_CHOICE', label: 'Multiple Choice', icon: List },
    { type: 'DROPDOWN', label: 'Dropdown', icon: ChevronDown },
    { type: 'LINEAR_SCALE', label: 'Linear Scale', icon: BarChartHorizontal },
    { type: 'DATE', label: 'Date', icon: Calendar },
    { type: 'FILE_UPLOAD', label: 'File Upload', icon: Upload },
];

interface QuestionTypeSelectorProps {
    onSelect: (type: QuestionType) => void;
}

export function QuestionTypeSelector({ onSelect }: QuestionTypeSelectorProps) {
    return (
        <div className="grid grid-cols-2 gap-2">
            {questionTypes.map(({ type, label, icon: Icon }) => (
                <button
                    key={type}
                    onClick={() => onSelect(type)}
                    className="flex flex-col items-center justify-center p-3 rounded-xl border border-neutral-100 hover:border-neutral-900 hover:bg-neutral-50 transition-all group"
                >
                    <Icon className="w-5 h-5 text-neutral-500 group-hover:text-neutral-900 mb-2" />
                    <span className="text-xs font-medium text-neutral-600 group-hover:text-neutral-900">
                        {label}
                    </span>
                </button>
            ))}
        </div>
    );
}
