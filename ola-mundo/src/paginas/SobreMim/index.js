import PostModelo from "components/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/marcos-under.jpg';

import styles from './Sobremim.module.css';

export default function Sobremim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo='Sobre mim'
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Marcos!
      </h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Marcos Maia"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Bacharel em Sistemas de informações pela Universidade Estácio de Sá e Técnico em informática formado pelo Centro de estudos e pesquisa em eletrônica profissional e informática do Ceará. Sou bastante determinado e adoro desafios e descobrir soluções. Tenho facilidade no aprendizado de novas tecnologias e um dos meus pontos fortes é resolver de forma simples problemas complexos. Tenho bastante experiência com projetos em Delphi com bancos de dados Firebrid e Sql Server. Atualmente trabalho em aplicações web desenvolvidas em Python com Django Framework e banco de dados PostgreSql e também com arquitetura de micro serviços. Fui levado a aprender e trabalhar com React Framework para atuar no front-end e também com TypeScript. Hoje por trabalhar em uma empresa de ciber security venho estudando e aprendendo sobre exploração de vulnerabilidades, pentest e técnicas de invasão com o intuito de desenvolver um software mais seguro, robusto e confiável.
      </p>

      <p className={styles.paragrafo}>
        Atuando como desenvolvedor FullStack com ênfase no Front-end. Atualmente desenvolvendo a plataforma de Lisa, uma aplicação web com base em micros serviços desenvolvida em Python e Django no Back-end e Typescript e React no Front-end. Recentemente Comecei a apoiar outros setores da empresa com a criação de automações de tarefas especificas do setor, e isso está me gerando mais conhecimentos e novos aprendizados.
      </p>
    </PostModelo>
  )
}