import { Flex, VStack, Text, Container, Divider, Box } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

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
              {t('page-header')}
            </Text>

            <Text
              mt="8"
              textAlign="start"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              {t('mission-title')}
            </Text>
            <Text mt="2" fontSize={{ base: 'md', md: 'lg' }} lineHeight="8">
              {t('mission-desc')}
            </Text>

            <Divider my="8" />

            <Text
              mt="8"
              textAlign="start"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              {t('vision-title')}
            </Text>
            <Text mt="2" fontSize={{ base: 'md', md: 'lg' }} lineHeight="8">
              {t('vision-desc')}
            </Text>

            <Divider my="8" />

            <Text
              mt="8"
              textAlign="start"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              {t('values-title')}
            </Text>
            <Text mt="2" fontSize={{ base: 'md', md: 'lg' }} lineHeight="8">
              {t('values-desc')}
            </Text>

            <Divider my="8" />

            <Text
              mt="8"
              textAlign="start"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
            >
              {t('expertise-title')}
            </Text>
            <Text mt="2" fontSize={{ base: 'md', md: 'lg' }} lineHeight="8">
              {t('expertise-desc')}
            </Text>
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
