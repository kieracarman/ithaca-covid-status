import Head from 'next/head'
import useSWR from 'swr'
import { SpinnerDotted } from 'spinners-react'

import fetcher from '../lib/fetcher'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { data } = useSWR('/api/covid-status', fetcher)

  return (
    <div className={styles.container}>
      <Head>
        <title>Ithaca Covid Status</title>
      </Head>
      {data ? (
        <div className={styles.data}>
          <h1>Community Transmission</h1>
          <span className={styles.transmission}>
            {data.community_transmission}
          </span>
          <h2>New Cases</h2>
          <span className={styles.new}>
            {data.new_cases}
          </span>
          <h2>Total Cases</h2>
          <span className={styles.total}>
            {data.total_cases}
          </span>
        </div>
      ) : <SpinnerDotted size={172} color='#000000' />}
    </div>
  )
}