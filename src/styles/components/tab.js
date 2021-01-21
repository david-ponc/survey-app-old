import styled from 'styled-components'

export const SectionStyled = styled.section`
  padding: 0 1.5rem;
  width: 100%;
  border: 1px solid var(--gray-400);
`

export const NavStyled = styled.nav`
  width: max-content;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
`

export const LinkStyled = styled.a`
  padding: 0.75rem 0;
  font-size: 0.875rem;
  cursor: pointer;
  position: relative;
  user-select: none;
  
  &::after {
    content: '';
    position: absolute;
    height: 3px;
    width: ${({ active }) => active ? '100%' : '0'};
    left: 0;
    bottom: 0;
    border-radius: 4px 4px 0 0;
    background: #456DD4;
  }
`
