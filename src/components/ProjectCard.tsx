import { FunctionComponent } from "react"
import NextLink from "next/link"

type ImageType = {
    src: string,
    alt: string
}

type Project = {
    image: ImageType,
    title: string,
    description: string,
    tags: Array<string>,
    slug: string
}

interface ProjectCardProps {
    project: Project,
    delay?: number
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project, delay= 0 }) => {
    
    return (
            <></>
    )
}

export default ProjectCard
export type { Project }
