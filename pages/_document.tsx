import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/doodles/hero/code.svg"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/doodles/hero/code.svg"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/doodles/hero/code.svg"
          />
          <link rel="manifest" href="/static/static/doodles/hero/code.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
