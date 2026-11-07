'use client'
import React from 'react';
import { useTrivia } from '../Provider/ProviderTrivia';

export default function ControlesTrivia() {
    const { preguntas, indiceActual, respondido, siguientePregunta } = useTrivia();

    if (preguntas.length === 0 || indiceActual >= preguntas.length) {
        return null;
    }

    return (
        <div className="mt-8 pt-4 border-t border-stone-200 flex justify-end">
            <button 
                className="text-xs border border-stone-800 text-stone-800 px-3 py-1 disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={siguientePregunta}
                disabled={!respondido}
            >
                Siguiente →
            </button>
        </div>
    );
}