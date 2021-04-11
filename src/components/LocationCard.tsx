import { Flex, VStack, Text } from '@chakra-ui/react'
import { AiFillPushpin, AiFillEnvironment, AiFillPhone } from 'react-icons/ai'

export default function LocationCard({ country, address, phone, lightBorder = false }) {
  return (
    <Flex borderTop="4px" borderColor={lightBorder ? 'gray.700' : 'gray.700'} borderRadius="md" boxShadow="md" p="4">
      <VStack w="full" align="start" spacing="3" fontSize="sm">
        <Flex justify="center" align="center">
          <div>
            <AiFillPushpin size={24} color="#6c757d" />
          </div>
          <Text pl="2">{country}</Text>
        </Flex>
        <Flex justify="center" align="center">
          <div>
            <AiFillEnvironment size={24} color="#6c757d" />
          </div>
          <Text pl="2">{address}</Text>
        </Flex>
        <Flex justify="center" align="center">
          <div>
            <AiFillPhone size={24} color="#6c757d" />
          </div>
          <Text pl="2">{phone}</Text>
        </Flex>
      </VStack>
    </Flex>
  )
}
