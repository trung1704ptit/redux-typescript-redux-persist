// Packages
import { ReactNode } from 'react'
import Head from 'next/head'

interface Props {
  children?: ReactNode
  title?: string
}

export default function Layout({ children, title }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="An example of containerized redux with typescript and redux-persistence."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}
