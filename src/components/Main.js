import { useRef, useEffect } from 'react'
import { MainStyled, MainContentStyled } from 'styles/components/main'
import Header from 'components/Header'
import Tab from 'components/Tab'
import { AvatarStyled, HeaderStyled } from 'styles/components/header'
import { FaUserCircle } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'
import Button from 'components/Button'
import { VscFilePdf } from 'react-icons/vsc'
import { BsFileEarmarkText } from 'react-icons/bs'
import { useRouter } from 'next/router'

export default function Main ({ children, id }) {
  const { route } = useRouter()
  const mainContentRef = useRef(null)

  useEffect(() => {
    const element = mainContentRef.current
    element.style.height = `${element.offsetHeight}px`
  }, [])

  return (
    <MainStyled>
      <Header>
        <h2>Encuesta de prueba</h2>
        <AvatarStyled>
          <FaUserCircle size={26} />
          David Ponce
          <HiChevronDown/>
        </AvatarStyled>
        {route === '/statistics/[identifier]' && <Button actions={actions} droppable>Export</Button>}
        {route === '/creator/[identifier]' && <Button>Publish</Button>}
      </Header>
       <Tab />
      <MainContentStyled ref={mainContentRef}>
        {children}
      </MainContentStyled>
    </MainStyled>
  )
}

const actions = [
  {
    name: <>PDF <VscFilePdf size={20} /></>,
    onClick: () => {}
  },
  {
    name: <>Plain Text <BsFileEarmarkText size={20} /></>,
    onClick: () => {}
  }
]
