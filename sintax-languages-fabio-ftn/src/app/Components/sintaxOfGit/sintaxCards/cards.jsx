import React from "react";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "../../SintaxOfHtml/htmlCard/CardHtml.module.css";


export default function CardGit(props){
    return(
        <div className={styles.card}>
            <p className={styles.title}>{props.difinitionGit} <br></br> {props.comandGit}</p>
            <span className={styles.description}>{props.lookSintaxGit} <br></br><MdKeyboardDoubleArrowDown /></span>
            <Image src={props.sintaxNextJs} alt={props.comandGit} title={props.difinitionGit} className={styles.img}/>
        </div>
    )
};