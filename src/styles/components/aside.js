import styled from 'styled-components'

export const AsideStyled = styled.aside`
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 2rem;
  border-radius: 0.75rem;
  padding: 1.5rem;
  background: var(--gray-600);
`

export const H2Styled = styled.h2`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  color: #456DD4;
`

export const CreateSurveyStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  height: max-content;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
`

export const CirclePlusStyled = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: var(--gray-300);
  border: 1px dashed #456DD4;
  color: #456DD4;
  display: grid;
  place-items: center;
`

export const NavSurveysStyled = styled.nav`
  height: min-content;
  display: grid;
  gap: 1rem;
`

export const LinkStyled = styled.a`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.75rem;
  background: ${({ active }) => active ? 'var(--gray-300)' : 'var(--gray-600)'};
  border-radius: 3rem;

  & > svg {
    color: ${({ active }) => active ? '#456DD4' : 'var(--gray-200)'};
  }
  
  &:hover {
    background: var(--gray-300);
  }
`
