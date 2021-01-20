import { DetailsStyled, SummaryStyled, OptionsStyled, ItemStyled } from 'styles/components/dropdown'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import useDropdown from 'hooks/useDropdown'

function Dropdown ({ options, children, onSelect, ...props }) {
  const { detailsRef, open, select, handleChangeValue } = useDropdown({ onSelect, options })

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
