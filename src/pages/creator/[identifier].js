import Layout from 'components/Layout'
import Aside from 'components/Aside'
import Main from 'components/Main'
import Block from 'components/Block'
import useFirebase from 'hooks/useFirebase'
import { useRouter } from 'next/router'

export default function Creator ({ surveys, survey }) {
  const { query: { identifier } } = useRouter()

  return (
    <Layout title="creator" design="withAside">
      <Aside id={identifier} surveys={surveys} />
      <Main id={identifier} survey={survey}>
        <Block />
      </Main>
    </Layout>
  )
}

export async function getServerSideProps ({ params }) {
  const { getSurveys, getSurveyByIdentifier } = useFirebase()
  const surveys = await getSurveys()
  const survey = await getSurveyByIdentifier(params.identifier)
  return {
    props: {
      surveys,
      survey
    }
  }
}
