import { FunctionComponent, ReactNode } from "react"

interface ParagraphProps {
    children?: ReactNode,
}

const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => (
    <p>
        {children}
    </p>
)

export default Paragraph
