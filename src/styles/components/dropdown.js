import styled, { css } from 'styled-components'

const layout = css`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  padding: 0;
  user-select: none;
  cursor: pointer;
`

export const DetailsStyled = styled.details`
  ${layout};
  width: max-content;
  margin: 2rem;
  background: var(--gray-400);
  color: var(--gray-200);
  position: relative;
  
  &[open] {
    border-radius: 0.375rem 0.375rem 0 0;
  }
`

export const SummaryStyled = styled.summary`
  ${layout};
  //grid-template-columns: 1fr auto;
  outline: 0;
  padding: 0.375em 0.5em;
  
  span {
    display: inherit;
    grid-template-columns: auto 1fr;
    align-self: center;
  }
  
  &::-webkit-details-marker {
    display: none;
  }
`

export const OptionsStyled = styled.ol`
  width: 100%;
  position: absolute;
  border-radius: 0 0 0.375rem 0.375rem;
  background: var(--gray-400);
  list-style: none;
  padding: 0;
`

export const ItemStyled = styled.li`
  ${layout};
  grid-template-columns: auto 1fr;
  margin: 0;
  padding: 0.375em 0.5em;
  
  &:hover {
    background: var(--gray-300);
  }
`
