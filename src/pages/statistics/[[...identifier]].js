import Layout from 'components/Layout'
import Aside from 'components/Aside'
import Main from 'components/Main'
import { useRouter } from 'next/router'
import useFirebase from 'hooks/useFirebase'

export default function Statistics ({ surveys, survey }) {
  const { query: { identifier } } = useRouter()

  return (
    <Layout title="dashboard" design="withAside">
      <Aside id={identifier} surveys={surveys} />
      <Main id={identifier} survey={survey}>
        <h1>Content of statistics page</h1>
      </Main>
    </Layout>
  )
}

export async function getServerSideProps ({ params }) {
  const [identifier] = params?.identifier
  const { getSurveys, getSurveyByIdentifier } = useFirebase()
  const surveys = await getSurveys()
  const survey = await getSurveyByIdentifier(identifier)
  return {
    props: {
      surveys,
      survey
    }
  }
}
