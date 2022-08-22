import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  // To mitigate FOUC, extra tooling to handle styled-components
  // to render CSS 
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal();
    }
  }
  
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Hello! Name is Adrian Eufracio, Software Engineer, and I am here to talk about code stuff."></meta> 
          <link rel="preload" href="https://fonts.googleapis.com/css?family=Montserrat:400,800|Raleway&display=swap" as="style" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
