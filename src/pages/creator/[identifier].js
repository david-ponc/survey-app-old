import Layout from 'components/Layout'
import Aside from 'components/Aside'
import Main from 'components/Main'
import Block from 'components/Block'
import useFirebase from 'hooks/useFirebase'
import { useRouter } from 'next/router'

export default function Creator ({ surveys }) {
  const { query: { identifier } } = useRouter()

  return (
    <Layout title="creator" design="withAside">
      <Aside id={identifier} surveys={surveys} />
      <Main id={identifier}>
        <Block />
      </Main>
    </Layout>
  )
}

export async function getServerSideProps () {
  const { getSurveys } = useFirebase()
  const surveys = await getSurveys()
  return {
    props: {
      surveys
    }
  }
}
