import { ButtonStyled, DetailsStyled, SummaryStyled, OptionsStyled, ItemStyled } from 'styles/components/button'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import useDropdown from 'hooks/useDropdown'

export default function Button ({
  color = 'primary',
  design = 'normal',
  children,
  actions,
  droppable, ...props
}) {
  const handleClick = () => {
    !droppable && props?.onClick && props.onClick()
  }

  if (droppable) {
    return (
      <ButtonDroppable {...props} color={color} actions={actions}>
        {children}
      </ButtonDroppable>
    )
  }

  return (
    <ButtonStyled {...props} color={color} onClick={handleClick}>
      {children}
    </ButtonStyled>
  )
}

function ButtonDroppable ({ children, actions, color }) {
  const { detailsRef, open, hiddenOptions } = useDropdown({})

  const handleClickOption = (action) => {
    console.log(action)
    hiddenOptions()
  }

  return (
    <DetailsStyled color={color} ref={detailsRef}>
      <SummaryStyled>
        {children}
        {open ? <HiChevronUp /> : <HiChevronDown/>}
      </SummaryStyled>
      <OptionsStyled>
        {
          actions.map((action, i) => {
            return <Item key={i} {...action} onClick={() => handleClickOption(action)} />
          })
        }
      </OptionsStyled>
    </DetailsStyled>
  )
}

function Item (props) {
  return (
    <ItemStyled {...props}>
      {props?.name}
    </ItemStyled>
  )
}
