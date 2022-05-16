import { ITarefa } from "../../types/tarefa";
import Item from "./item";
import style from "./Lista.module.scss";

interface Props {
  tarefas: Array<ITarefa>,
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionarTarefa }: Props){
  return(
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item 
          selecionarTarefa={selecionarTarefa}
            key={item.id}
            {...item}
          />  
        ))}
      </ul>
    </aside>
  )
}

export default Lista;