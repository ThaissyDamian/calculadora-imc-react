import React, { useState } from 'react';
import styles from '../styles.module.css';

function Formulario({ onCalcular }) {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalcular(altura, peso);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.input} type="text" placeholder="Altura (ex: 1.75)" value={altura} onChange={(e) => setAltura(e.target.value)} />
            <input className={styles.input} type="text" placeholder="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)}  />
            <button className={styles.button} type="submit">Calcular IMC</button>
        </form>
        );
}

export default Formulario;
