import Layout from 'components/Layout'
import Aside from 'components/Aside'
import Main from 'components/Main'
import Block from 'components/Block'

export default function Creator () {
  return (
    <Layout title="creator" design="withAside">
      <Aside />
      <Main>
        <Block />
      </Main>
    </Layout>
  )
}
