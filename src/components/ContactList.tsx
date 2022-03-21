import { FunctionComponent, ReactNode } from "react"
import { Button, Link, List, ListItem } from "@chakra-ui/react"

type ContactType = {
    text: string,
    url: string,
    icon: ReactNode
}

interface ContactListProps {
    contacts: Array<ContactType>
}

const ContactList: FunctionComponent<ContactListProps> = ({ contacts }) => {
    return (
        <List marginLeft={'-30px'}>
            {contacts.map((contact, key) => {
                return (
                    <ListItem key={key}>
                        <Link href={contact.url} target={'_blank'} _hover={{ textDecoration: 'none' }}>
                            {/*// @ts-ignore */}
                            <Button variant={'ghost'} colorScheme={'gray'} leftIcon={contact.icon}>
                                {contact.text}
                            </Button>
                        </Link>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default ContactList
export type { ContactType }
