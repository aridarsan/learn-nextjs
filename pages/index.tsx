import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Belajar Next.js</title>
        <meta name='description' content='Belajar next.js web app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout pageTitle='Home'>
        <h1 className={styles.title}>
          Welcome to learn <a href='https://nextjs.org'>Next.js!</a>
        </h1>
      </Layout>
    </div>
  );
}
