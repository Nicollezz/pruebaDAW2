'use client'
import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-stone-900 flex flex-col items-center justify-center p-6">
            <div className="max-w-md w-full text-center">
                <h1 className="text-xl font-normal mb-2">Juego de Trivia</h1>
                <Link 
                    href="/Trivia" 
                    className="inline-block border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white px-5 py-2 text-sm transition-colors"
                >
                    Comenzar juego
                </Link>
            </div>
        </main>
    );
}