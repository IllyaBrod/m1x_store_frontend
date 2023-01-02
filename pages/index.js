import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Showcase from '../components/Showcase';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>m1x store</title>
        <meta name="description" content="Watch store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar></NavBar>
      </header>
      <main className={styles.main}>
        
      </main>
    </>
  )
}
