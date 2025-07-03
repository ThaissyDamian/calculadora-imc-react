import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import styles from './styles.module.css';
import './App.css';

function App() {
  const [resultado, setResultado] = useState('');
  

  const calcularIMC = (altura, peso) => {
    const alt = parseFloat(altura.replace(',', '.'));
    const pes = parseFloat(peso.replace(',', '.'));
    if (!alt || !pes) return;

    const imc = pes / (alt * alt);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'Sobrepeso';
    else if (imc < 34.9) classificacao = 'Obesidade grau I';
    else if (imc < 39.9) classificacao = 'Obesidade grau II';
    else classificacao = 'Obesidade grau III';

    setResultado({ imc: imc.toFixed(2), classificacao });
  };

  return (
    <div className='container'>
      <Header />
      <Formulario onCalcular={calcularIMC} />
      {resultado && <Resultado imc={resultado.imc} classificacao={resultado.classificacao} />}
    </div>
  );
}

export default App;



