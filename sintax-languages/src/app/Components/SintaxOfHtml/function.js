import sintaxOfHtml from "./array";

export function allSintaxOfHtml() {
    return sintaxOfHtml;
};

export  function searchByTypedWord(paravraDigitada) {
    return sintaxOfHtml.filter((itens) =>
    itens.categoria.toLowerCase().includes(paravraDigitada.toLowerCase()) ||
    itens.sintax.toLowerCase().includes(paravraDigitada.toLowerCase()) ||
    itens.tag.toLowerCase().includes(paravraDigitada.toLowerCase()) ||
    itens.texto.toLowerCase().includes(paravraDigitada.toLowerCase()) 
)
}