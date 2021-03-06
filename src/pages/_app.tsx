import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }) => {
  const theme = {
    styles: {
      global: {
        html: {
          // overflowX: 'hidden',
          // marginRight: 'calc(-1 * (100vw - 100%))'
          height: '100%'
        },
        body: {
          fontFamily: 'Poppins',
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

export default appWithTranslation(MyApp)
