import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/dist/client/router';

export default function Custom404() {
  const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/');
  //   }, 5000);
  // }, []);

  return (
    <Layout pageTitle='404'>
      <h1 className={styles.title}>Oops... Not Found Page</h1>

      <h4 className={styles.text_center}>
        Halaman yang anda cari tidak ditemukan
      </h4>

      <button className={styles.btn} onClick={() => router.push('/')}>
        Kembali
      </button>
    </Layout>
  );
}
