import { HeaderStyled, AvatarStyled } from 'styles/components/header'
import { FaUserCircle } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'
import Button from 'components/Button'
import { VscFilePdf } from 'react-icons/vsc'
import { BsFileEarmarkText } from 'react-icons/bs'

export default function Header ({ children }) {
  return (
    <HeaderStyled>
      {children}
    </HeaderStyled>
  )
}
