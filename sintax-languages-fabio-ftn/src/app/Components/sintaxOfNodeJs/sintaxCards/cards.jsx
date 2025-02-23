import React from "react";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "../../SintaxOfHtml/htmlCard/CardHtml.module.css";


export default function CardNodeJs(props){
    return(
        <div className={styles.card}>
            <p className={styles.title}>{props.difinitionNodeJs} <br></br> {props.comandNodeJs}</p>
            <span className={styles.description}>{props.lookSintaxNodeJs} <br></br><MdKeyboardDoubleArrowDown /></span>
            <Image src={props.sintaxNextJs} alt={props.comandNodeJs} title={props.difinitionNodeJs} className={styles.img}/>
        </div>
    )
};