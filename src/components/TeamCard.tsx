import {
  Box,
  Flex,
  Image,
  Text,
  Container,
  Divider,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

// let instanceCount = 0

export default function TeamCard({
  index = 0,
  profilePath,
  name,
  position,
  description
}) {
  return (
    <Flex flexDir="column" align="center">
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        mt="8"
        w="full"
      >
        <GridItem colSpan={{ base: 2, md: 1 }} ml="auto" mr="auto">
          <Box
            // mr="8"
            width={{ base: '150px', md: '200px' }}
            height={{ base: '150px', md: '200px' }}
            alignContent="center"
            justifyContent="center"
          >
            <Image
              src={profilePath}
              borderRadius="full"
              objectFit="cover"
              objectPosition="center"
              alt="profile"
              width={{ base: '150px', md: '200px' }}
              height={{ base: '150px', md: '200px' }}
              border="4px"
              p="1"
              borderStyle={index % 2 === 0 ? 'inset' : 'outset'}
              borderColor="gray.300"
            />
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Flex flexDir="column">
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="medium"
              textAlign={{ base: 'center', md: 'start' }}
            >
              {name}
            </Text>
            <Text
              fontSize="md"
              fontWeight="light"
              color="gray.600"
              textAlign={{ base: 'center', md: 'start' }}
            >
              {position}
            </Text>
            <Text mt="4" textAlign="justify" lineHeight="8">
              {description}
            </Text>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt="8" maxW="container.sm" />
    </Flex>
  )
}
