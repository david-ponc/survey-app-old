import styled from 'styled-components'

export const AsideStyled = styled.aside`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
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
