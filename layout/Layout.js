import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({children}) => {
  return (
    <>
    <Head>
        <title>Blog</title>
    </Head>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default Layout