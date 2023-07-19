import { FunctionComponent, ReactNode } from "react"
import NextLink from "next/link"

interface ProjectBadge {
    children: ReactNode;
}

const ProjectBadge: FunctionComponent<ProjectBadge> = ({ children }) => {
    return (
        <></>
    )
}

interface ProjectImageProps {
    src: string,
    alt: string
}

const ProjectImage: FunctionComponent<ProjectImageProps> = ({ src, alt }) => {
    return (
        <></>
    )
}

interface ProjectTitleProps {
    projectName: string,
    years: string
}

const ProjectTitle: FunctionComponent<ProjectTitleProps> = ({ projectName, years }) => {
    return (
        <></>
    )
}

export { ProjectBadge, ProjectImage, ProjectTitle }
