'use client'
import React, { useContext, useState, useEffect } from 'react';
import { Plantilla } from '../Modelos/Plantilla';
import { Pregunta } from '../Modelos/Pregunta';
import { TriviaContext } from '../Context/TriviaContext';

export default function ProviderTrivia({ children }: Plantilla) {
    const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
    const [indiceActual, setIndiceActual] = useState<number>(0);
    const [puntajeTotal, setPuntajeTotal] = useState<number>(0);
    const [preguntasRespondidas, setPreguntasRespondidas] = useState<number>(0);
    const [resultadoMensaje, setResultadoMensaje] = useState<string>('');
    const [respondido, setRespondido] = useState<boolean>(false);

    useEffect(() => {
        const preguntasjuego: Pregunta[] = [
           { idPregunas: "1", DescripcionPregunta: "¿La consola Nintendo Switch se puede utilizar tanto en modo portátil como conectada al televisor?", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: true, puntajePregunta: 1 },
            { idPregunas: "2", DescripcionPregunta: "¿En 'The Legend of Zelda: Ocarina of Time', el hada compañera que guía a Link durante su aventura se llama Navi?", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: true, puntajePregunta: 1 },
            { idPregunas: "3", DescripcionPregunta: "¿En 'Super Mario 64', las estrellas de poder se consiguen saltando dentro de cuadros colgados en las paredes del castillo?", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: true, puntajePregunta: 1 },
            { idPregunas: "4", DescripcionPregunta: "¿El archienemigo principal de Sonic the Hedgehog, encargado de capturar animales para convertirlos en robots, se llama Dr. Eggman?", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: true, puntajePregunta: 1 },
            { idPregunas: "5", DescripcionPregunta: "¿En el clásico 'Super Mario World 2: Yoshi's Island', el personaje que Yoshi debe llevar a salvo a lo largo de los mundos es el Bebé Luigi?", opcionRespuesta1: true, opcionRespuesta2: false, respuestaCorrecta: false, puntajePregunta: 1 }
        ];
        setPreguntas(preguntasjuego);
        
    }, []);

    function seleccionarRespuesta(respuestaSeleccionada: boolean) {
        if (respondido) return;
        const preguntaActual = preguntas[indiceActual];
        setRespondido(true);
        setPreguntasRespondidas(prev => prev + 1);

        if (respuestaSeleccionada === preguntaActual.respuestaCorrecta) {
            setResultadoMensaje('¡Correcto!');
            setPuntajeTotal(prev => prev + preguntaActual.puntajePregunta);
        } else {
            setResultadoMensaje('Incorrecto');
        }
    }

    function siguientePregunta() {
        setRespondido(false);
        setResultadoMensaje('');
        setIndiceActual(prev => prev + 1);
    }

    function reiniciarJuego() {
        setIndiceActual(0);
        setPuntajeTotal(0);
        setPreguntasRespondidas(0);
        setResultadoMensaje('');
        setRespondido(false);
    }

    return (
        <TriviaContext.Provider value={{ preguntas, indiceActual, puntajeTotal, preguntasRespondidas, resultadoMensaje, respondido, seleccionarRespuesta, siguientePregunta, reiniciarJuego }}>
            {children}
        </TriviaContext.Provider>
    );
}

export function useTrivia() {
    return useContext(TriviaContext);
}