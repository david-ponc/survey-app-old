import styled from 'styled-components'

export const MainStyled = styled.main`
  border-radius: 0.75rem;
  padding: 0;
  background: var(--gray-600);
  display: grid;
  grid-template-rows: auto auto 1fr;
  overflow: hidden;
`

export const MainContentStyled = styled.section`
  height: 100%;
  padding: 2rem;
  overflow-y: auto;
`
