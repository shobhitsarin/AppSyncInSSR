// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {

    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }

    //   // Step 1: Create an instance of ServerStyleSheet
    // const sheet = new ServerStyleSheet();

    // // Step 2: Retrieve styles from components in the page
    // const page = renderPage((App) => (props) =>
    //   sheet.collectStyles(<App {...props} />),
    // );

    // // Step 3: Extract the styles as <style> tags
    // const styleTags = sheet.getStyleElement();

    // // Step 4: Pass styleTags as a prop
    // return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;