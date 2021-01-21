import Link from 'next/link'
import { AsideStyled, CirclePlusStyled, CreateSurveyStyled, H2Styled, LinkStyled, NavSurveysStyled } from 'styles/components/aside'
import { HiOutlineClipboardList, HiViewGrid } from 'react-icons/hi'
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
      <NavSurveysStyled>
        <Link href="/statistics/as9dfjsad-90as9uias" passHref>
          <LinkStyled><HiOutlineClipboardList size={20}/> Survey 2020</LinkStyled>
        </Link>
        <Link href="/statistics/a98sduadjasdla[sp9d" passHref>
          <LinkStyled><HiOutlineClipboardList size={20}/> Name of survey</LinkStyled>
        </Link>
        <Link href="/statistics/a0s9duas98djaasdoij" passHref>
          <LinkStyled><HiOutlineClipboardList size={20}/> One more survey</LinkStyled>
        </Link>
      </NavSurveysStyled>
    </AsideStyled>
  )
}
