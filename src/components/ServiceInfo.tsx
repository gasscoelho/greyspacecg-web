import { Flex, Image, Text } from '@chakra-ui/react'

function ServiceInfo({ children, iconPath, name, description, ...props }) {
  return (
    <Flex {...props}>
      <Image
        src={iconPath}
        height="100px"
        mr="8"
        border="4px"
        borderRadius="full"
        p="3"
        borderStyle="dashed"
        borderColor="gray.600"
        background="gray.100"
      />

      <Flex flexDir="column" textAlign="justify">
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium">
          {name}
        </Text>
        <Text fontWeight="semibold" mb={description ? '4' : '0'}>
          {description}
        </Text>

        {children}
      </Flex>
    </Flex>
  )
}

export default ServiceInfo
