import { ChakraProvider, extendTheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  const theme = {
    styles: {
      global: {
        html: {
          // overflowX: 'hidden',
          // marginRight: 'calc(-1 * (100vw - 100%))'
          height: '100%'
        },
        body: {
          fontFamily: 'poppins',
          minHeight: '100%'
        }
      }
    }
  }
  const customTheme = extendTheme(theme)
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
