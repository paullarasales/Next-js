import React, { ReactNode } from 'react';
import Navbar from './Navigation';
import Sidebar from './Sidebar';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex h-screen">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Navbar />

                <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
