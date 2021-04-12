import { Flex, Container, Box, Text } from '@chakra-ui/react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

export default function QuoteBlock({ index = 0, quote, author, label }) {
  return (
    <Flex
      flexDir="column"
      w="full"
      background={index % 2 === 0 ? 'gray.300' : 'white'}
      py="8"
      marginTop="0 !important"
    >
      <Container
        maxW={{
          base: 'container.md',
          xl: 'container.lg'
        }}
      >
        <Flex>
          <Box alignItems="end">
            <ImQuotesLeft
              size={24}
              color={index % 2 === 0 ? '#000' : '#6c757d'}
            />
          </Box>
          <Text flex="1" px="4" textAlign="justify" lineHeight="8">
            {quote}
          </Text>
          <Box mt="auto">
            <ImQuotesRight
              size={24}
              color={index % 2 === 0 ? '#000' : '#6c757d'}
            />
          </Box>
        </Flex>
        <Flex flexDir="column" mt="4" pr="10" align="flex-end">
          {/* <Text fontWeight="medium">{author}</Text> */}

          <Text fontWeight="light" fontSize="sm" textAlign="end" fontStyle="italic">
            {label}
          </Text>
        </Flex>
      </Container>
    </Flex>
  )
}
