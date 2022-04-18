import Head from 'next/head'
import useSWR from 'swr'

import fetcher from '../lib/fetcher'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { data } = useSWR('/api/covid-status', fetcher)

  return (
    <div className={styles.container}>
      <Head>
        <title>Ithaca Covid Status</title>
      </Head>
      <div className={styles.data}>
        <h1>Community Transmission</h1>
        <span className={styles.transmission}>
          {data ? data[6].community_transmission : ''}
        </span>
        <h2>New Cases</h2>
        <span className={styles.new}>
          {data ? data[6].new_cases : ''}
        </span>
        <h2>Total Cases</h2>
        <span className={styles.total}>
          {data ? data[6].total_cases : ''}
        </span>
      </div>
    </div>
  )
}