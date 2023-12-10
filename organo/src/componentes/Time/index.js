import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

import './Time.css'

const Time = ({
  time,
  colaboradores,
  aoDeletar,
  mudarCor
}) => {
  const css = { backgroundColor: hexToRgba(time.cor, '0.6') }

  return (
    colaboradores.length > 0 &&
    <section
      className='time'
      style={css}
    >
      <input
        value={time.cor}
        type='color'
        className='input-cor'
        onChange={event => mudarCor(event.target.value, time.nome)}
      />

      <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>

      <div className='colaboradores'>
        {
          colaboradores.map((colaborador, indice) => {
            return (
              < Colaborador
                key={indice}
                corDeFundo={time.cor}
                colaborador={colaborador}
                aoDeletar={aoDeletar}
              />
            )
          })
        }
      </div>
    </section>
  )
}

export default Time;