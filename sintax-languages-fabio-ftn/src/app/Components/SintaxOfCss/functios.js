import { SintaxOfCssArray } from "./array";

export const SintaxOfCssAll = () => {
    return SintaxOfCssArray
}

export const searchByTypedWordCss =(paravraDigitadaCss) =>{
    return SintaxOfCssArray.filter((itens) => 
        itens.categoria.toLowerCase().includes(paravraDigitadaCss.toLowerCase()) ||
        itens.valor.toLowerCase().includes(paravraDigitadaCss.toLowerCase()) ||
        itens.texto.toLowerCase().includes(paravraDigitadaCss.toLowerCase())
    ) 
}