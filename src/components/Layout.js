import Head from 'next/head'

function Layout ({ title, children }) {
  return (
    <>
      <Head>
        <title>Survey | {title}</title>
      </Head>
      {children}
    </>
  )
}

export default Layout
