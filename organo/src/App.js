import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ]);

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = () => {
    console.log('clickou aqui...');
  }

  const mudarCorDoTime = (cor, nome) => {
    setTimes(
      times.map(element => {
        if (element.nome === nome)
          element.cor = cor;
        return element;
      })
    );
  }

  return (
    <div
      className="App"
    >
      <Banner />

      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />

      {
        times.map(time => (
          <Time
            key={time.nome}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            mudarCor={mudarCorDoTime}
          />
        ))
      }

    </div>
  );
}

export default App;
