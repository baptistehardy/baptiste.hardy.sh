import type { NextPage } from 'next'
import Layout from "../components/Layout"
import Section from "../components/Section"
import Paragraph from "../components/Paragraph"
import SectionTitle from '../components/SectionTitle'
import { Timeline, TimelineSectionType } from "../components/Timeline"
import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import ContactList, { ContactType } from "../components/ContactList"
import { GitHub, Gitlab, Mail } from "react-feather"
import ProjectCard, { Project } from "../components/ProjectCard"

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
    
    const projects: Array<Project> = [
        // {
        //     image: {
        //         src: 'https://picsum.photos/200/200',
        //         alt: 'Projet 1'
        //     },
        //     title: 'Projet 1',
        //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi assumenda cupiditate delectus dignissimos ea fugiat illum incidunt inventore magnam nisi",
        //     tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        //     slug: 'project'
        // },
        // {
        //     image: {
        //         src: 'https://picsum.photos/200/200',
        //         alt: 'Projet 2'
        //     },
        //     title: 'Projet 2',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi assumenda cupiditate delectus dignissimos ea fugiat illum incidunt inventore magnam nisi',
        //     tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        //     slug: 'project'
        // },
        // {
        //     image: {
        //         src: 'https://picsum.photos/200/200',
        //         alt: 'Projet 3'
        //     },
        //     title: 'Projet 3',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi assumenda cupiditate delectus dignissimos ea fugiat illum incidunt inventore magnam nisi',
        //     tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        //     slug: 'project'
        // },
    ]
    
    const contacts: Array<ContactType> = [
        {
            text: 'baptiste@hardy.sh',
            url: 'mailto:baptiste@hardy.sh',
            icon: <Mail size={20} />
        },
        {
            text: '@baptistehardy',
            url: 'https://github.com/baptistehardy',
            icon: <GitHub size={20} />
        },
        {
            text: '@baptistehardy',
            url: 'https://gitlab.com/baptistehardy',
            icon: <Gitlab size={20} />
        },
        // {
        //     text: '@hardyshdev',
        //     url: 'https://twitter.com/hardyshdev',
        //     icon: <Twitter size={20} />
        // },
    ]
    
    let delay = 0
    
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
            <Section>
                <SectionTitle>
                    Projets
                </SectionTitle>
                { projects.length == 0 ?
                    (<Text paddingBottom={6}>En cours de construction...</Text>) :
                    projects.map((project, key) => {
                        delay += 0.1
                        return <ProjectCard key={key} project={project} delay={delay} />
                    })
                }
            </Section>
            
            <Section delay={0.2}>
                <SectionTitle>
                    Contact
                </SectionTitle>
                <ContactList contacts={contacts} />
            </Section>
        </Layout>
    )
}

export default Home

export { getServerSideProps } from "../styles/chakra";
