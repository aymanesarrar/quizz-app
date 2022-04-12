import {ChakraProvider} from '@chakra-ui/react'
import {extendTheme} from '@chakra-ui/react'
import "@fontsource/poppins";

const colors = {
  brand: {
    900: '#2F527B', // titles
    800: '#6066D0', // text choices
    700: '#ffffff', // bg
    600: '#F9A826', // hover choice
    500: '#1D355D', // win title
    400: '#EA8282', // false
    300: '#60BF88' // true
  }
}
const fonts = {
  heading: 'Open Sans, sans-serif',
  body: 'Poppins, sans-serif',
}
const theme = extendTheme({colors, fonts});
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
