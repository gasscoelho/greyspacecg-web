import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Input,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'
import { GoLocation } from 'react-icons/go'
import { AiFillEnvironment, AiFillPushpin, AiFillPhone } from 'react-icons/ai'
import NavBarContainer from '../components/NavbarContainer'
import LocationCard from '../components/LocationCard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Greyspace Consulting Group</title>
        <link rel="icon" href="/logo-white.ico" />
      </Head>

      <main>
        {/* Hero */}
        <Flex
          w="full"
          h="auto"
          minHeight="85vh"
          backgroundImage={'url(images/compressed.jpg)'}
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
          position="relative"
        >
          <VStack w="full">
            {/* <NavBarContainer>MENU</NavBarContainer> */}
            <Header />
            <Center flexDir="column" height="full" textAlign="center">
              <Text
                color={'white'}
                fontSize={{ base: '2xl', md: '5xl' }}
                marginTop={{ base: '0', md: '-8rem !important' }}
                borderBottom="4px"
                borderTop="4px"
                p="2"
                mb="4"
                borderStyle="double"
              >
                GREYSPACE CONSULTING GROUP
              </Text>
              <Text
                color={'white'}
                fontSize={{ base: 'lg', md: '2xl' }}
                fontWeight={'normal'}
                pb="4"
              >
                VÁ ALÉM. PENSE GREY.
              </Text>
            </Center>
          </VStack>
        </Flex>

        {/* Content */}
        <VStack pb="150px" fontSize={{ base: 'md', md: 'lg' }}>
          <Container maxW={{ base: 'container.md', xl: 'container.lg' }} pb="8">
            <Text py="8" textAlign="justify">
              A GreySpace surgiu em 2010 com o objetivo de analisar o cenário
              político internacional considerando as infinitas variáveis que
              existem entre o preto e o branco: o espaço cinza. Em outras
              palavras, buscamos fugir de soluções prontas para problemas
              complexos.
            </Text>

            <Text
              fontSize={{ base: 'xl', md: '3xl' }}
              textAlign="center"
              w="full"
              fontWeight="semibold"
            >
              GreySpace ao redor do mundo
            </Text>

            <Box mt="8">
              <Image src="images/map.png" />
            </Box>

            {/*  */}
            <SimpleGrid mt="12" columns={{ sm: 2, xl: 3 }} spacing="6">
              <LocationCard
                country="Washington DC, EUA"
                address="1314 19th St NW, Washington, D.C., DC 20036, Estados Unidos"
                phone="+1 202-862-8426"
              />
              <LocationCard
                country="Londres, Reino Unido"
                address="WeWork Waterhouse Square, Building 3, 138 Holborn, London EC1N 2SW, Reino Unido"
                phone="+44 20 7936 3000"
                lightBorder
              />
              <LocationCard
                country="Montreal, Canadá"
                address="1700-2001 Boulevard Robert-Bourassa, Montréal, QC H3A 2A6, Canadá"
                phone="+1 514 462 1646"
              />
              <LocationCard
                country="Tóquio, Japão"
                address="Tokyo Square Garden 14F WeWork 3-1-1, 1 Kyobashi, Chuo City, Tokyo 104-0031, Japão"
                phone="+81 3 6262 5286"
                lightBorder
              />
              <LocationCard
                country="Sydney, Austrália"
                address="18 Jamison St, Sydney NSW 2000, Austrália"
                phone="+61 3 6242 2200"
              />
              <LocationCard
                country="Teraã, Irã"
                address="Tehran Province, Tehran, No. 96, Poor St, Malayeri, Irã"
                phone="+98 21 8882 2904"
                lightBorder
              />
            </SimpleGrid>

            <Divider mt="8" />

            <Text
              mt="8"
              textAlign="center"
              fontSize={{ base: 'xl', md: '3xl' }}
              fontWeight="semibold"
            >
              NewsGrey: inscreva-se em nossa newsletter
            </Text>

            <Text mt="2" textAlign="center">
              Receba semanalmente uma análise das notícias mais importantes no
              cenário nacional e internacional. A nossa newsletter é um
              informativo para todos que desejam ter acesso a uma pequena
              demonstração da forma Grey de compartilhar conhecimento.
            </Text>

            <Flex mt="4" flexDir={{ base: 'column', md: 'row' }}>
              <Input placeholder="Insira seu e-mail" />
              <Button
                ml={{ base: '0', md: '3' }}
                mt={{ base: '3', md: '0' }}
                background="gray.700"
                px="6"
                color="white"
                size="md"
              >
                Inscrever-se
              </Button>
            </Flex>
          </Container>
        </VStack>

        <Footer />
      </main>
    </div>
  )
}

// AiOutlineEnvironment
// GoLocation

// AiFillPushpin
// AiFillPhone
//
