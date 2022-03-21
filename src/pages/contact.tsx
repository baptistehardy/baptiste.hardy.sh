import { NextPage } from "next"
import MainLayout from "../components/layouts/MainLayout"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import Paragraph from "../components/Paragraph"
import { Button, Link, List, ListItem } from "@chakra-ui/react"
import { IoLogoGithub, IoLogoGitlab, IoMail } from "react-icons/io5"

const Contact: NextPage = () => {
    return (
        <MainLayout title={"Contact"}>
            <Section>
                <Paragraph>
                    <List marginLeft={'-30px'}>
                        <ListItem>
                            <Link href="mailto:baptiste@hardy.sh" target="_blank" _hover={{ textDecoration: 'none' }}>
                                <Button variant="ghost" colorScheme="gray" leftIcon={<IoMail />}>
                                    baptiste@hardy.sh
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/baptistehardy" target="_blank" _hover={{ textDecoration: 'none' }}>
                                <Button variant="ghost" colorScheme="gray" leftIcon={<IoLogoGithub />}>
                                    @baptistehardy
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://gitlab.com/baptistehardy" target="_blank" _hover={{ textDecoration: 'none' }}>
                                <Button variant="ghost" colorScheme="gray" leftIcon={<IoLogoGitlab />}>
                                    @baptistehardy
                                </Button>
                            </Link>
                        </ListItem>
                        {/*<ListItem>*/}
                        {/*    <Link href="https://twitter.com/hardyshdev" target="_blank" _hover={{ textDecoration: 'none' }}>*/}
                        {/*        <Button variant="ghost" colorScheme="gray" leftIcon={<IoLogoTwitter />}>*/}
                        {/*            @hardyshdev*/}
                        {/*        </Button>*/}
                        {/*    </Link>*/}
                        {/*</ListItem>*/}
                    </List>
                </Paragraph>
            </Section>
        </MainLayout>
    )
}

export default Contact

export { getServerSideProps } from "../styles/chakra";
