'use client';
import React, { use } from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Top from "./Components/Top/Top";
import Banner from "./Components/Banner/Banner";
import { allSintaxOfHtml, searchByTypedWord } from "./Components/SintaxOfHtml/function";
import { SintaxOfCssAll, searchByTypedWordCss } from "./Components/SintaxOfCss/functios";
import CardHtml from "./Components/SintaxOfHtml/htmlCard/CardHtml";
import CardCss from "./Components/SintaxOfCss/CardCss/SintaxOfCss";
import { FaSearch } from "react-icons/fa";
import { allSintaxesOfJs, filterByTypedWordJs } from "./Components/sintaxOfJs/functions";
import CardOfJs from "./Components/sintaxOfJs/cardOfJs";
import { allSintaxNextJs, filterByTypedWordNextJs } from "./Components/sintaxOfNextJs/sintaxFunctions";
import CardNextJs from "./Components/sintaxOfNextJs/sintaxCards/cards";
import CardNodeJs from "./Components/sintaxOfNodeJs/sintaxCards/cards";
import { allSintaxNodeJs, filterByTypedWordNodeJs } from "./Components/sintaxOfNodeJs/sintaxFunctions";
import { allSintaxGit, filterByTypedWordGit } from "./Components/sintaxOfGit/sintaxFunctions";
import CardGit from "./Components/sintaxOfGit/sintaxCards/cards";
import { FaArrowUp } from "react-icons/fa";


