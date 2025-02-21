import consoleLog from "./assets/console-log.svg";
import constV from "./assets/const.svg";
import letV from "./assets/let.svg";
import varV from "./assets/var.svg";
import useStrict from "./assets/use-strict.svg";
import operatorAddition from "./assets/operatorAddition.svg";
import operatorDecrement from "./assets/operatorDecrement.svg";
import operatorDivision from "./assets/operatorDivision.svg";
import operatorExponentiation from "./assets/operatorExponentiation.svg";
import operatorExponentiationMathPow from "./assets/operatorExponentiationMathPow.svg";
import operatorModulus from "./assets/operatorModulus.svg";
import operatorMultiplication from "./assets/operatorMultiplication.svg";
import operatorSubtraction from "./assets/operatorSubtraction.svg";
import operatorIncrement from "./assets/operatorIncrement.svg";
import naN from  "./assets/NaN.svg";
import seeIsNaN from "./assets/seeIsNaN.svg";
import typeOf from "./assets/typeOf.svg";
import infinityInfinity from "./assets/infinityInfinity.svg";
import constHexadecimal from "./assets/constHexadecimal.svg";
import converToString from "./assets/converToString.svg";
import objectNumberNew from "./assets/objectNumberNew.svg";
import operatorEquality from "./assets/operatorEquality.svg";
import operatorStrictEquality from "./assets/operatorStrictEquality.svg";


export const sintaxesOfJs = [
    {id: 1, categoria: "variaveis", texto: "Eu declaro uma variavel, ou seja, um armazem de dados que a mesma variavel pode ser reatribuida", comando: "( let )", sintax: "veja a minha sintax", imagem: letV},
    {id: 2, categoria: "variaveis", texto: "Eu declaro uma variavel, ou seja, um armazem de dados que a mesma variavel pode ser reatribuida, mais nao sou mas usada", comando: "( var )", sintax: "veja a minha sintax", imagem: varV},
    {id: 3, categoria: "variaveis", texto: "Eu declaro uma constante, ou seja, um armazem de dados, mas que a mesma constante nao pode ser reatribuida, isto e, sou uma costante", comando: "( const )", sintax: "veja a minha sintax", imagem: constV},
    {id: 4, categoria: "exibicao impressao", texto: "Eu exibo ou imprimo algo no console", comando: "( console.log() )", sintax: "veja a minha sintax", imagem: consoleLog},
    {id: 5, categoria: "versao", texto: "Eu garanto que esta a ser usado as proticas modernas de codificao Javascript, ou seja, a versao atual", comando: "( use strict )", sintax: "veja a minha sintax", imagem: useStrict},
    {id: 6, categoria: "operador aritmetico operadores aritmeticos", texto: "Eu sou o operador aritmetico de adicao ou soma", comando: "( + )", sintax: "veja a minha sintax", imagem: operatorAddition},
    {id: 7, categoria: "operadores aritmeticos operador aritmetico", texto: "Eu sou o operador aritmetico de divisao", comando: "( / )", sintax: "veja a minha sintax", imagem: operatorDivision},
    {id: 8, categoria: "operadores aritmeticos operador aritmetico", texto: "Eu sou o operador aritmetico de decrementacao, ou seja, eu tiro um", comando: "( -- )", sintax: "veja a minha sintax", imagem: operatorDecrement},
    {id: 9, categoria: "operadores aritmeticos operador aritmetico", texto: "Eu sou o operador aritmetico de exponenciacao", comando: "( ** )", sintax: "veja a minha sintax", imagem: operatorExponentiation},
    {id: 10, categoria: "operadores aritmeticos operador aritmetico", texto: "Eu executo tambem a exponenciacao", comando: "( Math.pow() )", sintax: "veja a minha sintax", imagem: operatorExponentiationMathPow},
    {id: 11, categoria: "operadores aritmeticos operador aritmetico", texto: "Eu sou o operador aritmetico que retorna o resto da divisao", comando: "( % )", sintax: "veja a minha sintax", imagem: operatorModulus},
    {id: 12, categoria: "operadores aritmeticos operador aritmetico", texto: "Eu sou o operador aritmetico de multiplicacao", comando: "( * )", sintax: "veja a minha sintax", imagem: operatorMultiplication},
    {id: 13, categoria: "operadores aritmeticos operador aritmetico", texto: "Eu sou o operador aritmetico de subtracao", comando: "( - )", sintax: "veja a minha sintax", imagem: operatorSubtraction},
    {id: 14, categoria: "operadores aritmeticos operador aritmetico", texto: "Eu sou o operador aritmetico de incrementacao, ou seja, eu aumento um", comando: "( ++ )", sintax: "veja a minha sintax", imagem: operatorIncrement},
    {id: 15, categoria: "tipo string type retorno", texto: "Eu sou uma palavra reservada do js que mostro que um valor que esta sendo usado numa operacao aritmetica nao e um numero legal", comando: "( NaN )", sintax: "veja a minha sintax", imagem: naN},
    {id: 16, categoria: "tipo string type retorno", texto: "Eu descubro se um valor que esta sendo usado numa operacao aritmetica nao e um numero legal", comando: "( isNaN() )", sintax: "veja a minha sintax", imagem: seeIsNaN},
    {id: 17, categoria: "tipo string type retorno", texto: "Eu discubro o tipo de dado ou variavel", comando: "( typeof )", sintax: "veja a minha sintax", imagem: typeOf},
    {id: 18, categoria: "tipo string type retorno", texto: "Eu sou o retorno se for feito um calculo de um numero fora do numero maior possivel, ex: 30 / 0", comando: "( Infinity ou -Infinity )", sintax: "veja a minha sintax", imagem: infinityInfinity},
    {id: 19, categoria: "tipo string type retorno", texto: "Eu faco com que o js reconheca constantes como Hexadecimal", comando: "( 0x )", sintax: "veja a minha sintax", imagem: constHexadecimal},
    {id: 20, categoria: "string", texto: "Neste contexto eu converto a base do numero", comando: "( toString() )", sintax: "veja a minha sintax", imagem: converToString},
    {id: 21, categoria: "objetos", texto: "Neste contexto eu crio um objeto de numeros, mas nao sou fortimente recomendado", comando: "( new )", sintax: "veja a minha sintax", imagem: objectNumberNew},
    {id: 22, categoria: "operadores aritmeticos operador aritmetico", texto: "Eu verifico se as coisas sao iguais", comando: "( == )", sintax: "veja a minha sintax", imagem: operatorEquality},
    {id: 23, categoria: "operadores aritmeticos operador aritmetico", texto: "Eu verifico se as coisas sao exatamente iguais", comando: "( === )", sintax: "veja a minha sintax", imagem: operatorStrictEquality},
];