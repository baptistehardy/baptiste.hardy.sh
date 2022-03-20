import { FunctionComponent, ReactNode } from "react"
import { Heading, useColorModeValue } from "@chakra-ui/react"

interface SectionTitleProps {
    children?: ReactNode,
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ children }) => (
    <Heading as={'h1'} size={'lg'} >
        {children}
    </Heading>
)

export default SectionTitle
