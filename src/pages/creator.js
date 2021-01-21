import Layout from 'components/Layout'
import Aside from 'components/Aside'
import Main from 'components/Main'

export default function Creator () {
  return (
    <Layout title="creator" design="withAside">
      <Aside />
      <Main>
        <h1>Content of creator page</h1>
      </Main>
    </Layout>
  )
}
