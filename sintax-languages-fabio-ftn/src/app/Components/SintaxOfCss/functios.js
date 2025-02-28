import { SintaxOfCssArray } from "./array";

export const SintaxOfCssAll = () => {
    return SintaxOfCssArray
}

export const searchByTypedWordCss =(cssTypedWord) =>{
    return SintaxOfCssArray.filter((itens) => 
        itens.categoria.toLowerCase().includes(cssTypedWord.toLowerCase()) ||
        itens.valor.toLowerCase().includes(cssTypedWord.toLowerCase()) ||
        itens.texto.toLowerCase().includes(cssTypedWord.toLowerCase())
    ) 
}