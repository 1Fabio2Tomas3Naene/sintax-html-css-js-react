import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Top.module.css";
import { IoMoonOutline } from "react-icons/io5";
import { RxSun } from "react-icons/rx";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import Logo from "../../../../public/sintax-logo.jpg";

export default function Top(props){
    return(
        <div className={props.standardModeLightMode ? styles.darkMode : styles.lightMode}>
            <header className={styles.header}>
            <Image src={Logo} alt="logo" title="logo" className={styles.logo}/>
            <span className={styles.lookSintax}>sintaxes de <RiArrowDownDoubleFill className={styles.arrow02}/></span>
            <nav className={styles.navList}>
                <li className={styles.listItem}><Link href="/#idSintaxHtml" className={styles.listAnchor}>html</Link></li>
                <li className={styles.listItem}><Link href="/#idSintaxCss" className={styles.listAnchor}>css</Link></li>
                <li className={styles.listItem}><Link href="/#idSintaxJs" className={styles.listAnchor}>js</Link></li>
                <li className={styles.listItem}><Link href="#" className={styles.listAnchor}>next.js</Link></li>
                <li className={styles.listItem}><Link href="#" className={styles.listAnchor}>node.js</Link></li>
                <li className={styles.listItem}><Link href="#" className={styles.listAnchor}>git</Link></li>
            </nav>
            <button onClick={props.onClickSetLightMode} className={styles.buttonSwitchMode}>{props.standardModeLightMode ? <span lang="en" className={styles.textMode}><RxSun className={styles.iconMode}/>light mode</span> : <span lang="en" className={styles.textMode}><IoMoonOutline className={styles.iconMode}/>dark mode</span>}</button>
        </header>
        </div>
    )
};