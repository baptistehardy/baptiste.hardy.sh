import { Box, chakra, Flex, Heading, HStack, Image, shouldForwardProp, Tag, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FunctionComponent } from "react"

const MotionDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

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
                    <Box margin={4}>
                        <Heading as={'h2'} size={'md'} paddingBottom={3}>{project.title}</Heading>
                        <Text noOfLines={3} paddingBottom={3}>{project.description}</Text>
                        <HStack>
                            {project.tags.map((tag, key) => {
                                return <Tag key={key} opacity={0.5} >{tag}</Tag>
                            })}
                        </HStack>
                    </Box>
                </Flex>
            </Box>
        </MotionDiv>
    )
}

export default ProjectCard
export type { Project }
