import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
     <p>hello world</p>
     <Formulario />
     <Lista />
    </div>
  );
}

export default App;
