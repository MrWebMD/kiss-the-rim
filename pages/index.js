import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";
import { getAllPlayers } from "../lib/api";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Navigation from "../components/Layout/Navigation";
import PlayerList from "../components/PlayerList/PlayerList";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kiss The Rim</title>
        <meta
          name="description"
          content="Kiss The Rim. Connecting with the ball dont lie API."
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <Header/>
      <main className={styles.main}>
        <PlayerList/>
      </main>
    </Layout>
  );
}

