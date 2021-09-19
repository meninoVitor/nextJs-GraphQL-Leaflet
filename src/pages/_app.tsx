import type { AppProps } from 'next/app'
import React from 'react'
import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default App
