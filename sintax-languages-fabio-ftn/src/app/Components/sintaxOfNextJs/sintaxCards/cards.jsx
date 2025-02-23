import React from "react";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "../../SintaxOfHtml/htmlCard/CardHtml.module.css";


export default function CardNextJs(props){
    return(
        <div className={styles.card}>
            <p className={styles.title}>{props.difinitionNextJs} <br></br> {props.comandNextJs}</p>
            <span className={styles.description}>{props.lookSintaxNextJs} <br></br><MdKeyboardDoubleArrowDown /></span>
            <Image src={props.sintaxNextJs} alt={props.comandNextJs} title={props.difinitionNextJs} className={styles.img}/>
        </div>
    )
};