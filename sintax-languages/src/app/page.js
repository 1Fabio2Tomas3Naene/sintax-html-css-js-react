'use client';
import styles from "./page.module.css";
import Top from "./Components/Top/Top";
import Banner from "./Components/Banner/Banner";
import { useState } from "react";

export default function Home() {
  const [lightMode, setLightMode] = useState(false);
  const DarkMode = () =>{
    setLightMode(!lightMode);
  }
  return (
    <div className={lightMode ? styles.darkMode : styles.lightMode}>
      <Top standardModeLightMode={lightMode} onClickSetLightMode={DarkMode}/>
      <main className={styles.main}>
        <Banner />
      </main>
    </div>
  );
}
