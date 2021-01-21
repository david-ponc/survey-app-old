import { AsideStyled, CirclePlusStyled, CreateSurveyStyled, H2Styled } from 'styles/components/aside'
import { HiViewGrid } from 'react-icons/hi'
import { BiPlus } from 'react-icons/bi'

export default function Aside () {
  return (
    <AsideStyled>
      <H2Styled> <HiViewGrid size={26} /> Survey dashboard</H2Styled>
      <CreateSurveyStyled>
        <CirclePlusStyled>
          <BiPlus size={20}/>
        </CirclePlusStyled>
        Create new survey
      </CreateSurveyStyled>
    </AsideStyled>
  )
}
