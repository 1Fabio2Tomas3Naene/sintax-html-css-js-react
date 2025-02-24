import React from "react";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "../../SintaxOfHtml/htmlCard/CardHtml.module.css";


export default function CardNodeJs(props){
    return(
        <div className={styles.card}>
            <p className={styles.title}>{props.difinitionNodeJs}</p>
            <span className={styles.description}>{props.lookSintaxNodeJs} <br></br><MdKeyboardDoubleArrowDown /></span>
            <Image src={props.sintaxNodeJsImage} alt={props.categNodeJs} title={props.difinitionNodeJs} className={styles.img}/>
        </div>
    )
};