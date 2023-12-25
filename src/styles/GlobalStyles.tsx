import { createGlobalStyle } from 'styled-components'
import { myTheme } from './ThemeStyled'

export const GlobalStyles = createGlobalStyle`
*::before,
*::after{
  margin: 0;
padding: 0;
box-sizing: border-box;
}

body{
  background:   linear-gradient(225deg, rgb(4, 13, 32) 24%, rgb(29, 32, 16) 57%, rgb(0, 0, 19) 100%);
  margin: 0 auto;
  list-style: none;
  background-size: cover no-repeat;
}

a{
  color: rgba(255, 255, 253, 0.72);
  text-decoration: none;
  &:hover{
  color: ${myTheme.colors.white};
}
}

#primary{
  color: ${myTheme.colors.primary};
}
`
