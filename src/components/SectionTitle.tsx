import { FunctionComponent, ReactNode } from "react"

interface SectionTitleProps {
    children?: ReactNode,
}

const SectionTitle: FunctionComponent<SectionTitleProps> = ({ children }) => (
    <h1>
        {children}
    </h1>
)

export default SectionTitle
