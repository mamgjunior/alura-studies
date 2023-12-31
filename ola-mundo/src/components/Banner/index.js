import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/marcos-under.jpg';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, a todos!
        </h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Marcos Maia. Desenvolvedor Full Stack nas seguintes Stacks, back-end: Pyhon e Django e no Front-end: TypeScript, JavaScript e React. Aqui compartilho vários conhecimentos. Espero que aprenda algo novo :)
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt='Apenas um circulo'
        />

        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt='Foto do fulano de tal'
        />
      </div>
    </div>
  )
}