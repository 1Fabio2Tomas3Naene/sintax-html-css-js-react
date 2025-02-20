import { sintaxesOfJs } from "./sintaxOfJsArray";

export const allSintaxesOfJs = () => {
    return sintaxesOfJs
};

export const filterByTypedWordJs = (typedWord) => {
    return sintaxesOfJs.filter((sintaxes) =>
        sintaxes.categoria.toLowerCase().includes(typedWord.toLowerCase()) ||
        sintaxes.comando.toLowerCase().includes(typedWord.toLowerCase()) ||
        sintaxes.texto.toLowerCase().includes(typedWord.toLowerCase())
    );
};