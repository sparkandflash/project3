// theme.js
import './styles/font.css';

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"
// 2. Add your color mode config
const config = {
 
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    transparent: "transparent",
    black:"#0000",
    white: "#fff",
    blue : 
    {
      50: '#e0feff',
      100: '#b6f0fb',
      200: '#8ae1f4',
      300: '#5ecfef',
      400: '#37bbe9',
      500: '#229ad0',
      600: '#1674a3',
      700: '#0b5075',
      800: '#003548',
      900: '#00151c',
    }
  },
 textStyles:{
    rubik : "Rubik",
    ubuntu : "Ubuntu",
    cairo : "Cairo"
  },
  
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  }
}
 

// 3. extend the theme
const theme = extendTheme({ config })

export default theme