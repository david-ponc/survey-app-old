import { DetailsStyled, SummaryStyled, OptionsStyled, ItemStyled } from 'styles/components/dropdown'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import useDropdown from 'hooks/useDropdown'

function Dropdown ({ options, children, onSelect, value, ...props }) {
  const { detailsRef, open, select, handleChangeValue } = useDropdown({ onSelect, options, value })
  return (
    <DetailsStyled ref={detailsRef} {...props}>
      <SummaryStyled>
        <span>{select?.content || children }</span>
        {open ? <HiChevronUp/> : <HiChevronDown /> }
      </SummaryStyled>
      <OptionsStyled>
        { open &&
          Array.from(options.values()).map((option) => {
            return <Item key={option.value} content={option.content} onClick={() => handleChangeValue(option) } />
          }
          )
        }
      </OptionsStyled>
    </DetailsStyled>
  )
}

function Item ({ content, ...props }) {
  return (
    <ItemStyled {...props}>
      {content}
    </ItemStyled>
  )
}

export default Dropdown
