import ImageDoctype from "./image/DOCTYPE-html.svg";
import ImageHtml from "./image/html.svg";
import ImageHead from "./image/head.svg";
import ImageCharset from "./image/meta charset.svg";
import ul from "./image/ul.svg";
import sup from "./image/sup.svg";
import sub from "./image/sub.svg";
import strong from "./image/strong.svg";
import span from "./image/span.svg";
import small from "./image/small.svg";
import p from "./image/p.svg";
import olValue from "./image/ol-value.svg";
import olTypeI from "./image/ol-type-I.svg";
import olTypei from "./image/ol-type-i.svg";
import olTypea from "./image/ol-type-a.svg";
import olTypeA from "./image/ol-type-A.svg";
import olType1 from "./image/ol-type-1.svg";
import olStart from "./image/ol-start.svg";
import olReversed from "./image/ol-reversed.svg";
import metaTitle from "./image/meta-title.svg";
import mark from "./image/mark.svg";
import metaLinkRel from "./image/link-rel.svg";
import ins from "./image/ins.svg";
import img from "./image/img.svg";
import id from "./image/id.svg";
import i from "./image/i.svg";
import h6 from "./image/h6.svg";
import h5 from "./image/h5.svg";
import h4 from "./image/h4.svg";
import h3 from "./image/h3.svg";
import h2 from "./image/h2.svg";
import h1 from "./image/h1.svg";
import em from "./image/em.svg";
import dlDtDd from "./image/dl-dt-dd.svg";
import del from "./image/del.svg";
import Class from "./image/class.svg";
import aTargetSelf from "./image/a-target-self.svg";
import aTargetBlanck from "./image/a-target-blanck.svg";

 
 const sintaxOfHtml = [
    {id: 1, categoria: "meta dados, tags de cabecalho", texto: "Eu especifico a versao ", tag: "( !DOCTYPE )", sintax: "veja a minha sintax", imagem: ImageDoctype},
    {id: 2, categoria: "meta dados, tags de cabecalho", texto: "Eu sou o elemento raiz ", tag: "( html )", sintax: "veja a minha sintax", imagem: ImageHtml},
    {id: 3, categoria: "meta dados, tags de cabecalho", texto: "Eu sou o elemento principal", tag: "( head )", sintax: "veja a minha sintax", imagem: ImageHead},
    {id: 4, categoria: "meta dados, tags de cabecalho", texto: "Eu sou o conjunto de caracteres ", tag: "( charset )", sintax: "veja a minha sintax", imagem: ImageCharset},
    {id: 5, categoria: "lista", texto: "Eu criuo listas nao ordenadas", tag: "( ul )", sintax: "veja a minha sintax", imagem: ul},
    {id: 6, categoria: "texto", texto: "Eu deixo o texto como sobrescrito", tag: "( sup )", sintax: "veja a minha sintax", imagem: sup},
    {id: 7, categoria: "texto", texto: "Eu deixo o texto como subscrito", tag: "( sub )", sintax: "veja a minha sintax", imagem: sub},
    {id: 8, categoria: "texto", texto: "Eu deixo o texto como importante, ou seja, forte", tag: "( strong )", sintax: "veja a minha sintax", imagem: strong},
    {id: 9, categoria: "texto", texto: "Eu agrupo textos sem senhum significado semantico", tag: "( span )", sintax: "veja a minha sintax", imagem: span},
    {id: 10, categoria: "texto", texto: "Eu deixo o texto fino ou pequeno", tag: "( small )", sintax: "veja a minha sintax", imagem: small},
    {id: 11, categoria: "texto", texto: "Eu difino paragrafo", tag: "( p )", sintax: "veja a minha sintax", imagem: p},
    {id: 12, categoria: "lista", texto: "Eu difino por que numero a ordenacao deve continuar", tag: "( value )", sintax: "veja a minha sintax", imagem: olValue},
    {id: 13, categoria: "lista", texto: "Eu ordeno os itens da lista com letras romanos maiusculas", tag: "( type='I' )", sintax: "veja a minha sintax", imagem: olTypeI},
    {id: 14, categoria: "lista", texto: "Eu ordeno os itens da lista com letras romanos minusculas", tag: "( type='i' )", sintax: "veja a minha sintax", imagem: olTypei},
    {id: 15, categoria: "lista", texto: "Eu ordeno os itens da lista com letras latinas minusculas", tag: "( type='a' )", sintax: "veja a minha sintax", imagem: olTypea},
    {id: 16, categoria: "lista", texto: "Eu ordeno os itens da lista com letras latinas maiusculas", tag: "( type='A' )", sintax: "veja a minha sintax", imagem: olTypeA},
    {id: 18, categoria: "lista", texto: "Eu ordeno os itens da lista com numeros decimais", tag: "( type='1' )", sintax: "veja a minha sintax", imagem: olType1},
    {id: 19, categoria: "lista", texto: "Eu difino por onde a ordenacao dos itens na lista deve comecar", tag: "( start )", sintax: "veja a minha sintax", imagem: olStart},
    {id: 20, categoria: "lista", texto: "Eu inverto a ordenacao dos itens da lista, isto e, de grande para pequeno", tag: "( reversed )", sintax: "veja a minha sintax", imagem: olReversed},
    {id: 21, categoria: "meta dados, tags de cabecalho", texto: "Eu difino o titulo da pagina que aparece na aba do navegador", tag: "( title )", sintax: "veja a minha sintax", imagem: metaTitle},
    {id: 22, categoria: "texto", texto: "Eu difino o texto que deve ser marcado ou destacado", tag: "( mark )", sintax: "veja a minha sintax", imagem: mark},
    {id: 23, categoria: "meta dados, tags de cabecalho", texto: "Eu vinculo o css ao html para a estilizacao", tag: "( link )", sintax: "veja a minha sintax", imagem: metaLinkRel},
    {id: 24, categoria: "texto", texto: "Eu indico o texto que substituiu o outro ou que foi inserido", tag: "( ins )", sintax: "veja a minha sintax", imagem: ins},
    {id: 25, categoria: "media", texto: "Eu incorporo uma imagem a pagina", tag: "( img )", sintax: "veja a minha sintax", imagem: img},
    {id: 26, categoria: "seletor", texto: "Eu seleciono o elemento html pelo seu id", tag: "( id )", sintax: "veja a minha sintax", imagem: id},
    {id: 27, categoria: "texto", texto: "Eu deixo o texto em italico com um significado semantico, nome de navios, ternos tecnicos, paravras estrangeiras, etc", tag: "( i )", sintax: "veja a minha sintax", imagem: i},
    {id: 28, categoria: "titulo", texto: "Eu difino subtilo no nivel 6 mais menor", tag: "( h6 )", sintax: "veja a minha sintax", imagem: h6},
    {id: 29, categoria: "titulo", texto: "Eu difino subtilo no nivel 5 maior que 6", tag: "( h5 )", sintax: "veja a minha sintax", imagem: h5},
    {id: 30, categoria: "titulo", texto: "Eu difino subtilo no nivel 4 maior que 5", tag: "( h4 )", sintax: "veja a minha sintax", imagem: h4},
    {id: 31, categoria: "titulo", texto: "Eu difino subtilo no nivel 3 maior que 4", tag: "( h3 )", sintax: "veja a minha sintax", imagem: h3},
    {id: 32, categoria: "titulo", texto: "Eu difino subtilo no nivel 2 maior que 3", tag: "( h2 )", sintax: "veja a minha sintax", imagem: h2},
    {id: 33, categoria: "titulo", texto: "Eu difino subtilo no nivel 1 maior que 2, e sou o mais grande", tag: "( h1 )", sintax: "veja a minha sintax", imagem: h1},
    {id: 34, categoria: "texto", texto: "Eu dou enfase ao texto", tag: "( hem )", sintax: "veja a minha sintax", imagem: em},
    {id: 35, categoria: "lista", texto: "Eu crio listas de difinicao", tag: "( dl )", sintax: "veja a minha sintax", imagem: dlDtDd},
    {id: 36, categoria: "texto", texto: "Eu indico un texto que foi removido que ja nao existe num documento", tag: "( del )", sintax: "veja a minha sintax", imagem: del},
    {id: 37, categoria: "seletor", texto: "Eu seleciono o elemento html pela sua classe", tag: "( class )", sintax: "veja a minha sintax", imagem: Class},
    {id: 38, categoria: "link", texto: "Eu crio links que ao ser clicado abre a pagina na mesma aba do navegador", tag: "( a )", sintax: "veja a minha sintax", imagem: aTargetSelf},
    {id: 39, categoria: "link", texto: "Eu crio links que ao ser clicado abre a pagina na nova aba do navegador", tag: "( a )", sintax: "veja a minha sintax", imagem: aTargetBlanck},
 ];

 export default sintaxOfHtml;