import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { nanoid } from 'nanoid';
import type { Question, QuestionType, FormSettings } from '@/types';
import { apiClient } from '@/lib/api-client';

interface FormBuilderState {
    id: string | null;
    title: string;
    description: string;
    questions: Question[];
    settings: FormSettings;
    selectedQuestionId: string | null;
    isDirty: boolean;
    isPublished: boolean;
    saveStatus: 'idle' | 'saving' | 'saved' | 'error';
    lastSavedAt: Date | null;

    // Actions
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    addQuestion: (type: QuestionType) => void;
    updateQuestion: (id: string, updates: Partial<Question>) => void;
    removeQuestion: (id: string) => void;
    duplicateQuestion: (id: string) => void;
    reorderQuestions: (fromIndex: number, toIndex: number) => void;
    selectQuestion: (id: string | null) => void;
    updateSettings: (updates: Partial<FormSettings>) => void;
    reset: () => void;
    loadForm: (form: any) => void;
    saveForm: () => Promise<void>;
    publishForm: () => Promise<void>;
}

const defaultSettings: FormSettings = {
    collectEmail: true,
    requireEmail: true,
    showProgressBar: true,
    shuffleQuestions: false,
    allowMultipleSubmissions: false,
    confirmationTitle: 'Thank you!',
    confirmationMessage: 'Your response has been recorded.',
    aiAnalysisEnabled: true,
};

const defaultQuestion = (type: QuestionType): Question => ({
    id: nanoid(),
    type,
    title: '',
    description: '',
    required: false,
    order: 0,
    aiWeight: 5,
    options: type === 'SINGLE_CHOICE' || type === 'MULTIPLE_CHOICE' || type === 'DROPDOWN'
        ? [{ id: nanoid(), value: 'Option 1', label: 'Option 1', order: 0 }]
        : undefined,
});

export const useFormBuilderStore = create<FormBuilderState>()(
    immer((set, get) => ({
        id: null,
        title: '',
        description: '',
        questions: [],
        settings: defaultSettings,
        selectedQuestionId: null,
        isDirty: false,
        isPublished: false,
        saveStatus: 'idle',
        lastSavedAt: null,

        setTitle: (title) => set((state) => {
            state.title = title;
            state.isDirty = true;
        }),

        setDescription: (description) => set((state) => {
            state.description = description;
            state.isDirty = true;
        }),

        addQuestion: (type) => set((state) => {
            const newQuestion = defaultQuestion(type);
            newQuestion.order = state.questions.length;
            state.questions.push(newQuestion);
            state.selectedQuestionId = newQuestion.id;
            state.isDirty = true;
        }),

        updateQuestion: (id, updates) => set((state) => {
            const index = state.questions.findIndex((q: Question) => q.id === id);
            if (index !== -1) {
                state.questions[index] = { ...state.questions[index], ...updates };
                state.isDirty = true;
            }
        }),

        removeQuestion: (id) => set((state) => {
            state.questions = state.questions.filter((q: Question) => q.id !== id);
            state.questions.forEach((q: Question, i: number) => { q.order = i; });
            if (state.selectedQuestionId === id) {
                state.selectedQuestionId = null;
            }
            state.isDirty = true;
        }),

        duplicateQuestion: (id) => set((state) => {
            const index = state.questions.findIndex((q: Question) => q.id === id);
            if (index !== -1) {
                const original = state.questions[index];
                const duplicate = {
                    ...JSON.parse(JSON.stringify(original)),
                    id: nanoid(),
                    title: original.title ? `${original.title} (Copy)` : '',
                };
                state.questions.splice(index + 1, 0, duplicate);
                state.questions.forEach((q: Question, i: number) => { q.order = i; });
                state.selectedQuestionId = duplicate.id;
                state.isDirty = true;
            }
        }),

        reorderQuestions: (fromIndex, toIndex) => set((state) => {
            const [removed] = state.questions.splice(fromIndex, 1);
            state.questions.splice(toIndex, 0, removed);
            state.questions.forEach((q: Question, i: number) => { q.order = i; });
            state.isDirty = true;
        }),

        selectQuestion: (id) => set((state) => {
            state.selectedQuestionId = id;
        }),

        updateSettings: (updates) => set((state) => {
            state.settings = { ...state.settings, ...updates };
            state.isDirty = true;
        }),

        reset: () => set({
            id: null,
            title: '',
            description: '',
            questions: [],
            settings: defaultSettings,
            selectedQuestionId: null,
            isDirty: false,
            isPublished: false,
            saveStatus: 'idle',
            lastSavedAt: null,
        }),

        loadForm: (form) => set({
            id: form.id,
            title: form.title,
            description: form.description || '',
            questions: form.questions || [],
            settings: form.settings || defaultSettings,
            selectedQuestionId: null,
            isDirty: false,
            isPublished: form.status === 'PUBLISHED',
            saveStatus: 'idle',
            lastSavedAt: new Date(form.updatedAt),
        }),

        saveForm: async () => {
            const state = get();
            set((s) => { s.saveStatus = 'saving'; });

            try {
                const payload = {
                    title: state.title || 'Untitled Form',
                    description: state.description,
                    questions: state.questions,
                    settings: state.settings,
                };

                let response;
                if (state.id) {
                    response = await apiClient.patch(`/forms/${state.id}`, payload);
                } else {
                    response = await apiClient.post('/forms', payload);
                }

                set((s) => {
                    s.id = response.data.id;
                    s.isDirty = false;
                    s.saveStatus = 'saved';
                    s.lastSavedAt = new Date();
                    // We don't reload questions to avoid UI jumps, but in a real app we might
                });
            } catch (error) {
                console.error('Failed to save form:', error);
                set((s) => { s.saveStatus = 'error'; });
                throw error;
            }
        },

        publishForm: async () => {
            const state = get();
            if (!state.id) return;

            set((s) => { s.saveStatus = 'saving'; });

            try {
                await apiClient.post(`/forms/${state.id}/publish`);
                set((s) => {
                    s.isPublished = true;
                    s.saveStatus = 'saved';
                });
            } catch (error) {
                console.error('Failed to publish form:', error);
                set((s) => { s.saveStatus = 'error'; });
                throw error;
            }
        },
    }))
);
