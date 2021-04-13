import { Flex, VStack, Text, Container, Divider, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Content({ title, description }) {
  return (
    <Box mb="8">
      <Text
        mt="8"
        textAlign="start"
        fontSize={{ base: 'xl', md: '2xl' }}
        fontWeight="semibold"
      >
        {title}
      </Text>
      <Text mt="2" fontSize={{ base: 'md', md: 'lg' }} lineHeight="8">
        {description}
      </Text>
    </Box>
  )
}

export default function Cases() {
  return (
    <div>
      <Head>
        <title>Greyspace Consulting Group | Cases</title>
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
              ESTUDOS DE CASO
            </Text>

            <Text
              my="8"
              fontSize={{ base: 'xl', md: '3xl' }}
              textAlign="center"
              w="full"
              fontWeight="semibold"
            >
              Abordagens alternativas ao combate às drogas
            </Text>

            <Content
              title="O desafio"
              description="Um Estado, preocupado com o aumento de suas despesas direcionadas a guerra às drogas e a criminalidade relacionada ao tráfico, juntamente com os baixos resultados de contingenciamento dessa questão, procurou a consultoria de forma a visualizar novas abordagens e soluções, visando diminuir os gastos governamentais e a arrecadação do narcotráfico, diminuir as desigualdades sociais no tratamento jurídico e criminal e adotar uma política mais respeitosa em todos os âmbitos sociais."
            />

            <Divider my="8" />

            <Content
              title="A abordagem"
              description={[
                'A análise foi dividida em três abordagens principais relacionadas ao regime de drogas cada um com sua subdivisão: proibicionismo, que consiste da restrição total de todas as atividades envolvendo substâncias entorpecentes, nessa parte nos atemos apenas em entender as regras internacionais e o contexto específico do cliente; descriminalização, relacionada a despenalização do uso dessas substâncias, subdividido nos modelos descarcerizador, descriminalizador e sui generis e; a legalização, ou seja, a liberalização do comércio e uso de determinadas substâncias, analisada no campo medicinal e de uso adulto. A questão da redução de danos foi transversal em todo o estudo.',
                <br></br>,
                <br></br>,
                'Para tanto, usamos como base as melhores práticas adotadas em países que já aplicam tais modelos alternativos. Foram analisados os casos práticos relacionados ao modelo descriminalizador de Portugal (referência no tratamento de usuários e extremamente abrangente na quantidade de substâncias) e Holanda (que possui um modelo específico adotado somente no país, o sui generis, permitindo a comercialização e arrecadação do Estado mesmo mantendo o status de ilegal das substâncias). Para o último modelo, analisamos legislações aplicadas no Uruguai (que realizou um legalização através do controle do Estado) e de alguns estados dos Estados Unidos da América (que contrariamente ao anterior, realizou o controle baseado em regras de mercado).'
              ]}
            />

            <Divider my="8" />

            <Content
              title="O resultado"
              description={[
                'O maior desafio foi oferecer uma alternativa que não se contrapusesse às regras internacionais das quais o Estado é signatário, bem como uma abordagem que respondesse às necessidades específicas daquele país. Dessa forma, visto que que cada substância entorpecente têm impactos sociais, sanitários e financeiros distintos, optamos em direcionar o estudo para aquela que representava menores danos sociais e maior quantidade de apreensão, a cannabis, paralelamente essa substância representa uma alternativa de tratamento de diversas doenças.',
                <br></br>,
                <br></br>,
                'A Grey Space, entende que essa questão é extremamente delicada e deve ser pensada de maneira holística. Dessa forma, facilitamos o encontro de diversos atores envolvidos nessa questão, instituições governamentais securitárias, financeiras e sanitárias, organizações da sociedade civil (contra e favoráveis a adoção de um modelo alternativo), representantes dos diversos grupos afetados (toxicodependentes, pacientes de doenças tratáveis com cannabis, comunidades tradicionais afetadas entre outros) e representantes de organizações internacionais relacionadas. Os encontros coordenados e orientados pela GreySpace resultaram em um relatório entregue ao Estado que, por meio de nossas análises, conseguiu diminuir consideravelmente seus gastos governamentais com o combate às drogas. '
              ]}
            />

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
              Estudo para o uso de energia renovável em prédios públicos
            </Text>

            <Content
              title="O desafio"
              description="Um Estado preocupado com o impacto do uso de fontes de energia não renováveis procura uma solução que atenda às suas necessidades, diminuindo as contas a longo prazo."
            />

            <Divider my="8" />

            <Content
              title="A Abordagem"
              description="Nosso time especialista em meio ambiente fez uma primeira análise, prevendo os resultados futuros da utilização de energia solar em prédios públicos. Foi levado em consideração a funcionalidade além do valor de instalação. Para que houvesse precisão nos dados, o primeiro passo foi listar todas as propriedades que seriam atingidas pelo projeto de energia renovável. Criando grupos de prioridade e possível ordem de instalação. Posteriormente, nossos analistas elaboraram um relatório dos custos iniciais, a partir de um estudo realizado entre diferentes empresas de fornecimento do material necessário, prevendo em quanto tempo o valor inicial investido se transformaria em economia para o governo."
            />

            <Divider my="8" />

            <Content
              title="O resultado"
              description="O maior desafio da instalação de material para captação de energia solar nos prédios públicos é o gasto inicial. Assim, a Grey Space apresentou um relatório de perspectiva de longo prazo (10 anos) para transformar a energia de todos esses prédios. Dessa forma, o impacto econômico inicial é minimizado e a instalação pode ser feita de maneira estratégica. A Grey Space elaborou um relatório entregue ao Estado que, por meio de nossas análises, iniciou o processo de mudança para a energia solar e vem seguindo o calendário de instalação visando melhorar a relação com o meio ambiente, diminuindo o impacto negativo do Estado neste e, claro, melhorando a economia da região."
            />

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
              Country Risk Profile: análise do impacto da COVID-19 na segurança
              cibernética
            </Text>

            <Content
              title="O desafio"
              description="Surge a necessidade de uma empresa de TI de encomendar um relatório de análise de risco em seus países de interesse para melhor entender o impacto da COVID-19 na segurança cibernética devido à mudança na maneira em que trabalhamos e nos comunicamos."
            />

            <Divider my="8" />

            <Content
              title="A Abordagem"
              description="Após algumas reuniões foram delineadas alguns aspectos importantes para o relatório, de acordo com as necessidades do cliente. Montamos um grupo de trabalho com analistas selecionados para que cada uma das necessidades previamente apresentadas fosse sanada. Foram feitas pesquisas de políticas públicas de cada país, gerenciadas pelo especialista da área geográfica, chegando a um relatório final que visa auxiliar o cliente em uma nova estratégia de atuação."
            />

            <Divider my="8" />

            <Content
              title="O resultado"
              description="A GreySpace entregou um relatório completo e preciso, que foi o guia para o nosso cliente no momento da pandemia. A partir dele foi possível minimizar os riscos apresentados pela COVID-19 e a empresa continua o utilizando de base para seus novos passos. O relatório foi feito de acordo com as necessidades específicas do cliente e não será divulgado em nosso site para manter a privacidade do mesmo."
            />
          </Container>
        </VStack>

        <Footer />
      </div>
    </div>
  )
}
