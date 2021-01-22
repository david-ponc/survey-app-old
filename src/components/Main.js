import { useRef, useEffect } from 'react'
import { MainStyled, MainContentStyled, ButtonsStyled } from 'styles/components/main'
import Header from 'components/Header'
import Tab from 'components/Tab'
import { AvatarStyled } from 'styles/components/header'
import { FaUserCircle } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'
import { RiShareLine } from 'react-icons/ri'
import Button from 'components/Button'
import { VscFilePdf } from 'react-icons/vsc'
import { BsFileEarmarkText } from 'react-icons/bs'
import { useRouter } from 'next/router'
import useFirebase from 'hooks/useFirebase'

export default function Main ({ children, survey, blocks }) {
  const { route, query: { identifier } } = useRouter()
  const mainContentRef = useRef(null)
  const { publishSurvey } = useFirebase()

  useEffect(() => {
    const element = mainContentRef.current
    element.style.height = `${element.offsetHeight}px`
  }, [])

  const handlePublish = () => {
    publishSurvey(identifier, blocks)
  }

  return (
    <MainStyled>
      <Header>
        <h2>{survey.name || 'Name survey'}</h2>
        <AvatarStyled>
          <FaUserCircle size={26} />
          David Ponce
          <HiChevronDown/>
        </AvatarStyled>
        {route === '/statistics/[identifier]' && <Button actions={actions} droppable>Export</Button>}
        {route === '/creator/[identifier]' && (
          <ButtonsStyled>
            <Button onClick={handlePublish}>Publish</Button>
            {route === '/creator/[identifier]' && survey.survey.length > 1 && <Button><RiShareLine size={17}/></Button>}
          </ButtonsStyled>
        )}
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
