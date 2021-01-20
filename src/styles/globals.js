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
  }
`
