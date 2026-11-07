'use client'
import React from 'react';
import { useTrivia } from '../Provider/ProviderTrivia';

export default function PreguntaTrivia() {
    const { 
        preguntas, 
        indiceActual, 
        resultadoMensaje, 
        respondido, 
        seleccionarRespuesta, 
        puntajeTotal, 
        reiniciarJuego,
        siguientePregunta 
    } = useTrivia();

    if (preguntas.length === 0) {
        return <div className="py-8 text-sm text-stone-400">Cargando...</div>;
    }

    if (indiceActual >= preguntas.length) {
        return (
            <div className="py-8 text-center">
                <p className="text-sm mb-1">¡Terminaste!</p>
                <p className="text-xs text-stone-500 mb-6">Puntaje: {puntajeTotal} de {preguntas.length}</p>
                
                <button 
                    className="border border-stone-400 text-stone-800 px-4 py-1.5 text-xs"
                    onClick={reiniciarJuego}
                >
                    Reiniciar juego
                </button>
            </div>
        );
    }

    const pregunta = preguntas[indiceActual];
    const esUltimaPregunta = indiceActual === preguntas.length - 1;

    return (
        <div>
            <h2 className="text-sm font-normal mb-6 text-stone-900 leading-relaxed">
                {pregunta.DescripcionPregunta}
            </h2>

            <div className="flex flex-col gap-2">
                <button 
                    className={`w-full py-2.5 px-4 text-xs text-left border ${
                        respondido 
                            ? 'border-stone-200 text-stone-400 cursor-default' 
                            : 'border-stone-300 text-stone-800'
                    }`}
                    onClick={() => seleccionarRespuesta(pregunta.opcionRespuesta1)}
                    disabled={respondido}
                >
                    {pregunta.opcionRespuesta1 ? 'Verdadero' : 'Falso'}
                </button>

                <button 
                    className={`w-full py-2.5 px-4 text-xs text-left border ${
                        respondido 
                            ? 'border-stone-200 text-stone-400 cursor-default' 
                            : 'border-stone-300 text-stone-800'
                    }`}
                    onClick={() => seleccionarRespuesta(pregunta.opcionRespuesta2)}
                    disabled={respondido}
                >
                    {pregunta.opcionRespuesta2 ? 'Verdadero' : 'Falso'}
                </button>
            </div>

            {resultadoMensaje && (
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-stone-500">{resultadoMensaje}</span>
                    
                    {respondido && esUltimaPregunta && (
                        <button 
                            className="text-xs border border-stone-800 text-stone-800 px-3 py-1"
                            onClick={siguientePregunta}
                        >
                            Ver resultados →
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}