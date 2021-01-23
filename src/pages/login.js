import Button from 'components/Button'
import Layout from 'components/Layout'
import useFirebase from 'hooks/useFirebase'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'

export default function Login () {
  const user = useUser()
  const { loginWithGoogle } = useFirebase()
  const { replace } = useRouter()

  useEffect(() => {
    user && replace('/creator')
  }, [user])

  const handleLogin = async (evt) => {
    evt.preventDefault()
    const res = await loginWithGoogle()
    console.log(res)
  }

  return (
    <Layout title="Login" design="default">
      <DivStyled>
        <FormStyled onSubmit={handleLogin}>
          <h2>Generator Surveys Application</h2>
          <Button design="full">Login with Google</Button>
        </FormStyled>
      </DivStyled>
    </Layout>
  )
}

const DivStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormStyled = styled.form`
  background: var(--gray-600);
  padding: 1.5rem;
  border-radius: 0.75rem;
  display: grid;
  gap: 1.5rem;
`
