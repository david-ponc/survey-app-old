import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AsideStyled, CirclePlusStyled, CreateSurveyStyled, H2Styled, LinkStyled, NavSurveysStyled } from 'styles/components/aside'
import { HiOutlineClipboardList, HiViewGrid } from 'react-icons/hi'
import { BiPlus } from 'react-icons/bi'
import CreateSurveyModal from 'components/CreateSurveyModal'
import { useRouter } from 'next/router'
import useFirebase from 'hooks/useFirebase'

export default function Aside ({ surveys: initialSurveys }) {
  const [surveys, setSurveys] = useState(initialSurveys)
  const { query: { identifier } } = useRouter()
  const [visible, setVisible] = useState(false)
  const { getSurveysObserver } = useFirebase()

  useEffect(() => {
    const unobserve = getSurveysObserver(setSurveys)
    return () => {
      unobserve()
    }
  }, [])

  const toggleModal = () => {
    setVisible(!visible)
  }

  const hiddenModal = () => {
    setVisible(false)
  }

  return (
    <>
      <AsideStyled>
        <H2Styled> <HiViewGrid size={26} /> Survey dashboard</H2Styled>
        <CreateSurveyStyled onClick={toggleModal}>
          <CirclePlusStyled>
            <BiPlus size={20}/>
          </CirclePlusStyled>
          Create new survey
        </CreateSurveyStyled>
        <NavSurveysStyled>
          {
            surveys.map(survey => {
              return (
                <Link href={`/creator/${survey.id}`} key={survey.id} passHref>
                  <LinkStyled active={identifier === survey.id} ><HiOutlineClipboardList size={20}/> {survey.name}</LinkStyled>
                </Link>
              )
            })
          }
        </NavSurveysStyled>
      </AsideStyled>
      {visible && <CreateSurveyModal closeModal={hiddenModal}/>}
    </>
  )
}
