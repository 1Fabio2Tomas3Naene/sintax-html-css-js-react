'use client';
import styles from "./page.module.css";
import Top from "./Components/Top/Top";
import { useState } from "react";

export default function Home() {
  const [lightMode, setLightMode] = useState(false);
  const DarkMode = () =>{
    setLightMode(!lightMode);
  }
  return (
    <div>
      <Top standardModeLightMode={lightMode} onClickSetLightMode={DarkMode}/>
    </div>
  );
}
