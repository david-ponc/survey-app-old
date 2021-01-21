import { HeaderStyled, AvatarStyled } from 'styles/components/header'
import { FaUserCircle } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'
import Button from 'components/Button'
import { VscFilePdf } from 'react-icons/vsc'
import { BsFileEarmarkText } from 'react-icons/bs'

export default function Header () {
  return (
    <HeaderStyled>
      <h2>Encuesta de prueba</h2>
      <AvatarStyled>
        <FaUserCircle size={26} />
        David Ponce
        <HiChevronDown/>
      </AvatarStyled>
      <Button actions={actions} droppable>Export</Button>
    </HeaderStyled>
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
