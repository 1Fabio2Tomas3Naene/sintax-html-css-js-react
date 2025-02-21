import React from "react";
import Image from "next/image";
import styles from "../../SintaxOfHtml/htmlCard/CardHtml.module.css";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function CardCss(props) {
    return(
        <div className={styles.card}>
            <p className={styles.title}>{props.textoCss}<br></br>{props.valorCss}</p>
            <span className={styles.description}>{props.sintaxCss}<br></br><MdKeyboardDoubleArrowDown /></span>
            <Image src={props.imagemCss} alt={props.valorCss} title={props.textoCss} className={styles.img}/>
        </div>
    )
};