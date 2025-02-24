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
import toFixedM from "./assets/toFixed.svg";
import NumberConvertToNumber from "./assets/NumberConvertToNumber.svg";
import mathPow02 from "./assets/mathPow02.svg";
import decrement02 from "./assets/decrement02.svg";
import increment02 from "./assets/increment02.svg";
import assignmentoOperatorsAdd from "./assets/assignmentoOperatorsAdd.svg";
import assignmentoOperatorsAddAdd from "./assets/assignmentoOperatorsAddAdd.svg";
import assignmentoOperatorsDivision from "./assets/assignmentoOperatorsDivision.svg";
import assignmentoOperatorsMudule from "./assets/assignmentoOperatorsMudule.svg";
import assignmentoOperatorsMult from "./assets/assignmentoOperatorsMult.svg";
import assignmentoOperatorsSubtra from "./assets/assignmentoOperatorsSubtra.svg";
import comparisonoperatorsMaiorOuIgual from "./assets/comparisonoperatorsMaiorOuIgual.svg";
import comparisonoperatorsMaiorQue from "./assets/comparisonoperatorsMaiorQue.svg";
import comparisonoperatorsMenorOuIgual from "./assets/comparisonoperatorsMenorOuIgual.svg";
import comparisonoperatorsMenorQue from "./assets/comparisonoperatorsMenorQue.svg";
import comparisonoperatorsNaoExatIgualNe from "./assets/comparisonoperatorsNaoExatIgualNe.svg";
import comparisonoperatorsNaoIgualNe from "./assets/comparisonoperatorsNaoIgualNe.svg";
import falseV from "./assets/falseV.svg";
import trueV from "./assets/trueV.svg";
import calculationAdditionNumber from "./assets/calculationAdditionNumber.svg";
import encadeamentoAtribucoes1 from "./assets/encadeamentoAtribucoes1.svg";
import encadeamentoAtribucoes2 from "./assets/encadeamentoAtribucoes2.svg";
import bigInt from "./assets/bigInt.svg";
import string1 from "./assets/string1.svg";
import string2 from "./assets/string2.svg";
import string3 from "./assets/string3.svg";
import tipoNull from "./assets/tipoNull.svg";
import tipoUndefined from "./assets/tipoUndefined.svg";
import tiposDados from "./assets/tiposDados.svg";


