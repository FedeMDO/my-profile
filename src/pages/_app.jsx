import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fede Montes - Software Engineer</title>
        <meta
          name="description"
          content="Fede Montes is a software engineer based in Buenos Aires, Argentina. He's currently working at C2FO through Number8, a contracting company."
        />
        <link rel="icon" href="/me-world-cup.jpg" sizes="any" />
      </Head>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <MDXProvider components={mdxComponents}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    </>
  )
}
