
import { ChakraProvider } from "@chakra-ui/react";
//import '../styles/default.css';

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme()

function MyApp({ Component, pageProps }) {

  return (
  <ChakraProvider theme={theme} >
  <Component {...pageProps} />
</ChakraProvider>
  )
}
export default MyApp
