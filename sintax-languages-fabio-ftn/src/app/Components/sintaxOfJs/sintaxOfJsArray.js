import consoleLog from "./assets/console-log.svg";
import constV from "./assets/const.svg";
import letV from "./assets/let.svg";
import varV from "./assets/var.svg";

export const sintaxesOfJs = [
    {id: 1, categoria: "variaveis", texto: "Eu declaro uma variavel, ou seja, um armazem de dados que a mesma variavel pode ser reatribuida", comando: "( let )", sintax: "veja a minha sintax", imagem: letV},
    {id: 2, categoria: "variaveis", texto: "Eu declaro uma variavel, ou seja, um armazem de dados que a mesma variavel pode ser reatribuida, mais nao sou mas usada", comando: "( var )", sintax: "veja a minha sintax", imagem: varV},
    {id: 3, categoria: "variaveis", texto: "Eu declaro uma constante, ou seja, um armazem de dados, mas que a mesma constante nao pode ser reatribuida, isto e, sou uma costante", comando: "( const )", sintax: "veja a minha sintax", imagem: constV},
    {id: 4, categoria: "exibicao impressao", texto: "Eu exibo ou imprimo algo no console", comando: "( console.log() )", sintax: "veja a minha sintax", imagem: consoleLog},
];