import Head from 'next/head'
import styles from '../styles/Home.module.css'

type Props = {
  title: string
}

export default function Home({ title = 'Advanced React Course' }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Welcome to{' '}
        <a href="https://github.com/gustavomanca/react-avancado-boilerplate.git">
          Advanced React Course
        </a>
      </h1>
    </div>
  )
}
