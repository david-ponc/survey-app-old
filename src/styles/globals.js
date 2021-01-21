import { createGlobalStyle } from 'styled-components'
import { colors } from 'styles/colors'

export const GlobalStyle = createGlobalStyle`
  
  ${colors}
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Inter', system-ui, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Inter', system-ui, sans-serif;
  }
  
  button {
    outline: 0;
    cursor: pointer;
    font-size: 0.875rem;
  }
  
  h1, h2, h3
  h4, h5 {
    font-family: 'Poppins', system-ui, sans-serif;
    font-weight: 600;
  }
  
  h2 {
    font-size: 20px;
  }
  
  #__next {
    height: 100vh;
    width: 100%;
    background: var(--gray-500);
    color: var(--gray-100);
    padding: 1.5rem;
  }
`
