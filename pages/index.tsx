import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tropical Frutas e Verduras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Tropical <a href="/frutas">Frutas e Verduras</a>
        </h1>

        <p className={styles.description}>
          Selecione uma das opções abaixo para iniciar
        </p>

        <div className={styles.grid}>
          <a href="/frutas" className={styles.card}>
            <h3>Consultar todas</h3>
            <p>Carrega a página com os cartões de todas as frutas e verduras disponíveis na API</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/EdgardOliveira"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edgard Oliveira
          <img src="/vhttps://avatars0.githubusercontent.com/u/50224075?s=400&u=0e97c423fcf9cd21459e1c796574f09df2a12503&v=4" alt="avatar" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
