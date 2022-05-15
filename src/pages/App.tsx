import React, { useState } from 'react';
import Cronometro from '../components/cronometro';

import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { ITarefa } from '../types/tarefa';
import style from "./App.module.scss";

function App() {
  const [tarefas, setTarefas] = useState<Array<ITarefa>>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionarTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Formulario 
        setTarefas={setTarefas}
      />
      <Lista 
        tarefas={tarefas}
        selecionarTarefa={selecionarTarefa}
      />
      <Cronometro 
        selecionado={selecionado}
      />
    </div>
  );
}

export default App;
