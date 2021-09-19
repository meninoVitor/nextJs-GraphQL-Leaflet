import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React avançado - Boilerplate</title>
        <meta
          name="description"
          content="A simple react app to starter work with React, TypeScript and Styled Components"
        ></meta>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default App
