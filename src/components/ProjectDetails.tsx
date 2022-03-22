import { FunctionComponent, ReactNode } from "react"
import { Badge, Heading, Image, Link, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import { ChevronRightIcon } from "@chakra-ui/icons"

const ProjectBadge: FunctionComponent = ({ children }) => {
    return (
        <Badge colorScheme={'blue'} marginRight={2}>{children}</Badge>
    )
}

interface ProjectImageProps {
    src: string,
    alt: string
}

const ProjectImage: FunctionComponent<ProjectImageProps> = ({ src, alt }) => {
    return (
        <Image marginBottom={4} borderRadius={'lg'} w={'full'} src={src} alt={alt} />
    )
}

interface ProjectTitleProps {
    projectName: string,
    years: string
}

const ProjectTitle: FunctionComponent<ProjectTitleProps> = ({ projectName, years }) => {
    return (
        <Heading size={'md'}>
            <NextLink href={'/projects'} passHref>
                <Link color={'skyblue'}>
                    <Text as={'span'}>Projects</Text>
                </Link>
            </NextLink>
            <ChevronRightIcon marginX={2}/>
            {projectName}
            <Badge padding={1} fontSize={'0.8em'}>
                {years}
            </Badge>
        </Heading>
    )
}

export { ProjectBadge, ProjectImage, ProjectTitle }
