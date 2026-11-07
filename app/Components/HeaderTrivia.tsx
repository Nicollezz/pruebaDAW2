'use client'
import React from 'react';
import { useTrivia } from '../Provider/ProviderTrivia';

export default function HeaderTrivia() {
    const { preguntas, indiceActual, puntajeTotal } = useTrivia();

    if (preguntas.length === 0) return null;

    return (
        <div className="flex justify-between items-center py-4 mb-6 border-b border-stone-200 text-sm">
            <span>Pregunta {indiceActual + 1} de {preguntas.length}</span>
            <span>Puntos: {puntajeTotal}</span>
        </div>
    );
}