import { FunctionComponent, ReactNode } from "react"
import { Text } from "@chakra-ui/react"

interface ParagraphProps {
    children?: ReactNode,
}

const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => (
    <Text align={'justify'} sx={{ textIndent: '2em' }}>
        {children}
    </Text>
)

export default Paragraph
