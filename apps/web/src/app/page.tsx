import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
            <h1 className="text-5xl font-bold mb-4">Project Evalia</h1>
            <p className="text-xl text-neutral-400 mb-8 max-w-lg text-center">
                The modern, AI-powered form builder for smart data collection and automated insights.
            </p>
            <Link
                href="/forms"
                className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors"
            >
                Go to Dashboard
            </Link>
        </div>
    );
}
