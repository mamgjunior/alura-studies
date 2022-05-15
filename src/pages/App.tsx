import React, { useState } from 'react';
import Cronometro from '../components/cronometro';

import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { ITarefa } from '../types/tarefa';
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<Array<ITarefa>>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario 
        setTarefas={setTarefas}
      />
      <Lista 
        tarefas={tarefas}
      />
      <Cronometro />
    </div>
  );
}

export default App;
