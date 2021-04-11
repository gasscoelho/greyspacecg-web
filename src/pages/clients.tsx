import { Flex, VStack, Text, Container, Box, Divider } from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'
import Footer from '../components/Footer'
import QuoteBlock from '../components/QuoteBlock'

export default function Clients() {
  return (
    <div>
      <Head>
        <title>Greyspace Consulting Group | Our Clients</title>
        <link rel="icon" href="/logo-white.ico" />
      </Head>

      <div>
        <Flex background="white" boxShadow="md">
          <Header invertColors />
        </Flex>

        <VStack mt="8" w="full" pb="150px">
          <Container
            maxW={{
              base: 'container.md',
              xl: 'container.lg'
            }}
            pb="8"
          >
            <Text
              borderBottom="4px"
              textAlign="center"
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="semibold"
              borderStyle="double"
              pb="4"
            >
              NOSSOS CLIENTES
            </Text>

            <Text
              mt="8"
              textAlign="center"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              Com quem trabalhamos
            </Text>

            <VStack mt="4" align="start">
              <Flex alignItems="center" justifyContent="center">
                <Box>
                  <HiOutlineChevronDoubleRight size={22} />
                </Box>
                <Text ml="4">Países, cidades e municípios </Text>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Box>
                  <HiOutlineChevronDoubleRight size={22} />
                </Box>
                <Text ml="4">Organizações Não Governamentais (ONGs)</Text>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Box>
                  <HiOutlineChevronDoubleRight size={22} />
                </Box>
                <Text ml="4">Grupos da sociedade civil</Text>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Box>
                  <HiOutlineChevronDoubleRight size={22} />
                </Box>
                <Text ml="4">Empresas públicas e privadas</Text>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Box>
                  <HiOutlineChevronDoubleRight size={22} />
                </Box>
                <Text ml="4">Empreendedores</Text>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Box>
                  <HiOutlineChevronDoubleRight size={22} />
                </Box>
                <Text ml="4">Entidades associativas</Text>
              </Flex>
            </VStack>

            <Divider mt="8" />

            <Text
              mt="8"
              textAlign="center"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              Depoimentos sobre a GreySpace
            </Text>

            <Text mt="2" fontSize={{ base: 'md', md: 'lg' }} textAlign="center">
              Prezamos pela privacidade dos nossos clientes.
            </Text>
          </Container>

          <QuoteBlock
            index={1}
            author=""
            label="Prefeito de município brasileiro"
            quote={`Procurei a GreySpace em busca de orientação para um projeto que envolvia compras públicas. A equipe da consultoria foi extremamente atenciosa e nos apresentou o conceito de paradiplomacia, nos guiando durante todo o processo que foi fundamental para realizarmos as compras que necessitávamos.`}
          />
          <QuoteBlock
            index={2}
            author=""
            label="Empresário da área de materiais de construção"
            quote={`Somos uma empresa australiana do ramo petroquímico, produtora de resinas termoplásticas. Com o objetivo de entrar no mercado americano,  consultamos a GreySpace para fazer uma análise ambiental abrangente sobre os Estados Unidos, focada nos riscos políticos que poderíamos encontrar no país. A partir da análise feita pela empresa nos deu mais confiança e nosso projeto de abrir uma filial estrangeira foi bem sucedido.`}
          />
          <QuoteBlock
            index={3}
            author=""
            label="CEO de empresa da área de TI"
            quote={`A pandemia causada pela Covid-19 afetou consideravelmente a forma como nos comunicamos, trabalhamos e estudamos. Levando esse contexto em consideração e buscando desenvolver nossa empresa para nos adequarmos às novas demandas, entramos em contato com a GreySpace e adquirimos o "Country Risk Profiles", com interesse na análise sobre segurança cibernética. O resultado foi muito satisfatório e serviu de base para a criação de um plano de estratégias para nossa empresa nos próximos anos.`}
          />
        </VStack>
        <Footer />
      </div>
    </div>
  )
}
