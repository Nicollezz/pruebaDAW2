'use client'
import React from 'react';
import HeaderTrivia from '@/app/Components/HeaderTrivia';
import PreguntaTrivia from '@/app/Components/PreguntaTrivia';
import ControlesTrivia from '@/app/Components/ControlesTrivia';

export default function Page() {
    return (
        <main className="min-h-screen bg-white text-stone-900 p-6 flex flex-col justify-center items-center">
            <div className="w-full max-w-lg">
                <HeaderTrivia />
                <PreguntaTrivia />
                <ControlesTrivia />
            </div>
        </main>
    );
}