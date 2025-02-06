import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Top.module.css";
import { IoMoonOutline } from "react-icons/io5";
import { RxSun } from "react-icons/rx";
import Logo from "../../../../public/sintax-logo.jpg";

export default function Top(){
    return(
        <div className={styles.darkMode}>
            <header className={styles.header}>
            <Image src={Logo} alt="logo" title="logo" className={styles.logo}/>
            <span className={styles.lookSintax}>Veja as sintax de</span>
            <nav className={styles.navList}>
                <li className={styles.listItem}><Link href="#" className={styles.listAnchor}>html</Link></li>
                <li className={styles.listItem}><Link href="#" className={styles.listAnchor}>css</Link></li>
                <li className={styles.listItem}><Link href="#" className={styles.listAnchor}>js</Link></li>
                <li className={styles.listItem}><Link href="#" className={styles.listAnchor}>react</Link></li>
            </nav>
            <button className={styles.buttonSwitchMode}><IoMoonOutline /></button>
        </header>
        </div>
    )
};