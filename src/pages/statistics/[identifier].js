import { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import Aside from 'components/Aside'
import Main from 'components/Main'
import { useRouter } from 'next/router'
import useFirebase from 'hooks/useFirebase'

export default function Statistics ({ surveys }) {
  const { query: { identifier } } = useRouter()

  return (
    <Layout title="dashboard" design="withAside">
      <Aside id={identifier} surveys={surveys} />
      <Main id={identifier}>
        <h1>Content of statistics page</h1>
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
