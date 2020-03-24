import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          {/* Import CSS for nprogress */}
          <link rel='stylesheet' type='text/css' href='/static/normalize.css' />
          <link rel='stylesheet' type='text/css' href='/static/theme.css' />
          <link rel='stylesheet' type='text/css' href='/static/codeSnippet.css' />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,800|Raleway&display=swap" rel="stylesheet"></link>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
