import { ButtonStyled, DetailsStyled, SummaryStyled, OptionsStyled, ItemStyled, LoaderStyled } from 'styles/components/button'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import useDropdown from 'hooks/useDropdown'
import { useState } from 'react'

export default function Button ({
  color = 'primary',
  design = 'normal',
  children,
  actions,
  droppable, ...props
}) {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    !droppable && props?.onClick && setLoading(true)
    setTimeout(() => {
      !droppable && props?.onClick && props.onClick()
      !droppable && props?.onClick && setLoading(false)
    }, 1200)
  }

  if (droppable) {
    return (
      <ButtonDroppable {...props} color={color} actions={actions}>
        {children}
      </ButtonDroppable>
    )
  }

  return (
    <ButtonStyled {...props} design={design} color={color} onClick={handleClick}>
      {loading && <>Posting <LoaderStyled size={17} /> </>}
      {!loading && children}
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
