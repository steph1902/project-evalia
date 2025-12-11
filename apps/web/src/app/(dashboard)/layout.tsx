import Link from 'next/link';
import {
    LayoutDashboard,
    FileText,
    Settings,
    LogOut,
    Plus,
    BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-neutral-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-neutral-200 fixed inset-y-0 z-50">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold">
                            F
                        </div>
                        <span className="font-bold text-xl">Project Evalia</span>
                    </Link>

                    <Button className="w-full mb-8 justify-start" size="lg">
                        <Plus className="w-4 h-4 mr-2" />
                        New Form
                    </Button>

                    <nav className="space-y-1">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-3 px-3 py-2 text-neutral-900 bg-neutral-100 rounded-lg font-medium"
                        >
                            <LayoutDashboard className="w-5 h-5" />
                            Dashboard
                        </Link>
                        <Link
                            href="/forms"
                            className="flex items-center gap-3 px-3 py-2 text-neutral-600 hover:bg-neutral-50 rounded-lg font-medium transition-colors"
                        >
                            <FileText className="w-5 h-5" />
                            My Forms
                        </Link>
                        <Link
                            href="/analytics"
                            className="flex items-center gap-3 px-3 py-2 text-neutral-600 hover:bg-neutral-50 rounded-lg font-medium transition-colors"
                        >
                            <BarChart3 className="w-5 h-5" />
                            Analytics
                        </Link>
                        <Link
                            href="/settings"
                            className="flex items-center gap-3 px-3 py-2 text-neutral-600 hover:bg-neutral-50 rounded-lg font-medium transition-colors"
                        >
                            <Settings className="w-5 h-5" />
                            Settings
                        </Link>
                    </nav>
                </div>

                <div className="absolute bottom-0 w-full p-6 border-t border-neutral-100">
                    <button className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 font-medium transition-colors">
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
