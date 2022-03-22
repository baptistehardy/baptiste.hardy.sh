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
import MainLayout from "../../components/layouts/MainLayout"
import { FunctionComponent } from "react"
import { IoLogoGithub } from "react-icons/io5"

const ProjectBadge: FunctionComponent = ({ children }) => {
    return (
        <Badge colorScheme={'blue'} marginRight={2}>{children}</Badge>
    )
}

const Project: NextPage = ()  => {
    
    return (
        <MainLayout title={'Project'}>
            <Container>
                
                <Heading size={'md'}>
                     <NextLink href={'/projects'} passHref>
                         <Link color={'skyblue'}>
                            <Text as={'span'}>Projects</Text>
                         </Link>
                     </NextLink>
                    <ChevronRightIcon marginX={2}/>
                    Project <Badge padding={1} fontSize={'0.8em'}>2022</Badge>
                </Heading>
                
                <Center marginY={6}>
                    <Image borderRadius={'lg'} src={'https://picsum.photos/400/200'} alt="Project Image" />
                </Center>
                
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque eius inventore labore laudantium reiciendis repellat temporibus. Adipisci consectetur ea eveniet, illo iste iusto numquam, quibusdam quisquam reiciendis voluptas voluptate.
                </Text>
            
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
    
                <Image marginBottom={4} borderRadius={'lg'} w={'full'} src={'https://picsum.photos/400/300'} alt={'Pictures'} />
                <Image marginBottom={4} borderRadius={'lg'} w={'full'} src={'https://picsum.photos/400/300'} alt={'Pictures'} />
            </Container>
        </MainLayout>
    )
}

export default Project
