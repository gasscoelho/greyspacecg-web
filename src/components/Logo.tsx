import { Box, Text, Image } from '@chakra-ui/react'
import { HTMLAttributes } from 'react'

export default function Logo({ dark = false }) {
  return (
    <Box width={{ base: '70px', md: '100px' }}>
      <Image src={`images/logo-${dark ? 'white' : 'black'}.png`} />

      {/* <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text> */}
    </Box>
  )
}
