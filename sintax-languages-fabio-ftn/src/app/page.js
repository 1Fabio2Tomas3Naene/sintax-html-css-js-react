'use client';
import React from "react";
import { useState } from "react";
import styles from "./page.module.css";
import Top from "./Components/Top/Top";
import Banner from "./Components/Banner/Banner";
import { allSintaxOfHtml, searchByTypedWord } from "./Components/SintaxOfHtml/function";
import { SintaxOfCssAll, searchByTypedWordCss } from "./Components/SintaxOfCss/functios";
import CardHtml from "./Components/SintaxOfHtml/htmlCard/CardHtml";
import CardCss from "./Components/SintaxOfCss/CardCss/SintaxOfCss";
import { FaSearch } from "react-icons/fa";


export default function Home() {
  const [lightMode, setLightMode] = useState(false);
  const [sintaxHtml, setSintaxHtml] = useState(allSintaxOfHtml);
  const [typedWord, setTypedWord] =useState("");

  const [sintaxCss, setSintaxCss] = useState(SintaxOfCssAll);
  const [typedWordCss, setTtpedWordCss] = useState(" ");

  const DarkMode = () =>{
    setLightMode(!lightMode);
  }
  const HandleFilterByTypedWord = (paravraDigitada) =>{
    setSintaxHtml(searchByTypedWord(paravraDigitada))
    setTypedWord(paravraDigitada)
  }

  const HandleFilterByTypedWordCss =(palavraDigtadaCss) =>{
    setSintaxCss(searchByTypedWordCss(palavraDigtadaCss))
    setTtpedWordCss(palavraDigtadaCss);
  }
  const sintaxHtmlLenght = sintaxHtml.length;
  const sintaxCssLenght = sintaxCss.length;
  return (
    <div className={lightMode ? styles.darkMode : styles.lightMode}>
      <Top standardModeLightMode={lightMode} onClickSetLightMode={DarkMode}/>
      <main className={styles.main}>
        <Banner />
        <section className={styles.sectionHtml} id="idSintaxHtml">
          <h2 className={styles.title}>Veja {sintaxHtmlLenght} sintax de html</h2>
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
        <h3 className={styles.tituloCss}>Veja {sintaxCssLenght} sintax de css</h3>
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
      </main>
    </div>
  );
}
