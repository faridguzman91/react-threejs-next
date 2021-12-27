/* eslint-disable no-unused-vars */
import { Container, Box, Heading, Image, useColorModeValue, Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import  Link from 'next/link'
import NextLink from 'next/link'
import Section from '../components/layouts/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
    <Container>
      <Box borderRadius="lg" 
           bg={useColorModeValue(useColorModeValue('whiteAlpha.500' , 'whiteAlpha.200'))} 
           p={3} 
           align="center" 
           color="white"
           >
        I am a Frontend Developer based in The Hague
      </Box>

      <Box display={{ md: 'flex ' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Farid Guzman
          </Heading>
          <p>Developer/Artist/Designer</p>
        </Box>
      </Box>
      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="/public/images/faridguzman2.jpg"
          alt="ProfileImage"
        />
      </Box>
      <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
              Work
          </Heading>
          <Paragraph>Farid Guzman is a Frontend Developer based in The Hague

          <NextLink href="https://www.faridguzman.com">
            <Box align="center" my={4}>
               Click here to go to my website
            </Box>                   
          </NextLink>

          </Paragraph>

          <Box align="center" my={4}>
              <NextLink href="works">
                  <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">My portfolio</Button>       
              </NextLink>
          </Box>
      </Section>

      <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
              Bio
          </Heading>
          <BioSection>
              <BioYear>1991</BioYear>
              Born in Cartagena Colombia
          </BioSection>

          <BioSection>
              <BioYear>2018</BioYear>
              Graduated Interactive Media Design from the Royal Academy of Art in The Hague
          </BioSection>
      </Section>
    </Container>
    </Layout>

  )
}

export default Page
