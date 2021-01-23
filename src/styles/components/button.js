import styled from 'styled-components'

const COLORS = {
  primary: {
    background: '#456DD4',
    color: 'var(--gray-600)'
  }
}

const DESIGNS = {
  normal: {
    padding: '0.5em 1rem',
    width: 'max-content'
  },
  full: {
    padding: '0.75rem 1.5rem',
    width: '100%'
  }
}

export const ButtonStyled = styled.button`
  outline: 0;
  border: 0;
  padding: ${({ design }) => DESIGNS[design].padding};
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
  align-items: center;
  border-radius: 0.375rem;
  font-weight: 500;
  user-select: none;
  width: ${({ design }) => DESIGNS[design].width};
  background: ${({ color }) => COLORS[color].background};
  color: ${({ color }) => COLORS[color].color};
`

export const DetailsStyled = styled.details`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
  align-items: center;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  width: max-content;
  background: ${({ color }) => COLORS[color].background};
  color: ${({ color }) => COLORS[color].color};

  &[open] > summary{
    &::before {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
      display: block;
      cursor: default;
      content: " ";
      background: transparent;
    }
  }
`

export const SummaryStyled = styled.summary`
  outline: 0;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5em 1rem;
  user-select: none;
  &::-webkit-details-marker {
    display: none;
  }
`

export const OptionsStyled = styled.ol`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: var(--gray-300);
  color: var(--gray-100);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  user-select: none;
  width: max-content;
  display: grid;
  gap: 0.5rem;
  z-index: 20;

   &::before {
     top: -14px;
     right: 10px;
     left: auto;
     position: absolute;
     display: inline-block;
     content: "";
     border: 7px solid transparent;
     border-bottom: 7px solid var(--gray-400);
   }
`
export const ItemStyled = styled.li`
  list-style: none;
  cursor: pointer;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  align-items: center;
  padding: 0.375rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.1s ease;
  
  &:hover {
    background: var(--gray-200);
  }
`
