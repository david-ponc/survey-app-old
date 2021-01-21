import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SectionStyled, NavStyled, LinkStyled } from 'styles/components/tab'

export default function Tab () {
  const { route } = useRouter()
  const [active] = useState(route)
  return (
    <SectionStyled>
      <NavStyled>
        <Link href="/">
          <LinkStyled active={active === '/'}>Statistics</LinkStyled>
        </Link>
        <Link href="/creator">
          <LinkStyled active={active === '/creator'}>Creator</LinkStyled>
        </Link>
      </NavStyled>
    </SectionStyled>
  )
}
