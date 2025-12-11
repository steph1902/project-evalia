import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Project Evalia',
    description: 'AI-Powered Form Builder & Analysis',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
