import { useEffect, useRef, useState } from 'react'
import { DetailsStyled, SummaryStyled, OptionsStyled, ItemStyled } from 'styles/components/dropdown'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

function Dropdown ({ options, children, onSelect, ...props }) {
  const detailsRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState(null)

  useEffect(() => {
    console.log(props.onSelect)
    const { current } = detailsRef
    current.addEventListener('toggle', () => setOpen(current.open))
    const [firstOption] = options
    setSelect(firstOption)
    onSelect(firstOption.value)
  }, [])

  const handleChangeValue = (option) => {
    const { current } = detailsRef
    setSelect(option)
    onSelect(option.value)
    current.open = false
  }

  return (
    <DetailsStyled ref={detailsRef} {...props}>
      <SummaryStyled>
        <span>{select?.content || children }</span>
        {open ? <HiChevronUp/> : <HiChevronDown /> }
      </SummaryStyled>
      <OptionsStyled>
        {
          options.map((option) => {
            return <Item key={option.value} {...option} onClick={() => handleChangeValue(option)} />
          })
        }
      </OptionsStyled>
    </DetailsStyled>
  )
}

function Item (props) {
  return (
    <ItemStyled {...props}>
      {props?.content}
    </ItemStyled>
  )
}

export default Dropdown
