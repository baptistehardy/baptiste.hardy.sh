import { FunctionComponent, ReactNode } from "react"
import { Text } from "@chakra-ui/react"

interface ParagraphProps {
    children?: ReactNode,
}

const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => (
    <Text align={'justify'}>
        {children}
    </Text>
)

export default Paragraph
