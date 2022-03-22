import { NextPage } from "next"
import Layout from "../components/Layout"
import Section from "../components/Section"
import { IoLogoGithub, IoLogoGitlab, IoLogoTwitter, IoMail } from "react-icons/io5"
import ContactList, { ContactType } from "../components/ContactList"

const Contact: NextPage = () => {
    
    const contacts: Array<ContactType> = [
        {
            text: 'baptiste@hardy.sh',
            url: 'mailto:baptiste@hardy.sh',
            icon: <IoMail/>
        },
        {
            text: '@baptistehardy',
            url: 'https://github.com/baptistehardy',
            icon: <IoLogoGithub/>
        },
        {
            text: '@baptistehardy',
            url: 'https://gitlab.com/baptistehardy',
            icon: <IoLogoGitlab/>
        },
        // {
        //     text: '@hardyshdev',
        //     url: 'https://twitter.com/hardyshdev',
        //     icon: <IoLogoTwitter/>
        // },
    ]
    
    return (
        <Layout title={"Contact"}>
            <Section>
                <ContactList contacts={contacts} />
            </Section>
        </Layout>
    )
}

export default Contact

export { getServerSideProps } from "../styles/chakra";
