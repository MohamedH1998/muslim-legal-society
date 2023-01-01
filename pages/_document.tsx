import Document, { Html, Head, Main, NextScript } from "next/document"
import React from "react"


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.5/dist/flowbite.min.css" />
        </Head>
        <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js"></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
