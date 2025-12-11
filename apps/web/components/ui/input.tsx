import * as React from 'react';
import { cn } from '@/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, helperText, id, ...props }, ref) => {
        const inputId = id || React.useId();

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-neutral-700 mb-1.5"
                    >
                        {label}
                    </label>
                )}
                <input
                    id={inputId}
                    className={cn(
                        'flex h-10 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
                        error && 'border-red-500 focus:ring-red-500',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
                {helperText && !error && <p className="mt-1 text-sm text-neutral-500">{helperText}</p>}
            </div>
        );
    }
);
Input.displayName = 'Input';

export { Input };
