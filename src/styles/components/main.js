import Image from 'next/image'
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

export const ButtonsStyled = styled.div`
  display: inherit;
  grid-auto-flow: column;
  align-items: center;
  gap: 0.5rem;
`

export const AlertStyled = styled.span`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background: var(--gray-100);
  border-radius: 0.375rem;
  color: var(--gray-500);
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`

export const ImageStyled = styled(Image)`
  border-radius: 50%;
`
