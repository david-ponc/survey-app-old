import { MainStyled, MainContentStyled } from 'styles/components/main'
import Header from 'components/Header'
import Tab from 'components/Tab'

export default function Main ({ children }) {
  return (
    <MainStyled>
      <Header />
       <Tab />
      <MainContentStyled>
        {children}
      </MainContentStyled>
    </MainStyled>
  )
}
