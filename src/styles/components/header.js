import styled from 'styled-components'

export const HeaderStyled = styled.header`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 2rem;
  align-items: center;
`

export const AvatarStyled = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: default;
  user-select: none;
`
