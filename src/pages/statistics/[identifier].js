import Layout from 'components/Layout'
import { BiListUl, BiParagraph } from 'react-icons/bi'
import { VscFilePdf } from 'react-icons/vsc'
import { BsFileEarmarkText } from 'react-icons/bs'
import Aside from 'components/Aside'
import Main from 'components/Main'
import { useRouter } from 'next/router'

export default function Statistics () {
  const { query: { identifier } } = useRouter()

  return (
    <Layout title="dashboard" design="withAside">
      <Aside id={identifier} />
      <Main id={identifier}>
        <h1>Content of statistics page</h1>
      </Main>
    </Layout>
  )
}
