import React from "react";
import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner(){
    return(
        <section className={styles.banner}>
            <h1 className={styles.title}>Fábio Tomás Naene</h1>
        </section>
    )
};