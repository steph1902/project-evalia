export type QuestionType =
    | 'SHORT_TEXT'
    | 'LONG_TEXT'
    | 'SINGLE_CHOICE'
    | 'MULTIPLE_CHOICE'
    | 'DROPDOWN'
    | 'LINEAR_SCALE'
    | 'DATE'
    | 'FILE_UPLOAD'
    | 'SECTION_BREAK';

export interface QuestionOption {
    id: string;
    value: string;
    label: string;
    order: number;
}

export interface Question {
    id: string;
    type: QuestionType;
    title: string;
    description?: string;
    placeholder?: string;
    required: boolean;
    order: number;
    options?: QuestionOption[];
    aiWeight: number;
    aiInstructions?: string;
    isActive?: boolean;
}

export interface FormSettings {
    collectEmail: boolean;
    requireEmail: boolean;
    showProgressBar: boolean;
    shuffleQuestions: boolean;
    allowMultipleSubmissions: boolean;
    confirmationTitle: string;
    confirmationMessage: string;
    aiAnalysisEnabled: boolean;
}

export interface Form {
    id: string;
    title: string;
    description?: string;
    shareId: string;
    status: 'DRAFT' | 'PUBLISHED' | 'CLOSED' | 'ARCHIVED';
    questions: Question[];
    settings: FormSettings;
    createdAt: string;
    updatedAt: string;
}
