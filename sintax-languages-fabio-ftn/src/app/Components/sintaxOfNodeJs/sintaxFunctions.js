import { sintaxNodeJsArray } from "./sintaxArray";

export const allSintaxNodeJs = () => {
    return sintaxNodeJsArray
};

export const filterByTypedWordNodeJs = (typedWordNodeJs) => {
    return sintaxNodeJsArray.filter((sintaxNodeFilter) =>
        sintaxNodeFilter.categoria.toLowerCase().includes(typedWordNodeJs.toLowerCase()) ||
        sintaxNodeFilter.texto.toLowerCase().includes(typedWordNodeJs.toLowerCase())
    )
};