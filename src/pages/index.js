import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import { useGlobalContext } from '@component/Context/global'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const g = useGlobalContext();
  console.log(g);
  return (
    <>
      
      <main className={styles.main}>
        <h1>hey</h1>
      </main>
    </>
  )
}
