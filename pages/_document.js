import Document, { Html, Head, Main, NextScript } from 'next/document';
import { resetServerContext } from 'react-beautiful-dnd';

export default class MyDocument extends Document {
  static getInitialProps = async (ctx) => {
    console.log('et')
    const page = await ctx.renderPage()
    const initialProps = await Document.getInitialProps(ctx)
    resetServerContext();
    return { ...initialProps, ...page }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}