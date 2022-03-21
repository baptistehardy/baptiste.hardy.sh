import type { NextPage } from 'next'
import MainLayout from "../components/layouts/MainLayout"
import Section from "../components/Section"
import Paragraph from "../components/Paragraph"
import SectionTitle from '../components/SectionTitle'
import { Timeline, TimelineSectionType } from "../components/Timeline"
import { Box, Button, Flex, Heading, Image, List, ListItem, Text, Link, useColorModeValue } from "@chakra-ui/react"
import { IoLogoGithub, IoLogoGitlab, IoMail } from 'react-icons/io5'

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
                <>
                    Travail à <Text as={'span'} fontWeight={'bold'}><Text as={'span'} color={'#337ab7'}>CM'</Text><Text as={'span'} color={'#d37215'}>IN</Text></Text>
                </>
            )
        }
    ]
    
    return (
        <MainLayout title={'Accueil'}>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi assumenda cupiditate delectus dignissimos ea fugiat illum incidunt inventore magnam nisi, perferendis provident quidem repellendus tempora vel veritatis voluptatibus voluptatum?
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate delectus dignissimos eligendi libero magnam, neque placeat quas quo ratione? Beatae culpa ea ex, expedita inventore molestiae neque quo sit.
                </Paragraph>
            </Section>
        </MainLayout>
    )
}

export default Home

export { getServerSideProps } from "../styles/chakra";
