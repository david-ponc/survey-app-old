import { useRef, useEffect } from 'react'
import { MainStyled, MainContentStyled } from 'styles/components/main'
import Header from 'components/Header'
import Tab from 'components/Tab'

export default function Main ({ children }) {
  const mainContentRef = useRef(null)

  useEffect(() => {
    const element = mainContentRef.current
    element.style.height = `${element.offsetHeight}px`
  }, [])

  return (
    <MainStyled>
      <Header />
       <Tab />
      <MainContentStyled ref={mainContentRef}>
        {children}
      </MainContentStyled>
    </MainStyled>
  )
}
