import { HeaderStyled } from 'styles/components/header'

export default function Header ({ children }) {
  return (
    <HeaderStyled>
      {children}
    </HeaderStyled>
  )
}
