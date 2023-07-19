"use client"


import type { NextPage } from 'next'
import Layout from "@/components/Layout"
import Section from "@/components/Section"
import Paragraph from "@/components/Paragraph"
import SectionTitle from '@/components/SectionTitle'
import { Timeline, TimelineSectionType } from "@/components/Timeline"
import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"
import ContactList, { ContactType } from "@/components/ContactList"
import { GitHub, Gitlab, Instagram, Linkedin, Mail } from "react-feather"
import ProjectCard, { Project } from "@/components/ProjectCard"
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
    const { t } = useTranslation('global');

    const timeline: Array<TimelineSectionType> = [
        {
            year: '2019',
            description: t('timeline.bts')
        },
        {
            year: '2020',
            description: t('timeline.license')
        },
        {
            year: '2021-',
            description: (
                <Text as={'span'} marginLeft={-1.5}>
                    {t('timeline.cmin')} <Text as={'span'} fontWeight={'bold'}><Text as={'span'}
                                                                                     color={'#337ab7'}>CM&apos;</Text><Text
                    as={'span'} color={'#b26012'}>IN</Text></Text>
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
            icon: <Mail size={20}/>
        },
        {
            text: '@baptistehardy',
            url: 'https://github.com/baptistehardy',
            icon: <GitHub size={20}/>
        },
        {
            text: '@baptistehardy',
            url: 'https://gitlab.com/baptistehardy',
            icon: <Gitlab size={20}/>
        },
        // {
        //     text: '@hardyshdev',
        //     url: 'https://twitter.com/hardyshdev',
        //     icon: <Twitter size={20} />
        // },
        {
            text: 'LinkedIn',
            url: 'https://linkedin.com/u/baptiste-hardy',
            icon: <Linkedin size={20}/>
        },
        // {
        //     text: 'Instagram',
        //     url: 'https://instagram.com/baptiste.hardy.sh',
        //     icon: <Instagram size={20} />
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
                            {t('job_title')}
                        </Text>
                    </Box>
                </Flex>
            </Section>
            <Section delay={0}>
                <SectionTitle>
                    {t('profile.header')}
                </SectionTitle>
                <Paragraph>
                    {t('profile.text')}
                </Paragraph>
            </Section>
            <Section delay={0.1}>
                <SectionTitle>
                    {t('experience.header')}
                </SectionTitle>
                <Timeline timeline={timeline}/>
            </Section>
            <Section delay={0.2}>
                <SectionTitle>
                    {t('hobbies.header')}
                </SectionTitle>
                <Paragraph>
                    {t('hobbies.content')}
                </Paragraph>
            </Section>
            <Section>
                <SectionTitle>
                    {t('projects.header')}
                </SectionTitle>
                {projects.length == 0 ?
                    (<Text paddingBottom={6}>{t('soon')}</Text>) :
                    projects.map((project, key) => {
                        delay += 0.1
                        return <ProjectCard key={key} project={project} delay={delay}/>
                    })
                }
            </Section>

            <Section delay={0.2}>
                <SectionTitle>
                    {t('contact.header')}
                </SectionTitle>
                <ContactList contacts={contacts}/>
            </Section>
        </Layout>
    )
}

export default Home