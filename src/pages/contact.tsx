import {
  Flex,
  VStack,
  Text,
  Container,
  Divider,
  Box,
  Input,
  Select,
  Textarea,
  Grid,
  GridItem,
  Button
} from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {
  AiFillEnvironment,
  AiFillPhone,
  AiFillClockCircle
} from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Greyspace Consulting Group | Contact</title>
        <link rel="icon" href="/logo-white.ico" />
      </Head>

      <div>
        <Flex background="white" boxShadow="md">
          <Header invertColors />
        </Flex>

        <VStack mt="8" w="full" pb="150px">
          <Container maxW={{ base: 'container.md', xl: 'container.lg' }} pb="8">
            <Text
              borderBottom="4px"
              textAlign="center"
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="semibold"
              pb="4"
              borderStyle="double"
            >
              CONTATE-NOS
            </Text>

            <Text
              mt="8"
              textAlign="center"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              Entraremos em contato o mais breve possível
            </Text>

            <Grid
              mt="8"
              templateRows={{ base: 'auto 1fr', md: 'repeat(1, 1fr)' }}
              templateColumns={{ base: '1fr 1fr', md: '1fr auto 1fr 1fr' }}
            >
              <GridItem colSpan={1}>
                <VStack
                  spacing="4"
                  align="flex-start"
                  justifyContent={{ base: 'flex-start', md: 'center' }}
                  h="full"
                  mt={{ base: '8', md: '-4' }}
                  mb={{ base: '8', md: '0' }}
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  <Flex>
                    <Box mr="3">
                      <AiFillEnvironment size={28} />
                    </Box>
                    <Box textAlign="start">
                      <Text fontWeight="medium">Via Esplanada</Text>
                      <Text fontWeight="light">
                        SAF Sul - QD 02 Bloco D, s/n, St. de Administração
                        Federal Sul, Brasília - DF, 70070-600
                      </Text>
                    </Box>
                  </Flex>

                  <Flex>
                    <Box mr="3">
                      <AiFillClockCircle size={28} />
                    </Box>
                    <Box textAlign="start">
                      <Text fontWeight="medium">Horário de trabalho</Text>
                      <Text fontWeight="light">Segunda a Sexta: 09h - 18h</Text>
                    </Box>
                  </Flex>

                  <Flex>
                    <Box mr="3">
                      <AiFillPhone size={28} />
                    </Box>
                    <Box textAlign="start">
                      <Text fontWeight="medium">61 3456 7890</Text>
                    </Box>
                  </Flex>

                  <Flex>
                    <Box mr="3">
                      <MdEmail size={28} />
                    </Box>
                    <Box textAlign="start">
                      <Text fontWeight="medium">
                        contatogreyspace@gsgroup.com
                      </Text>
                    </Box>
                  </Flex>
                </VStack>
              </GridItem>

              <GridItem colSpan={1} display={{ base: 'none', md: 'block' }}>
                <Divider mx="4" orientation="vertical" />
              </GridItem>

              <GridItem colSpan={2}>
                <VStack alignItems="flex-start">
                  <Flex width="full" align="flex-start" flexDir="column">
                    <Text mt="2" mr="2">
                      Nome:
                    </Text>
                    <Input placeholder="Insira seu nome" size="md" />
                  </Flex>

                  <Flex width="full" align="flex-start" flexDir="column">
                    <Text mt="2" mr="2">
                      E-mail:
                    </Text>
                    <Input placeholder="Insira seu e-mail" size="md" />
                  </Flex>

                  <Flex width="full" align="flex-start" flexDir="column">
                    <Text mt="2" mr="2">
                      Serviço solicitado:
                    </Text>
                    <Select size="md">
                      <option value="option1">Serviços</option>
                      <option value="option2">Produtos</option>
                      <option value="option3">Outras informações</option>
                    </Select>
                  </Flex>

                  <Flex width="full" align="flex-start" flexDir="column">
                    <Text mt="2" mr="2">
                      Mensagem:
                    </Text>
                    <Textarea
                      placeholder="Digite sua mensagem"
                      size="md"
                      resize="vertical"
                      maxH="200"
                      height="150"
                      minH="100"
                    />
                  </Flex>

                  <Button background="gray.700" p="6" color="white" size="md">
                    Peça agora
                  </Button>
                </VStack>
              </GridItem>
            </Grid>
          </Container>
        </VStack>

        <Footer />
      </div>
    </div>
  )
}
