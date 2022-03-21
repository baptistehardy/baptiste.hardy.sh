import { FunctionComponent, ReactNode } from "react"
import { Heading, useColorModeValue } from "@chakra-ui/react"

interface SectionTitleProps {
    children?: ReactNode,
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ children }) => (
    <Heading as={'h1'} size={'md'} paddingBottom={3}>
        {children}
    </Heading>
)

export default SectionTitle
