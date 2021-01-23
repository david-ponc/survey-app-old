import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useFirebase from './useFirebase'

export default function useUser () {
  const { onAuthStateChanged } = useFirebase()
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const { push } = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && push('/login')
  }, [user])

  return user
}

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
}
