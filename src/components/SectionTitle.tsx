import { FunctionComponent, ReactNode } from "react"
import { Heading, useColorModeValue } from "@chakra-ui/react"

interface SectionTitleProps {
    children?: ReactNode,
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ children }) => (
    <Heading as={'h1'}
             size={'md'}
             bg={useColorModeValue('rgba(0,0,0,0.05)', 'rgba(255,255,255,0.05)')}
             borderRadius={10}
             paddingX={5}
             paddingY={3}
             marginBottom={3}
             display={'inline-block'}
    >
        {children}
    </Heading>
)

export default SectionTitle