export default function Home() {
  const [lightMode, setLightMode] = useState(false);
  const DarkMode = () =>{
    setLightMode(!lightMode);
  }

  const [sintaxHtml, setSintaxHtml] = useState(allSintaxOfHtml);
  const [typedWord, setTypedWord] =useState("");
  const sintaxHtmlLenght = sintaxHtml.length;
  const HandleFilterByTypedWord = (typedWordHtml) =>{
    setSintaxHtml(searchByTypedWord(typedWordHtml))
    setTypedWord(typedWordHtml)
  }

  const [sintaxCss, setSintaxCss] = useState(SintaxOfCssAll);
  const [typedWordCss, setTtpedWordCss] = useState(" ");
  const sintaxCssLenght = sintaxCss.length;
  const HandleFilterByTypedWordCss =(cssTypedWord) =>{
    setSintaxCss(searchByTypedWordCss(cssTypedWord))
    setTtpedWordCss(cssTypedWord);
  }

  const [sintaxJs, setSintaxJs] = useState(allSintaxesOfJs);
  const [typedWordJs, setypedWordJs] = useState("");
  const sintaxesOfJsLenght = sintaxJs.length;
  const HandleFilterByTypedWordJs = (typedWordJs) => {
    setSintaxJs(filterByTypedWordJs(typedWordJs))
    setypedWordJs(typedWordJs)
  };

  const [sintaxNextJs, setSintaxNextJs] = useState(allSintaxNextJs);
  const [typedWordNextJs, setTypedWordNextJs] = useState("");
  const sintaxNextJsLength = sintaxNextJs.length;
  const HandleFilterByTypedWordNextJs = (typedWordNextJs) => {
    setSintaxNextJs(filterByTypedWordNextJs(typedWordNextJs))
    setTypedWordNextJs(typedWordNextJs)
  };

  const [sintaxNodeJs, setSintaxNodeJs] = useState(allSintaxNodeJs);
  const [typedWordNodeJs, setTypedWordNodeJs] = useState("");
  const sintaxNodeJsLength = sintaxNodeJs.length;
  const HandleFilterByTypedWordNodeJs = (typedWordNodeJs) => {
    setSintaxNodeJs(filterByTypedWordNodeJs(typedWordNodeJs))
    setTypedWordNodeJs(typedWordNodeJs)
  };


  const [sintaxGit, setSintaxGit] = useState(allSintaxGit);
  const [typedWordGit, setTypedWordGit] = useState("");
  const sintaxGitLength = sintaxGit.length;
  const HandleFilterByTypedWordGit = (typedWordGit) => {
    setSintaxGit(filterByTypedWordGit(typedWordGit))
    setTypedWordGit(typedWordGit)
  };
  return (
    <div className={lightMode ? styles.darkMode : styles.lightMode}>
      <Top standardModeLightMode={lightMode} onClickSetLightMode={DarkMode}/>
      <main className={styles.main}>
        <Banner />
        <section className={styles.sectionHtml} id="idSintaxHtml">
          <h2 className={styles.title}>Veja {sintaxHtmlLenght} sintaxes de html</h2>
          <div className={styles.fieldSearch}>
            <FaSearch className={styles.iconSearch}/>
            <input type="text" placeholder="Digite aqui o nome da tag ou a categoria" value={typedWord} onChange={(Event) => HandleFilterByTypedWord(Event.target.value)} className={styles.input}/>
          </div>
          <div className={styles.containerCard}>
            {
              sintaxHtml.map((itens) => {
                return(
                 <CardHtml 
                 key={itens.id}
                 titulo={itens.texto}
                 tag={itens.tag}
                 descricao={itens.sintax}
                 sintax={itens.imagem}
                 />
                )
              })
            }
          </div>
        </section>
        <section className={styles.sectionHtml} id="idSintaxCss">
        <h3 className={styles.tituloCss}>Veja {sintaxCssLenght} sintaxes de css</h3>
        <div className={styles.fieldSearchCss}>
            <FaSearch className={styles.iconSearch}/>
            <input type="text" placeholder="Digite aqui o nome da propriedade ou a categoria"  value={typedWordCss} onChange={(Event) => HandleFilterByTypedWordCss(Event.target.value)}  className={styles.input}/>
          </div>
         <div className={styles.containerCardCss}>
         {
            sintaxCss.map((sintaxCssItens) => {
              return(
                <CardCss 
                key={sintaxCssItens.id}
                textoCss={sintaxCssItens.texto}
                valorCss={sintaxCssItens.valor}
                sintaxCss={sintaxCssItens.sintax}
                imagemCss={sintaxCssItens.imagem}
                />
              )
            })
          }
         </div>
        </section>
        <section className={styles.sectionHtml} id="idSintaxJs">
        <h3 className={styles.tituloJs}>Veja {sintaxesOfJsLenght} sintaxes de javascript</h3>
        <div className={styles.fieldSearchJs}>
            <FaSearch className={styles.iconSearch}/>
            <input type="text" placeholder="Digite aqui o nome do comando ou a categoria"  value={typedWordJs} onChange={(Event) => HandleFilterByTypedWordJs(Event.target.value)}  className={styles.input}/>
          </div>
         <div className={styles.containerCardJs}>
         {
          sintaxJs.map((sintaxJsItems) => {
            return(
              <CardOfJs 
              key = {sintaxJsItems.id}
              textoJs = {sintaxJsItems.texto}
              comandoJs = {sintaxJsItems.comando}
              vejaSinataxJs = {sintaxJsItems.sintax}
              imagemJs = {sintaxJsItems.imagem}
              />
            )
          })
         }
         </div>
        </section>
        <section className={styles.sectionHtml} id="idSintaxNextJs">
        <h3 className={styles.tituloNextJs}>Veja {sintaxNextJsLength} sintaxes de Next.js</h3>
        <div className={styles.fieldSearchNextJs}>
            <FaSearch className={styles.iconSearch}/>
            <input type="text" placeholder="Digite aqui o que esta procurando" value={typedWordNextJs} onChange={(Event) => HandleFilterByTypedWordNextJs(Event.target.value)}  className={styles.input}/>
          </div>
         <div className={styles.containerCardNextJs}>
          {
            sintaxNextJs.map((sintaxNextJsItems) => {
              return(
                <CardNextJs
                />
              )
            }
            )
          }
         </div>
        </section>
        <section className={styles.sectionHtml} id="idSintaxNodeJs">
        <h3 className={styles.tituloNodeJs}>Veja {sintaxNodeJsLength} sintaxes de Node.js<br></br>(linux)</h3>
        <div className={styles.fieldSearchNodeJs}>
            <FaSearch className={styles.iconSearch}/>
            <input type="text" placeholder="Digite aqui o que esta procurando sobre node" value={typedWordNodeJs} onChange={(Event) => HandleFilterByTypedWordNodeJs(Event.target.value)}   className={styles.input}/>
          </div>
         <div className={styles.containerCardNodeJs}>
          {
           sintaxNodeJs.map((sintaxNodeJsItems) => {
            return(
              <CardNodeJs
              key = {sintaxNodeJsItems.id}
              difinitionNodeJs = {sintaxNodeJsItems.texto}
              lookSintaxNodeJs = {sintaxNodeJsItems.sintax}
              sintaxNodeJsImage = {sintaxNodeJsItems.imagem}
              categNodeJs = {sintaxNodeJsItems.categoria}
              />
            )
          }
          )
          }
         </div>
        </section>
        <section className={styles.sectionHtml} id="idSintaxGit">
        <h3 className={styles.tituloGit}>Veja {sintaxGitLength} sintaxes de git <br></br>(linux)</h3>
        <div className={styles.fieldSearchGit}>
            <FaSearch className={styles.iconSearch}/>
            <input type="text" placeholder="Digite aqui o que esta procurando sobre git" value={typedWordGit} onChange={(Event) => HandleFilterByTypedWordGit(Event.target.value)}  className={styles.input}/>
          </div>
         <div className={styles.containerCardGit}>
          {
          sintaxGit.map((sintaxGitItems) => {
            return(
              <CardGit
              key = {sintaxGitItems.id}
              difinitionGit = {sintaxGitItems.texto}
              lookSintaxGit = {sintaxGitItems.sintax}
              imageSintaxGit = {sintaxGitItems.imagem}
              categGit = {sintaxGitItems.categoria}
              />
            )
          }
          )
          }
         </div>
        </section>
        <address>
          <button className={styles.buttonCodeLink}><Link href="https://github.com/1Fabio2Tomas3Naene/sintax-html-css-js-react" target="_blanck" rel="noopener noreferrer" className={styles.codeLink}>Veja o código do projeto</Link></button>
        </address>
      </main>
      <div className={styles.containerArrow}><Link href="#idSectionTopLinks" id={styles.arrawTopLink}><FaArrowUp  id={styles.arrowTop}/></Link></div>
    </div>
  );
}
