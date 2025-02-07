'use client';
import React from "react";
import { useState } from "react";
import styles from "./page.module.css";
import Top from "./Components/Top/Top";
import Banner from "./Components/Banner/Banner";
import { allSintaxOfHtml, searchByTypedWord } from "./Components/SintaxOfHtml/function";
import CardHtml from "./Components/SintaxOfHtml/htmlCard/CardHtml";
import { FaSearch } from "react-icons/fa";


export default function Home() {
  const [lightMode, setLightMode] = useState(false);
  const [sintaxHtml, setSintaxHtml] = useState(allSintaxOfHtml);
  const [typedWord, setTypedWord] =useState("");

  const DarkMode = () =>{
    setLightMode(!lightMode);
  }
  const HandleFilterByTypedWord = (paravraDigitada) =>{
    setSintaxHtml(searchByTypedWord(paravraDigitada))
    setTypedWord(paravraDigitada)
  }
  return (
    <div className={lightMode ? styles.darkMode : styles.lightMode}>
      <Top standardModeLightMode={lightMode} onClickSetLightMode={DarkMode}/>
      <main className={styles.main}>
        <Banner />
        <section className={styles.sectionHtml} id="html">
          <h1 className={styles.title}>Veja as sintax de html</h1>
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
      </main>
    </div>
  );
}
