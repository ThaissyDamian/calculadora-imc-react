import React from 'react';
import styles from '../styles.module.css';

function Resultado({ imc, classificacao }) {
    return (
        <div className={styles.resultado}>
        <p>Seu IMC é: <strong>{imc}</strong></p>
        <p>Classificação: <strong>{classificacao}</strong></p>
        </div>
    );
}

export default Resultado;
