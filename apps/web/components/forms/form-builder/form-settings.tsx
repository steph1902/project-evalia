import { useFormBuilderStore } from '@/stores/form-builder-store';


import * as React from 'react';
import { cn } from '@/utils/cn';

// Simple Switch Component defined inline for now
const SimpleSwitch = ({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: (c: boolean) => void }) => (
    <button
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={cn(
            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2",
            checked ? "bg-neutral-900" : "bg-neutral-200"
        )}
    >
        <span
            className={cn(
                "inline-block h-4 w-4 transform rounded-full bg-white transition transition-transform",
                checked ? "translate-x-6" : "translate-x-1"
            )}
        />
    </button>
);

export function FormSettings() {
    const { settings, updateSettings } = useFormBuilderStore();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-neutral-700">Collect Email</label>
                <SimpleSwitch
                    checked={settings.collectEmail}
                    onCheckedChange={(c) => updateSettings({ collectEmail: c })}
                />
            </div>

            <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-neutral-700">Show Progress Bar</label>
                <SimpleSwitch
                    checked={settings.showProgressBar}
                    onCheckedChange={(c) => updateSettings({ showProgressBar: c })}
                />
            </div>

            <div className="pt-4 border-t border-neutral-100">
                <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-neutral-900">AI Analysis</label>
                    <div className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
                        Pro
                    </div>
                </div>
                <p className="text-xs text-neutral-500 mb-4">
                    Enable AI to analyze responses, generate summaries, and provide automated scoring.
                </p>
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-neutral-700">Enable AI</label>
                    <SimpleSwitch
                        checked={settings.aiAnalysisEnabled}
                        onCheckedChange={(c) => updateSettings({ aiAnalysisEnabled: c })}
                    />
                </div>
            </div>
        </div>
    );
}
