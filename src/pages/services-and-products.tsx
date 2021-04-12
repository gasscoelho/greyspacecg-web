import {
  Flex,
  VStack,
  Text,
  Container,
  Divider,
  Box,
  Image,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'
import ServiceInfo from '../components/ServiceInfo'

export default function ServicesProducts() {
  return (
    <div>
      <Head>
        <title>Greyspace Consulting Group | Services and Products</title>
        <link rel="icon" href="/logo-white.ico" />
      </Head>

      <div>
        <Flex background="white" boxShadow="md">
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
              NOSSOS SERVIÇOS E PRODUTOS
            </Text>

            <Text
              my="8"
              fontSize={{ base: 'xl', md: '3xl' }}
              textAlign="center"
              w="full"
              fontWeight="semibold"
            >
              Serviços
            </Text>

            <ServiceInfo
              name="Notificação: NewsGrey Plus"
              description="Transmissão em primeira mão de atualizações que implicam diretamente nos assuntos dos clientes."
              iconPath="/images/notification-icon.svg"
            >
              <List spacing={3} mt="3">
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    mt="3px"
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Análise detalhada e acompanhamento dos desdobramentos,
                  implicações e possíveis impactos para o cliente, baseados em
                  seus interesses.
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Acompanhamos, analisamos e transmitimos:
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  ml="9"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Novas decisões políticas e legislações;
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  ml="9"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Publicações no diário oficial;
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  ml="9"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Debates contemporâneos do Executivo, Legislativo e Judiciário;
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  ml="9"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Movimentação de entes privados.
                </ListItem>
              </List>
            </ServiceInfo>

            <Divider my="8" />

            <ServiceInfo
              mt="8"
              name="Gestão de crise"
              description="Oferecemos um serviço para auxiliar o cliente em um momento de grande vulnerabilidade de forma ágil, através do monitoramento e planejamento:"
              iconPath="/images/connectivity-icon.svg"
            >
              <List spacing={3} mt="3">
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    mt="3px"
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Monitoramento de conteúdos negativos e sensíveis à marca e
                  suas repercussões, incluindo fake news;
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Identificação do aspecto e desalinhamento causador da crise
                  possibilitando correção das eventuais falhas;
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Plano de contingência para situação de emergência, incluindo
                  ações direcionados para o público interno;
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Facilitação de parcerias nacionais e internacionais para
                  combate à crise;
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Monitoramento do período pós-crise;
                </ListItem>
              </List>
            </ServiceInfo>

            <Divider my="8" />

            <ServiceInfo
              mt="8"
              name="Workshop"
              description=""
              iconPath="/images/puzzle-icon.svg"
            >
              <List spacing={3} mt="3">
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    mt="3px"
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Compartilhamento de ferramentas e metodologias que capacitam
                  gestores e seus associados a entender e antecipar impactos no
                  desenvolvimento político de seus negócios;
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Criação de uma rede de networking entre atores internacionais,
                  nacionais e subnacionais, objetivando trocas de expertise,
                  melhores práticas, projetos e intercâmbios público-privado;
                </ListItem>
              </List>
            </ServiceInfo>

            <Divider my="8" />

            <ServiceInfo
              mt="8"
              name="Captação de recursos"
              description="Ao longo da nossa história fomos capazes de construir uma relação próxima e frutífera com organizações internacionais de financiamento para projetos de desenvolvimento, como PNUD, FMI, BIRD e outros bancos. Dessa forma, nos mantemos atualizados sobre editais e outras iniciativas disponíveis, visando atuar como ponte entre nosso cliente e tais instituições:"
              iconPath="/images/pork-icon.svg"
            >
              <List spacing={3} mt="3">
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    mt="3px"
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Com intuito de facilitar a execução de projetos realizados por
                  entes nacionais e subnacionais, informamos e atualizamos
                  nossos clientes sobre editais e outros fundos de
                  financiamento;
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Orientamos nossos clientes durante todo o processo (desde a
                  construção do projeto até planejamento de gestão);
                </ListItem>
              </List>
            </ServiceInfo>

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

            <Text
              my="8"
              fontSize={{ base: 'xl', md: '3xl' }}
              textAlign="center"
              w="full"
              fontWeight="semibold"
            >
              Produtos
            </Text>

            <ServiceInfo
              mt="8"
              name="Mapa de risco por país"
              description="Análise de mais de 120 países, entre grandes, médias e pequenas economias."
              iconPath="/images/world-icon.svg"
            >
              <List spacing={3} mt="3">
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    mt="3px"
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Perfil por países através do exame das seguintes categorias e
                  estabelecendo notas de 0 a 10 para avaliar o desempenho dos
                  países, tendo como referência as sugestões feitas por órgãos
                  internacionais:
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                    ml="9"
                  />
                  Padrões da política nacional: populismo, ações governamentais
                  adversas ou não (reforma estrutural, políticas ambiental),
                  atuação da sociedade civil e outros órgãos não governamentais;
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                    ml="9"
                  />
                  Perfis dos principais membros do Executivo, Legislativo e
                  Judiciário: sempre que há alguma mudança no quadro de
                  liderança, nossa equipe elabora um perfil histórico do novo
                  candidato/indivíduo incluindo; principais posicionamentos e
                  atuações políticas; maiores realizações; alinhamento e apoio
                  com outras figuras políticas. A fim que nossos clientes possam
                  oferecer previsibilidade;
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                    ml="9"
                  />
                  Questões transacionais como: comércio, segurança, mudanças
                  climáticas e questões ambientais, segurança cibernética,
                  movimentos sociais e saúde global - com o auxílio do Joe,
                  conseguimos indicar os números do crescimento da COVID-19 e
                  mapear as melhores políticas implementadas pelos países ao
                  longo do tempo;
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Oferecemos ainda uma análise mais acurada para aqueles
                  clientes que possuem interesse específico no Brasil.
                  Analisamos o cenário brasileiro e como ele se insere dentro de
                  um contexto internacional e como foram as respostas ao mesmo
                  problema comparada a outros países:
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                    ml="9"
                  />
                  Pesquisas sobre a implementação das políticas públicas dos
                  países e sua devida adaptação à realidade brasileira.
                </ListItem>
              </List>
            </ServiceInfo>

            <Divider my="8" />

            <ServiceInfo
              mt="8"
              name="Superintendence consultancy"
              description=""
              iconPath="/images/sign-icon.svg"
            >
              <List spacing={3} mt="3">
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    mt="3px"
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Com base em nossas análises, auxiliamos nossos clientes a
                  desenvolver e planejar suas estratégias de atuação, ampliando
                  os horizontes e introduzindo novas formas de realizar os
                  processos empresariais. Nosso objetivo é prever, a partir de
                  uma série de dados e metodologias próprias, tendências futuras
                  que servirão de guia para nossos clientes:
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                    ml="9"
                  />
                  Planejamento de cenários, conectando os pontos entre o
                  ambiente interno e externo, bem como as implicações tangíveis
                  e compromissos de dimensionamento de políticas;
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                    ml="9"
                  />
                  Vinculação dos riscos externos específicos e pertinentes para
                  desenvolver métricas individuais de monitoramento de riscos,
                  bem como seus níveis, impulsionando o desempenho em médio e
                  longo prazo;
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                    ml="9"
                  />
                  Monitoramento de riscos e vulnerabilidades, bem como previsão
                  de contingenciamento personalizado por empresas;
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                  />
                  Quando pertinente e necessário ao cliente realizamos uma
                  análise ambiental detalhada:
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <ListIcon
                    as={HiOutlineChevronDoubleRight}
                    width="22px"
                    height="22px"
                    mr="4"
                    ml="9"
                  />
                  Análise de leis, políticas públicas, avanços e retrocessos na
                  política ambiental de países relevantes em cada continente,
                  bem como os riscos ambientais relacionados;
                </ListItem>
              </List>
            </ServiceInfo>
          </Container>
        </VStack>

        <Footer />
      </div>
    </div>
  )
}
