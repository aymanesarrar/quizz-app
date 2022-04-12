import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/Card'
import Layout from '../components/Layout'
import PageHead from '../components/PageHead'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <PageHead pageName="Quizz App"/>
      <Layout>
        <Card />
      </Layout>
    </div>
  )
}
