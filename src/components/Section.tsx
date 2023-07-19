import { FunctionComponent, ReactNode } from "react"

interface SectionProps {
    children?: ReactNode,
    delay?: number
}

const Section: FunctionComponent<SectionProps> = ({ children, delay = 0 }) => {
        return (
            <>
                {children}
            </>
        )
}


export default Section
