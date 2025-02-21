import React from "react";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "./CardHtml.module.css";


export default function CardHtml(props){
    return(
        <div className={styles.card}>
            <p className={styles.title}>{props.titulo} <br></br> {props.tag}</p>
            <span className={styles.description}>{props.descricao} <br></br><MdKeyboardDoubleArrowDown /></span>
            <Image src={props.sintax} alt={props.tag} title={props.titulo} className={styles.img}/>
        </div>
    )
};