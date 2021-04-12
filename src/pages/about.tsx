import { Flex, VStack, Text, Container, Divider, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function About() {
  return (
    <div>
      <Head>
        <title>Greyspace Consulting Group | About</title>
        <link rel="icon" href="/logo-white.ico" />
      </Head>

      <div>
        <Flex
          // backgroundImage={'url(images/compressed.jpg)'}
          // backgroundSize={'cover'}
          // backgroundPosition={'top'}
          background="white"
          boxShadow="md"
        >
          <Header invertColors />
        </Flex>

        <VStack mt="8" w="full" pb="150px">
          <Container
            maxW={{ base: 'container.md', xl: 'container.lg' }}
            pb="8"
            textAlign="justify"
          >
            <Text
              borderBottom="4px"
              textAlign="center"
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="semibold"
              pb="4"
              borderStyle="double"
            >
              SOBRE A GREYSPACE
            </Text>

            <Text
              mt="8"
              textAlign="start"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              NOSSA MISSÃO
            </Text>
            <Text mt="2" fontSize={{ base: 'md', md: 'lg' }} lineHeight="8">
              Desenvolver e produzir análises abrangentes e precisas do cenário
              político nacional e internacional sem se limitar pelo simplismo do
              mercado. Oferecendo soluções de forma holística para problemas
              políticos complexos de forma efetiva, buscando inserir a
              sustentabilidade em todos os aspectos do nosso trabalho.
            </Text>

            <Divider my="8" />

            <Text
              mt="8"
              textAlign="start"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              NOSSA VISÃO
            </Text>
            <Text mt="2" fontSize={{ base: 'md', md: 'lg' }} lineHeight="8">
              Ser referência em análises da política mundial fazendo uso de
              abordagens multidisciplinares e inovadoras, melhorando o
              desempenho de nossos clientes. Oferecer aos nossos clientes uma
              experiência única em cada interação com nosso time e no uso dos
              nossos métodos.
            </Text>

            <Divider my="8" />

            <Text
              mt="8"
              textAlign="start"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              NOSSOS VALORES
            </Text>
            <Text mt="2" fontSize={{ base: 'md', md: 'lg' }} lineHeight="8">
              Inclusão, diversidade, acessibilidade, privacidade, inovação,
              liderança, responsabilidade, integridade, colaboração,
              sustentabilidade e comprometimento.
            </Text>

            <Divider my="8" />

            <Text
              mt="8"
              textAlign="start"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              NOSSA EXPERTISE
            </Text>
            <Text mt="2" fontSize={{ base: 'md', md: 'lg' }} lineHeight="8">
              Nosso time de especialistas em política internacional consegue
              unir, dimensionar e construir soluções eficazes e de impacto, que
              atendem desde entes subnacionais até países de destaque no cenário
              internacional. Atuando de forma única, a{' '}
              <b>GreySpace Consulting Group</b> consegue solucionar problemas
              dos entes públicos e privados, através de uma análise comparada,
              que combina interdisciplinaridade, políticas internacionais,
              sistematização abrangente e metodologias qualitativas e
              quantitativas, em cooperação com uma rica base de dados através de
              uma inteligência artificial de ponta: nosso querido Joe. Nesse
              mundo, nos propomos a entregar os melhores resultados a partir de
              uma análise detalhista, sigilosa e especializada.
            </Text>
          </Container>
        </VStack>

        <Footer />
      </div>
    </div>
  )
}
