import { useRef, useEffect } from 'react'
import { MainStyled, MainContentStyled, ButtonsStyled, AlertStyled, ImageStyled } from 'styles/components/main'
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
import { IoClose } from 'react-icons/io5'
import { TiInfo } from 'react-icons/ti'
import useUser from 'hooks/useUser'

export default function Main ({ children, survey, blocks }) {
  const { route, query: { identifier: [identifier] }, push } = useRouter()
  const mainContentRef = useRef(null)
  const { publishSurvey } = useFirebase()
  const user = useUser()

  useEffect(() => {
    const element = mainContentRef.current
    element.style.height = `${element.offsetHeight}px`
  }, [])

  const handlePublish = async () => {
    await publishSurvey(identifier, blocks)
    push(`/creator/${identifier}`)
  }

  return (
    <MainStyled>
      <Header>
        <h2>{survey.name || 'Name survey'}</h2>
        <AvatarStyled>
          {user?.photoURL ? <ImageStyled src={user.photoURL} width={32} height={32}/> : <FaUserCircle size={26} />}
          {user?.displayName ? user.displayName : 'loading...'}
          <HiChevronDown/>
        </AvatarStyled>
        {route === '/statistics/[[...identifier]]' && <Button actions={actions} droppable>Export</Button>}
        {route === '/creator/[[...identifier]]' && (
          <ButtonsStyled>
            <Button onClick={handlePublish}>Publish</Button>
            {survey.survey.length > 1 && <Button><RiShareLine size={17}/></Button>}
          </ButtonsStyled>
        )}
      </Header>
       <Tab />
      <MainContentStyled ref={mainContentRef}>
        {survey.survey.length < 2 && (
          <AlertStyled>
            <TiInfo size={20} />
            You {"don't"} have enough blocks to publish this survey
            <IoClose />
          </AlertStyled>
        ) }
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
