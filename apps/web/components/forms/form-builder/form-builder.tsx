'use client';

import { useCallback } from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormBuilderStore } from '@/stores/form-builder-store';
import { QuestionEditor } from './question-editor';
import { QuestionTypeSelector } from './question-type-selector';
import { FormSettings } from './form-settings';
import { QuestionProperties } from './properties-panel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { QuestionType } from '@/types';

export function FormBuilder() {
    const {
        title,
        description,
        questions,
        selectedQuestionId,
        setTitle,
        setDescription,
        addQuestion,
        reorderQuestions,
        selectQuestion,
        saveForm,
        publishForm,
        saveStatus,
        isPublished,
    } = useFormBuilderStore();

    const handleDragEnd = useCallback((event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            const oldIndex = questions.findIndex(q => q.id === active.id);
            const newIndex = questions.findIndex(q => q.id === over.id);
            reorderQuestions(oldIndex, newIndex);
        }
    }, [questions, reorderQuestions]);

    const handleAddQuestion = (type: QuestionType) => {
        addQuestion(type);
    };

    return (
        <div className="grid grid-cols-12 gap-6 h-full">
            {/* Sidebar */}
            <div className="col-span-3 space-y-6">
                <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                    <h3 className="font-semibold text-neutral-900 mb-4">Form Details</h3>

                    <div className="space-y-4">
                        <Input
                            label="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter form title"
                        />

                        <Textarea
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Brief description of this form"
                            rows={3}
                        />
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                    <h3 className="font-semibold text-neutral-900 mb-4">Add Question</h3>
                    {/* @ts-ignore - Ignoring strict type check for now */}
                    <QuestionTypeSelector onSelect={handleAddQuestion} />
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
                    <h3 className="font-semibold text-neutral-900 mb-4">Settings</h3>
                    <FormSettings />
                </div>
            </div>

            {/* Main Editor */}
            <div className="col-span-6">
                <div className="bg-white rounded-2xl border border-neutral-200 p-8 min-h-[600px] shadow-sm">
                    {/* Form Header Preview */}
                    <div className="mb-8 pb-8 border-b border-neutral-100 flex items-start justify-between">
                        <div className="flex-1 mr-4">
                            <motion.h1
                                className="text-3xl font-bold text-neutral-900"
                                layout
                            >
                                {title || 'Untitled Form'}
                            </motion.h1>
                            {description && (
                                <motion.p
                                    className="text-neutral-500 mt-2 text-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {description}
                                </motion.p>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-sm text-neutral-500 mr-2">
                                {saveStatus === 'saving' && 'Saving...'}
                                {saveStatus === 'saved' && 'Saved'}
                                {saveStatus === 'error' && 'Error saving'}
                            </div>
                            <Button
                                variant="outline"
                                onClick={() => saveForm()}
                                disabled={saveStatus === 'saving'}
                            >
                                Save Draft
                            </Button>
                            <Button
                                onClick={() => publishForm()}
                                disabled={saveStatus === 'saving' || isPublished}
                            >
                                {isPublished ? 'Published' : 'Publish'}
                            </Button>
                        </div>
                    </div>

                    {/* Questions */}
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={questions.map(q => q.id)}
                            strategy={verticalListSortingStrategy}
                        >
                            <AnimatePresence mode="popLayout">
                                {questions.map((question, index) => (
                                    <QuestionEditor
                                        key={question.id}
                                        question={question}
                                        index={index}
                                        isSelected={selectedQuestionId === question.id}
                                        onSelect={() => selectQuestion(question.id)}
                                    />
                                ))}
                            </AnimatePresence>
                        </SortableContext>
                    </DndContext>

                    {/* Empty State */}
                    {questions.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-16"
                        >
                            <div className="w-16 h-16 bg-neutral-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-neutral-900 mb-2">
                                No questions yet
                            </h3>
                            <p className="text-neutral-500 mb-6">
                                Add your first question from the sidebar
                            </p>
                            <Button
                                variant="secondary"
                                onClick={() => addQuestion('SHORT_TEXT')}
                            >
                                Add a text question
                            </Button>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Properties Panel */}
            <div className="col-span-3">
                <AnimatePresence mode="wait">
                    {selectedQuestionId && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-white rounded-2xl border border-neutral-200 p-6 sticky top-6 shadow-sm"
                        >
                            <QuestionProperties questionId={selectedQuestionId} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
