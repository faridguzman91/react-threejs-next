/* eslint-disable no-unused-vars */
import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/layouts/section'
import { WorkGridItem } from '../components/layouts/grid-item'
import thumbInkdrop from '../public/images'
import thumbWalknote from '../public/images'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                        a markdown note-taking app
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="walknote" title="walknote" thumbnail={thumbWalknote}>
                        Music reccomenadion
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works