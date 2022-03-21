import { Box, Flex, Heading, HStack, Image, Tag, Text } from "@chakra-ui/react"
import { FunctionComponent } from "react"
import MotionDiv from "../styles/motion"

type ImageType = {
    src: string,
    alt: string
}

type Project = {
    image: ImageType,
    title: string,
    description: string,
    tags: Array<string>
}

interface ProjectCardProps {
    project: Project,
    delay?: number
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project, delay= 0 }) => {
    
    return (
        <MotionDiv
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            // @ts-ignore
            transition={{ duration: 0.5, delay }}
            mb={6}
        >
            <Box borderRadius={'10px'} borderWidth={'1px'} overflow={'hidden'}>
                <Flex>
                    <Image boxSize='200px' src={project.image.src} alt={project.image.alt} />
                    <Flex margin={4} flexDirection={'column'}>
                        <Heading as={'h2'} size={'md'} paddingBottom={3}>{project.title}</Heading>
                        <Text noOfLines={3} marginBottom={3}>{project.description}</Text>
                        <HStack>
                            {project.tags.map((tag, key) => {
                                return <Tag key={key} opacity={0.5} >{tag}</Tag>
                            })}
                        </HStack>
                    </Flex>
                </Flex>
            </Box>
        </MotionDiv>
    )
}

export default ProjectCard
export type { Project }
