import React, { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  pageTitle: String;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Belajar Next.js | {pageTitle}</title>
        <meta name='description' content='Belajar next.js web app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div>{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
