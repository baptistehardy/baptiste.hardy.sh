import { NextPage } from "next"
import Layout from "../components/Layout"
import Section from "../components/Section"
import ContactList, { ContactType } from "../components/ContactList"
import { GitHub, Gitlab, Mail, Twitter } from "react-feather"

const Contact: NextPage = () => {
    
    const contacts: Array<ContactType> = [
        {
            text: 'baptiste@hardy.sh',
            url: 'mailto:baptiste@hardy.sh',
            icon: <Mail size={20} />
        },
        {
            text: '@baptistehardy',
            url: 'https://github.com/baptistehardy',
            icon: <GitHub size={20} />
        },
        {
            text: '@baptistehardy',
            url: 'https://gitlab.com/baptistehardy',
            icon: <Gitlab size={20} />
        },
        // {
        //     text: '@hardyshdev',
        //     url: 'https://twitter.com/hardyshdev',
        //     icon: <Twitter size={20} />
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
