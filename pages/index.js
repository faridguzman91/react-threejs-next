import {Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} align="center" color="white">
I am a Frontend Developer based in The Hague
            </Box>

            <Box display={{md: 'flex '}} >
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Farid Guzman
                    </Heading>
                    <p>Developer/Artist/Designer</p>
                </Box>
            </Box>
            
            </Container>
        
    )

}

export default Page