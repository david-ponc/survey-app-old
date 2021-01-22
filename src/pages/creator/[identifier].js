import { useState } from 'react'
import Layout from 'components/Layout'
import Aside from 'components/Aside'
import Main from 'components/Main'
import Block from 'components/Block'
import useFirebase from 'hooks/useFirebase'
import { Router } from 'next/router'

export default function Creator ({ surveys, survey }) {
  const [blocks, setBlocks] = useState(survey.survey)

  return (
    <Layout title="creator" design="withAside">
      <Aside surveys={surveys} />
      <Main blocks={blocks} survey={survey}>
        <Block blocks={blocks} setBlocks={setBlocks} />
      </Main>
    </Layout>
  )
}

const initialBlocks = [
  {
    title: '',
    type: 'Text',
    value: ''
  }
]

export async function getServerSideProps ({ params, ...ctx }) {
  const { getSurveys, getSurveyByIdentifier } = useFirebase()
  const surveys = await getSurveys()
  const survey = await getSurveyByIdentifier(params.identifier)
  if (!survey) {
    redirectUser(ctx, '/')
  }
  if (!survey?.survey) {
    survey.survey = initialBlocks
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
