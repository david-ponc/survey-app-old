import styled from 'styled-components'

export const BlocksStyled = styled.div`
  display: grid;
  gap: 1rem;
`

export const FormStyled = styled.form`
  max-width: 512px;
  width: 100%;
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
  border: 1px solid var(--gray-300);
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  margin: 0 auto;
`

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    outline: 0;
    border: 0;
    border-radius: 0.375rem;
    padding: 0.375rem;
    font-size: 1.125rem;
    font-weight: 600;
    font-family: 'Poppins', system-ui, sans-serif;

    &:hover,
    &:focus {
      box-shadow: 0 0 0 1px var(--gray-300);
    }
  }
`

export const SectionStyled = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1rem;
  
  textarea {
    outline: 0;
    border: 1px solid var(--gray-300);
    border-radius: 0.375rem;
    resize: none;
    width: 100%;
    height: 100%;
    padding: 1em;
    font-size: 0.875rem;
  }
`

export const RadioStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;

  &:hover svg:nth-child(3) {
    z-index: 0;
    color: var(--gray-200);
  }
  
  input {
    outline: 0;
    border: 0;
    border-radius: 0.375rem;
    padding: 1em;
    font-size: 0.875rem;
    transition: border 0.320s ease;
    
    &:hover,
    &:focus {
      box-shadow: 0 0 0 1px var(--gray-300);
    }
  }
  
  svg:nth-child(1) {
    color: var(--gray-200);
  }

  svg:nth-child(3) {
    position: relative;
    z-index: -1;
    color: transparent;
    cursor: pointer;
    
    &:hover {
      color: darkred;
    }
  }
`

export const AddOptionStyled = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0 0;
  border-radius: 1rem;
  padding: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  user-select: none;
  
  svg {
    color: #456DD4;
  }
  
  &:hover {
    background: var(--gray-300);
  }
`

export const AddBlockStyled = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem auto 0;
  border-radius: 1rem;
  padding: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  user-select: none;

  svg {
    color: #456DD4;
  }

  &:hover {
    background: var(--gray-300);
  }
`
