import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-default bg-stone-50 dark:bg-stone-900 transition-colors max-w-screen-xl mx-auto text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
