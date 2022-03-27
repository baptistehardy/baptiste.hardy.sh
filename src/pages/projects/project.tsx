import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import {
    Container,
    Heading,
    Text,
    Center,
    Image,
    UnorderedList,
    ListItem,
    Link,
    Badge,
    Grid,
    List,
    Button, HStack
} from "@chakra-ui/react"
import { NextPage } from "next"
import NextLink from "next/link"
import Layout from "../../components/Layout"
import { FunctionComponent } from "react"
import { IoLogoGithub } from "react-icons/io5"
import { ProjectBadge, ProjectImage, ProjectTitle } from "../../components/ProjectDetails"
import Paragraph from "../../components/Paragraph"

const Project: NextPage = ()  => {
    
    return (
        <Layout title={'Project'}>
            <Container>
                <ProjectTitle projectName={'Project'} years={'2022'} />
                
                <Center marginY={6}>
                    <Image borderRadius={'lg'} src={'https://picsum.photos/400/200'} alt="Project Image" />
                </Center>
                
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque eius inventore labore laudantium reiciendis repellat temporibus. Adipisci consectetur ea eveniet, illo iste iusto numquam, quibusdam quisquam reiciendis voluptas voluptate.
                </Paragraph>
            
                <List margin={4} marginBottom={8} spacing={1}>
                    <ListItem>
                        <ProjectBadge>Stack</ProjectBadge>
                        <Text as={'span'}>PHP, C#...</Text>
                    </ListItem>
                    <ListItem>
                        <ProjectBadge>Platform</ProjectBadge>
                        <Text as={'span'}>Web</Text>
                    </ListItem>
                    <ListItem>
                        <ProjectBadge>Website</ProjectBadge>
                        <Link color={'skyblue'} href={'https://google.fr'} _hover={{ textUnderlineOffset: '5px' }}>https://google.fr</Link>
                    </ListItem>
                    <ListItem>
                        <ProjectBadge>Repository</ProjectBadge>
                        <Link href={'https://github.com'} target={'_blank'} _hover={{ textDecoration: 'none' }}>
                            <Button size={'xs'} leftIcon={<IoLogoGithub/>}>GitHub</Button>
                        </Link>
                    </ListItem>
                </List>
    
                <ProjectImage src={'https://picsum.photos/400/300'} alt={'Pictures'} />
                <ProjectImage src={'https://picsum.photos/400/300'} alt={'Pictures'} />
            </Container>
        </Layout>
    )
}

export default Project
