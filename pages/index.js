import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
  return (
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
    </Container>
  )
}

export default Page
