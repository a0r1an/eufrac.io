import React from 'react'
// import App from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'

import '../public/normalize.css';
import '../public/nprogress.css';
import '../public/theme.css';
import '../public/codeSnippet.css';

const theme = {
  colors: {
    primary: '#ffaf75',
    primaryDarker: '#f39c5d'
  }
}

Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp