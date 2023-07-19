import { FunctionComponent, ReactNode } from "react"
import Link from "next/link";

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
        <div>
            {contacts.map((contact, key) => {
                return (
                    <div key={key}>
                        <Link href={contact.url} target={'_blank'} _hover={{ textDecoration: 'none' }}>
                            {/*// @ts-ignore */}
                            {contact.text}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ContactList
export type { ContactType }
