import Layout from 'components/Layout'
import Aside from 'components/Aside'
import Main from 'components/Main'
import { Router, useRouter } from 'next/router'
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

export async function getServerSideProps ({ params, ...ctx }) {
  const { getSurveys, getSurveyByIdentifier } = useFirebase()
  let survey = {}
  if (params?.identifier) {
    const [identifier] = params.identifier
    survey = await getSurveyByIdentifier(identifier)
  }
  const surveys = await getSurveys()

  if (!survey) {
    redirectUser(ctx, '/')
  }

  return {
    props: {
      surveys,
      survey
    }
  }
}

function redirectUser (ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location })
    ctx.res.end()
  } else {
    Router.push(location)
  }
}
