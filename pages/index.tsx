import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import { FileText, GitHub, Linkedin } from 'react-feather'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Jonathan Tseng</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl tracking-wide">
          JONATHAN TSENG
        </h1>
        <div className="flex mt-4">
          <Link href="https://github.com/tsengjonathan">
            <a className="mx-2">
              <GitHub color="black" />
            </a>
          </Link>
          <Link href="https://linkedin.com/in/tsengjonathan">
            <a className="mx-2">
              <Linkedin color="black" />
            </a>
          </Link>
          <Link href="/resume.pdf">
            <a className="mx-2">
              <FileText color="black" />
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
