import { NextPage } from "next"
import Layout from "../components/Layout"
import ProjectCard, { Project } from "../components/ProjectCard"
import { Text } from '@chakra-ui/react'

const Projects: NextPage = () => {
    
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
    
    let delay = 0
    
    return (
        <Layout title={"Projets"}>
            { projects.length == 0 ?
                (<Text paddingBottom={6}>En cours de construction...</Text>) :
                projects.map((project, key) => {
                    delay += 0.1
                    return <ProjectCard key={key} project={project} delay={delay} />
                })
            }
        </Layout>
    )
}

export default Projects

export { getServerSideProps } from "../styles/chakra";
