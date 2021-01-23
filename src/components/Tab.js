import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SectionStyled, NavStyled, LinkStyled } from 'styles/components/tab'

export default function Tab () {
  const { route, query: { identifier } } = useRouter()
  const [active] = useState(route)
  return (
    <SectionStyled>
      <NavStyled>
        <Link href={`/creator/${identifier}`}>
          <LinkStyled active={active === '/creator/[[...identifier]]'}>Creator</LinkStyled>
        </Link>
        <Link href={`/statistics/${identifier}`}>
          <LinkStyled active={active === '/statistics/[[...identifier]]'}>Statistics</LinkStyled>
        </Link>
      </NavStyled>
    </SectionStyled>
  )
}