export const sintaxesOfJs = [
    {id: 1, categoria: "variaveis", texto: "Eu declaro uma variavel, ou seja, um armazem de dados que a mesma variavel pode ser reatribuida", comando: "( let )", sintax: "veja a minha sintax", imagem: letV},
    {id: 2, categoria: "variaveis", texto: "Eu declaro uma variavel, ou seja, um armazem de dados que a mesma variavel pode ser reatribuida, mais nao sou mas usada", comando: "( var )", sintax: "veja a minha sintax", imagem: varV},
    {id: 3, categoria: "variaveis", texto: "Eu declaro uma constante, ou seja, um armazem de dados, mas que a mesma constante nao pode ser reatribuida, isto e, sou uma costante", comando: "( const )", sintax: "veja a minha sintax", imagem: constV},
    {id: 4, categoria: "exibicao impressao", texto: "Eu exibo ou imprimo algo no console", comando: "( console.log() )", sintax: "veja a minha sintax", imagem: consoleLog},
    {id: 5, categoria: "versao", texto: "Eu garanto que esta a ser usado as proticas modernas de codificao Javascript, ou seja, a versao atual", comando: "( use strict )", sintax: "veja a minha sintax", imagem: useStrict},
    {id: 6, categoria: "operador aritmetico operadores aritmeticos math number numeros", texto: "Eu sou o operador aritmetico de adicao ou soma", comando: "( + )", sintax: "veja a minha sintax", imagem: operatorAddition},
    {id: 7, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Eu sou o operador aritmetico de divisao", comando: "( / )", sintax: "veja a minha sintax", imagem: operatorDivision},
    {id: 8, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Eu sou o operador aritmetico de decrementacao, ou seja, eu tiro um", comando: "( -- )", sintax: "veja a minha sintax", imagem: operatorDecrement},
    {id: 9, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Eu sou o operador aritmetico de exponenciacao", comando: "( ** )", sintax: "veja a minha sintax", imagem: operatorExponentiation},
    {id: 10, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Eu executo tambem a exponenciacao", comando: "( Math.pow() )", sintax: "veja a minha sintax", imagem: operatorExponentiationMathPow},
    {id: 11, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Eu sou o operador aritmetico que retorna o resto da divisao", comando: "( % )", sintax: "veja a minha sintax", imagem: operatorModulus},
    {id: 12, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Eu sou o operador aritmetico de multiplicacao", comando: "( * )", sintax: "veja a minha sintax", imagem: operatorMultiplication},
    {id: 13, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Eu sou o operador aritmetico de subtracao", comando: "( - )", sintax: "veja a minha sintax", imagem: operatorSubtraction},
    {id: 14, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Eu sou o operador aritmetico de incrementacao, ou seja, eu aumento um", comando: "( ++ )", sintax: "veja a minha sintax", imagem: operatorIncrement},
    {id: 15, categoria: "tipo string type retorno", texto: "Eu sou uma palavra reservada do js que mostro que um valor que esta sendo usado numa operacao aritmetica nao e um numero legal", comando: "( NaN )", sintax: "veja a minha sintax", imagem: naN},
    {id: 16, categoria: "tipo string type retorno", texto: "Eu descubro se um valor que esta sendo usado numa operacao aritmetica nao e um numero legal", comando: "( isNaN() )", sintax: "veja a minha sintax", imagem: seeIsNaN},
    {id: 17, categoria: "tipo string type retorno", texto: "Eu discubro o tipo de dado ou variavel", comando: "( typeof )", sintax: "veja a minha sintax", imagem: typeOf},
    {id: 18, categoria: "tipo string type retorno", texto: "Eu sou o retorno se for feito um calculo de um numero fora do numero maior possivel, ex: 30 / 0", comando: "( Infinity ou -Infinity )", sintax: "veja a minha sintax", imagem: infinityInfinity},
    {id: 19, categoria: "tipo string type retorno", texto: "Eu faco com que o js reconheca constantes como Hexadecimal", comando: "( 0x )", sintax: "veja a minha sintax", imagem: constHexadecimal},
    {id: 20, categoria: "string", texto: "Neste contexto eu converto a base do numero", comando: "( toString() )", sintax: "veja a minha sintax", imagem: converToString},
    {id: 21, categoria: "objetos", texto: "Neste contexto eu crio um objeto de numeros, mas nao sou fortimente recomendado", comando: "( new )", sintax: "veja a minha sintax", imagem: objectNumberNew},
    {id: 22, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de comparacao", texto: "Eu verifico se as coisas sao iguais", comando: "( == )", sintax: "veja a minha sintax", imagem: operatorEquality},
    {id: 23, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de comparacao", texto: "Eu verifico se as coisas sao exatamente iguais", comando: "( === )", sintax: "veja a minha sintax", imagem: operatorStrictEquality},
    {id: 24, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Eu arredondo o numero fazendo com que ele apareca com um numera determinado fixo de casas de cimais", comando: "( toFixed() )", sintax: "veja a minha sintax", imagem: toFixedM},
    {id: 25, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Aqui eu converto a string que tem valor numerico para number", comando: "( Number() )", sintax: "veja a minha sintax", imagem: NumberConvertToNumber},
    {id: 26, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Eu executo tambem a exponenciacao", comando: "( Math.pow() )", sintax: "veja a minha sintax", imagem: mathPow02},
    {id: 27, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Eu sou o operador aritmetico de incrementacao, ou seja, eu aumento um", comando: "( ++ )", sintax: "veja a minha sintax", imagem: increment02},
    {id: 28, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Eu sou o operador aritmetico de decrementacao, ou seja, eu tiro um", comando: "( -- )", sintax: "veja a minha sintax", imagem: decrement02},
    {id: 29, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao", texto: "Eu atribuo subtracao a um number", comando: "( -= )", sintax: "veja a minha sintax", imagem: assignmentoOperatorsSubtra},
    {id: 30, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao", texto: "Eu atribuo multiplicacao a um number", comando: "( *= )", sintax: "veja a minha sintax", imagem: assignmentoOperatorsMult},
    {id: 31, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao", texto: "Eu atribuo modulo a um number", comando: "( %= )", sintax: "veja a minha sintax", imagem: assignmentoOperatorsMudule},
    {id: 32, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao", texto: "Eu atribuo divisao a um number", comando: "( /= )", sintax: "veja a minha sintax", imagem: assignmentoOperatorsDivision},
    {id: 33, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao", texto: "Eu atribuo adicao ou soma a um number", comando: "( += )", sintax: "veja a minha sintax", imagem: assignmentoOperatorsAddAdd},
    {id: 34, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao", texto: "Eu atribuo a variavel a esquerda um valor declarado a direita", comando: "( = )", sintax: "veja a minha sintax", imagem: assignmentoOperatorsAdd},
    {id: 35, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao operadores de comparacao", texto: "Eu como que pergunto: o valor a esquerta nao e exatamente igual ao da direita ne?", comando: "( !== )", sintax: "veja a minha sintax", imagem: comparisonoperatorsNaoExatIgualNe},
    {id: 36, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao operadores de comparacao", texto: "Eu verifico se o valor a esquerda e menor que o da direita", comando: "( < )", sintax: "veja a minha sintax", imagem: comparisonoperatorsMenorQue},
    {id: 37, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao operadores de comparacao", texto: "Eu verifico se o valor a esquerda e menor ou igual que o da direita", comando: "( <= )", sintax: "veja a minha sintax", imagem: comparisonoperatorsMenorOuIgual},
    {id: 38, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao operadores de comparacao", texto: "Eu verifico se o valor a esquerda e maior ou igual que o da direita", comando: "( >= )", sintax: "veja a minha sintax", imagem: comparisonoperatorsMaiorOuIgual},
    {id: 39, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao operadores de comparacao", texto: "Eu verifico se o valor a esquerda e maior que o da direita", comando: "( > )", sintax: "veja a minha sintax", imagem: comparisonoperatorsMaiorQue},
    {id: 40, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao operadores de comparacao", texto: "Eu como que pergunto: o valor a esquerta nao e igual ao da direita ne?", comando: "( != )", sintax: "veja a minha sintax", imagem: comparisonoperatorsNaoIgualNe},
    {id: 41, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao operadores de comparacao retorno condicao", texto: "Eu digo ou verifico se uma condicao e verdadeira", comando: "( true )", sintax: "veja a minha sintax", imagem: trueV},
    {id: 42, categoria: "operadores aritmeticos operador aritmetico math number numeros operadores de atribuicao operadores de comparacao retorno condicao", texto: "Eu digo ou verifico se uma condicao e falsa", comando: "( false )", sintax: "veja a minha sintax", imagem: falseV},
    {id: 43, categoria: "operadores aritmeticos operador aritmetico math number numeros", texto: "Aqui eu converto a string que tem valor numerico para number", comando: "( + )", sintax: "veja a minha sintax", imagem: calculationAdditionNumber},
    {id: 44, categoria: "operadores aritmeticos operador aritmetico math number numeros encadeamento de atribuicoes", texto: "Eu sou a tecnica de encadeamento de atribuicoes", comando: "( let calc1, calc2, calc3; )", sintax: "veja a minha sintax", imagem: encadeamentoAtribucoes1},
    {id: 45, categoria: "operadores aritmeticos operador aritmetico math number numeros encadeamento de atribuicoes", texto: "Eu sou a tecnica de encadeamento de atribuicoes", comando: "( let calc1, calc2, calc3; )", sintax: "veja a minha sintax", imagem: encadeamentoAtribucoes2},
    {id: 46, categoria: "operadores aritmeticos operador aritmetico math number numeros encadeamento de atribuicoes", texto: "Eu trato de numeros extragrandes, para que que eles possem ser tratados como os queremos", comando: "( bigInt )", sintax: "veja a minha sintax", imagem: bigInt},
    {id: 47, categoria: "string dados", texto: "string deve ser colocada entre aspas, eu coloco em aspas duplas", comando: '( " " )', sintax: "veja a minha sintax", imagem: string1},
    {id: 48, categoria: "string dados", texto: "string deve ser colocada entre aspas, eu coloco em aspas simples", comando: "( ' ' )", sintax: "veja a minha sintax", imagem: string2},
    {id: 49, categoria: "string dados", texto: "string deve ser colocada entre aspas, eu coloco em crasses ou tamplate string, eu posso conten variaveis calculos e coisas assim", comando: "( ` ` )", sintax: "veja a minha sintax", imagem: string3},
    {id: 50, categoria: "tipo numm", texto: "Eu sou uma palavra reservada que indico nada, vazio ou algo descolhecido", comando: "( null )", sintax: "veja a minha sintax", imagem: tipoNull},
    {id: 51, categoria: "tipo undefined", texto: "Eu sou uma palavra reservada que indico que uma variavel o algo nao foi difinida quando tentado usar", comando: "( undefined )", sintax: "veja a minha sintax", imagem: tipoUndefined},
    {id: 52, categoria: "tipos de dados", texto: "Estes sao os tipos de dados que existem em javascript", comando: "( undefined )", sintax: "veja a minha sintax", imagem: tiposDados},
];