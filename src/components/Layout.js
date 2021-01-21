import Head from 'next/head'
import styled from 'styled-components'

function Layout ({ title, children, design = 'default' }) {
  console.log(design)
  return (
    <>
      <Head>
        <title>Survey | {title}</title>
      </Head>
      <LayoutStyled design={design}>
        {children}
      </LayoutStyled>
    </>
  )
}

const LayoutStyled = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: ${({ design }) => DESIGN[design].templateColumns};
  grid-template-rows: 1fr;
`

const DESIGN = {
  default: {
    templateColumns: '1fr'
  },
  withAside: {
    templateColumns: '320px 1fr'
  }
}

export default Layout
