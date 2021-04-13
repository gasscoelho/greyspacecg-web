import { Flex, VStack, Text, Container, Divider, Box } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Title({ title }) {
  const router = useRouter()

  return (
    <Text
      mt="8"
      textAlign={router.locale === 'fa-IR' ? 'end' : 'start'}
      fontSize={{ base: 'xl', md: '2xl' }}
      fontWeight="semibold"
    >
      {title}
    </Text>
  )
}

function Description({ desc }) {
  const router = useRouter()
  1
  return (
    <Text
      mt="2"
      fontSize={{ base: 'md', md: 'lg' }}
      lineHeight="8"
      textAlign={router.locale === 'fa-IR' ? 'end' : 'justify'}
    >
      {desc}
    </Text>
  )
}

export default function About() {
  const { t } = useTranslation('about')

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
          <Container maxW={{ base: 'container.md', xl: 'container.lg' }} pb="8">
            <Text
              borderBottom="4px"
              textAlign="center"
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="semibold"
              pb="4"
              borderStyle="double"
            >
              {t('page-header')}
            </Text>

            <Title title={t('mission-title')} />

            <Description desc={t('mission-desc')} />

            <Divider my="8" />

            <Title title={t('vision-title')} />

            <Description desc={t('vision-desc')} />

            <Divider my="8" />

            <Title title={t('values-title')} />

            <Description desc={t('values-desc')} />

            <Divider my="8" />

            <Title title={t('expertise-title')} />

            <Description desc={t('expertise-desc')} />
          </Container>
        </VStack>

        <Footer />
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about']))
    }
  }
}
