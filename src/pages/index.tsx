import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Section from "../components/Section"
import Paragraph from "../components/Paragraph"
import SectionTitle from '../components/SectionTitle'
import { Timeline, TimelineSectionType } from "../components/Timeline"
import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"

const Home: NextPage = () => {
    
    const timeline: Array<TimelineSectionType> = [
        {
            year: '2019',
            description: 'Obtention du BTS SIO'
        },
        {
            year: '2020',
            description: 'Obtention de la licence web/mobile'
        },
        {
            year: '2021-',
            description: (
                <Text as={'span'} marginLeft={-1.5}>
                    Travail à <Text as={'span'} fontWeight={'bold'}><Text as={'span'} color={'#337ab7'}>CM&apos;</Text><Text as={'span'} color={'#b26012'}>IN</Text></Text>
                </Text>
            )
        }
    ]
    
    return (
        <Layout title={'Accueil'}>
            <Section delay={0}>
                <Flex>
                    <Image
                        borderRadius={'full'}
                        boxSize={100}
                        src={'/images/avi.jpg'}
                        alt={'avi'}
                        marginRight={5}
                        border={'2px solid'}
                        // @ts-ignore
                        borderColor={useColorModeValue('#000000BF', '#FFFFFFBF')}
                    />
                    <Box>
                        <Heading>
                            Baptiste Hardy
                        </Heading>
                        <Text as={'p'}>
                            Développeur Web
                        </Text>
                    </Box>
                </Flex>
            </Section>
            <Section delay={0}>
                <SectionTitle>
                    Profil
                </SectionTitle>
                <Paragraph>
                    Je suis un développeur full-stack basé à Chartres (Centre-Val de Loire),
                    avec une passion pour créer des choses qui facilitent et automatisent ma vie pour plus en profiter.
                    <br/>
                    Je possède les compétences pour développer des services et produits du cahier des charges, de la conception et du design, jusqu&apos;au déploiement.
                </Paragraph>
            </Section>
            <Section delay={0.1}>
                <SectionTitle>
                    Expérience
                </SectionTitle>
                <Timeline timeline={timeline} />
            </Section>
            <Section delay={0.2}>
                <SectionTitle>
                    Passions
                </SectionTitle>
                <Paragraph>
                    Homelabbing, vélo, musique, animation japonaise
                </Paragraph>
            </Section>
        </Layout>
    )
}

export default Home

export { getServerSideProps } from "../styles/chakra";
