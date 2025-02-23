import React from "react";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "../../SintaxOfHtml/htmlCard/CardHtml.module.css";


export default function CardNextJs(props){
    return(
        <div className={styles.card}>
            <p className={styles.difinitionNextJs}>{props.titulo} <br></br> {props.comandNextJs}</p>
            <span className={styles.lookSintaxNextJs}>{props.descricao} <br></br><MdKeyboardDoubleArrowDown /></span>
            <Image src={props.sintaxNextJs} alt={props.comandNextJs} title={props.difinitionNextJs} className={styles.img}/>
        </div>
    )
};