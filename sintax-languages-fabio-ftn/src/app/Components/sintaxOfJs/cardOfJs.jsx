import React from "react";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "../SintaxOfHtml/htmlCard/CardHtml.module.css";

export default function CardOfJs(props){
    return(
        <div className={styles.card}>
            <p className={styles.title}>{props.textoJs} <br></br> {props.comandoJs}</p>
            <span className={styles.description}>{props.vejaSinataxJs} <br></br><MdKeyboardDoubleArrowDown /></span>
            <Image src={props.imagemJs} alt={props.comandoJs} title={props.textoJs} className={styles.img}/>
        </div>
    )
}