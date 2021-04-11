import { Flex, VStack, Text, Container, Image, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TeamCard from '../components/TeamCard'
export default function Team() {
  return (
    <div>
      <Head>
        <title>Greyspace Consulting Group | Our Team</title>
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
          <Container maxW={{ base: 'container.md', xl: 'container.lg' }} pb="8">
            <Text
              borderBottom="4px"
              textAlign="center"
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="semibold"
              pb="4"
              borderStyle="double"
              // borderColor="blue.600"
            >
              NOSSA EQUIPE
            </Text>

            <Image
              mt="8"
              src="images/our-team.png"
              objectFit="cover"
              objectPosition="top"
              alt="our team"
              border="4px"
              p="1"
              borderStyle="double"
              borderColor="gray.300"
            />

            <Text
              mt="8"
              textAlign="center"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              A diversidade é um elemento fundamental para nós
            </Text>

            <Text mt="2" fontSize={{ base: 'md', md: 'lg' }} textAlign="center">
              Nossa consultoria é formada por especialistas de diversas faixas
              etárias, grupos étnicos e nacionalidades. A inclusão nos ajuda a
              crescer.
            </Text>

            <Box
              mt="8"
              ml="auto"
              mr="auto"
              borderBottom="2px"
              borderStyle="solid"
              maxW="container.sm"
              borderColor="gray.400"
              w="full"
            />

            <TeamCard
              index={1}
              profilePath="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              name="Bruna Luiza de Oliveira"
              position="Presidente e especialista em segurança e negociação"
              description="Graduada em Relações Internacionais pelo Centro Universitário de Brasília. Trabalhou durante muitos anos junto a organizações da sociedade civil da área socioambiental, sendo que durante 3 anos foi diretora de parcerias e advocacy do EngajaMundo. Durante esse período realizou um MBA em Negociação Internacional pela International Business School em Londres. Possui mestrado em Gestão de Conflitos Interculturais pela Alice Salomon University of Applied Sciences, em Berlim, Alemanha. Atuou como oficial de Gênero e Raça no Escritório das Nações Unidas sobre Drogas e Crimes - UNODC, terminando seu doutorado em Gestão integrada de conflitos: mediação, segurança e Coexistência direcionado ao conflito de Drogas e criminologia pela Pegasus University of Italy."
            />
            <TeamCard
              index={2}
              profilePath="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              name="Karoline Ferreira"
              position="Diretora executiva e especialista em meio ambiente"
              description="Graduada em Relações Internacionais pelo Centro Universitário de Brasília. Possui mestrado em Gestão Internacional com ênfase na Gestão Ambiental pela Steinbeis University Berlin. É PhD em Ciência Ambiental, Política e Gestão pela Hong Kong University of Science and Technology. Participou do Programa de Doutoramento Internacional para a Ciência e Tecnologia Ambiental da National Central University, em Taiwan. Já realizou trabalhos para o Programa das Nações Unidas para o Meio Ambiente (PNUMA) e outras ONGs ambientais, como a WWF e a SOS Mata Atlântica. Desde 2010 atua como Diretora Executiva e é a principal especialista em meio ambiente e políticas ambientais da GreySpace Consulting Group."
            />
            <TeamCard
              index={3}
              profilePath="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              name="Luis Pedro Linhares"
              position="Analista sênior em políticas públicas"
              description="Graduado em Relações Internacionais pelo Centro Universitário de Brasília. Possui mestrado em Políticas Públicas pelo Science Politique Paris e mestrado em Future Studies pela Universidade de Turku na Finlândia. Seu doutorado é em Direito Europeu pelo Instituto Universitário Europeu na Itália. Realizou trabalhos na Comissão Europeia, como especialista técnico nas reformas estruturais dos Estados-Membros, além de ter sido professor de Relações Internacionais na Brussels School of Governance. Luis Pedro é analista sênior da GreySpace desde 2010, com foco em políticas públicas."
            />
            <TeamCard
              index={4}
              profilePath="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              name="Maria Eduarda Freitas"
              position="Especialista em gestão pública e política nacional"
              description=""
            />
            <TeamCard
              index={5}
              profilePath="https://consultoria279.webnode.com/_files/200000015-8157b8157d/450/WhatsApp%20Image%202021-04-09%20at%2011.17.12.png"
              name="Joe"
              position="Inteligência Artificial"
              description="Buscando atender às novas demandas tecnológicas, Joe é integrante da GreySpace Group desde 2018. Joe é um assistente responsável pela análise e monitoramento de dados, especialmente na área ambiental. Conta também com um software que capta as informações dos diários oficiais e principais veículos de imprensa dos países, auxiliando o nosso departamento de risco país. O Joe é uma Inteligência Artificial que nos ajuda a potencializar os resultados, aumentar a produtividade e economizar tempo. A partir dos dados captados, essa tecnologia de ponta fornece mais informações para que os experts da consultoria tenham mais precisão em suas análises, ao determinar os caminhos que a empresa e os clientes devem seguir de acordo com os serviços e produtos solicitados."
            />
            <TeamCard
              index={6}
              profilePath="https://consultoria279.webnode.com/_files/200000026-82f8882f8b/450/pessoa%201-0.PNG"
              name="Yuki Hamaguchi"
              position="Diretora Administrativa e analista para a Ásia e Oceania"
              description="Graduada em história pela Franklin & Marshall College. Possui mestrado em Política e Negócios Internacionais pela Georgetown University's Walsh School of Foreign Service and McDonough School of Business.  Em seu trabalho, Yuki cobre a análise dos principais países da Ásia e da Oceania, incluindo Índia, Paquistão, China, Japão, Austrália e Nova Zelândia. Yuki trabalha na filial da GreySpace em Tóquio, além de ajudar na administração da filial em Sydney."
            />
            <TeamCard
              index={7}
              profilePath="https://consultoria279.webnode.com/_files/200000027-b0210b0212/450/pessoa%202.PNG"
              name="Karen Davis"
              position="Diretora Administrativa e analista para as Américas"
              description="Possui mestrado em ciências políticas pela University of California, San Diego, e bacharelado pelo Grinnell College. Sua pesquisa enfoca estudos comparativos de eleições nacionais, tanto na América Latina quanto na América do Norte. Karen também realizou análises para orientar nossos clientes sobre as consequências e impactos da pandemia mundial de coronavírus. Karen ajuda a administrar as filiais da GreySpace em Washington DC e em Montreal."
            />
            <TeamCard
              index={8}
              profilePath="https://consultoria279.webnode.com/_files/200000028-1193311936/450/pessoa%203-9.PNG"
              name="Anna Herberts"
              position="Diretora Administrativa e analista para a Europa"
              description="Possui mestrado pela Columbia University e pela London School of Economics and Political Science. Anna lidera e supervisiona o trabalho de análise e consultoria da empresa na Europa, ajudando os clientes a navegar na macropolítica da região e as interações entre os Estados em uma ampla gama de áreas políticas. Isso inclui relações Reino Unido-UE e a política climática da UE. Anna trabalha na filial da GreySpace em Londres."
            />
            <TeamCard
              index={9}
              profilePath="https://consultoria279.webnode.com/_files/200000029-1dc981dc9b/450/pessoa%204.PNG"
              name="Brennan Kazan"
              position="Diretor Administrativo e analista para o Oriente Médio e África"
              description="Formado em International Business pela Universidade de Shiraz. Possui mestrado em Conflitos no Oriente Médio pela University of Groningen e doutorado em Estudos Africanos e Representações na África pela University of Johannesburg. Brennan trabalha em estreita colaboração com empresas e investidores de todo o mundo para ajudá-los a compreender, antecipar e planejar mudanças geopolíticas nas regiões do Oriente Médio e África. Brennan atua na filial da GreySpace em Teerã."
            />
          </Container>
        </VStack>

        <Footer />
      </div>
    </div>
  )
}
