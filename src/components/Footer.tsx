import { Center, Flex, Text, Container, Box } from '@chakra-ui/react'
export default function Footer() {
  return (
    <footer>
      <Box
        position="absolute"
        bottom="0"
        // marginBottom="0"
        // right="0"
        left="0"
        p={{ base: 4, md: 8 }}
        w="full"
        h="150px"
        background="gray.100"
      >
        <Center>
          <Flex direction="column" textAlign="center">
            <Text fontSize="sm">
              Edifício Via Esplanada - SAF Sul - QD 02 Bloco D, s/n, St. de
              Administração Federal Sul, Brasília - DF, 70070-600
            </Text>

            <Container
              my="4"
              maxW="lg"
              border="1px"
              borderColor="gray.900"
              opacity="0.1"
              w="full"
            ></Container>
            <Text fontSize="xs">© 2021 Greyspace Consulting Group </Text>
          </Flex>
        </Center>
      </Box>
    </footer>
  )
}
