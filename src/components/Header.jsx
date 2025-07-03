import React from 'react';
import styles from '../styles.module.css';

function Header() {
    return (
        <header className={styles.header}>
        <h1 className={styles.titulo}>Calculadora de IMC</h1>
        <p className={styles.subtitulo}>Descubra seu índice de massa corporal</p>
        </header>
    );
}

export default Header;
