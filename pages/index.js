import Head from 'next/head'
import Image from 'next/image'
import Section1 from '../components/Section1'
import Layout from '../layout/Layout'


export default function Home() {
  return (
   <>
    <Layout>
      <Section1 />
    </Layout>
   </>
  )
}
