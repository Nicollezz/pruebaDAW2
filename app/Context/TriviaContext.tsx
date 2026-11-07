import { createContext } from "react";
import { Pregunta } from "../Modelos/Pregunta";

export const TriviaContext = createContext({
    preguntas: [] as Pregunta[],
    indiceActual: 0,
    puntajeTotal: 0,
    preguntasRespondidas: 0,
    resultadoMensaje: '',
    respondido: false,
    seleccionarRespuesta: (respuesta: boolean) => {},
    siguientePregunta: () => {},
    reiniciarJuego: () => {}
});