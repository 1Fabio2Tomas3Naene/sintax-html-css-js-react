import ImageDoctype from "./image/DOCTYPE-html.png";
import ImageHtml from "./image/html.png";
import ImageHead from "./image/head.png";
import ImageCharset from "./image/meta charset.png";
 
 const sintaxOfHtml = [
    {id: 1, categoria: "meta dados, tags de cabecalho", texto: "Eu especifico a versao ", tag: "( !DOCTYPE )", sintax: "veja a minha sintax:", imagem: ImageDoctype},
    {id: 2, categoria: "meta dados, tags de cabecalho", texto: "Eu sou o elemento raiz ", tag: "( html )", sintax: "veja a minha sintax:", imagem: ImageHtml},
    {id: 3, categoria: "meta dados, tags de cabecalho", texto: "Eu sou o elemento principal", tag: "( head )", sintax: "veja a minha sintax:", imagem: ImageHead},
    {id: 4, categoria: "meta dados, tags de cabecalho", texto: "Eu sou o conjunto de caracteres ", tag: "( charset )", sintax: "veja a minha sintax:", imagem: ImageCharset},
 ];

 export default sintaxOfHtml;