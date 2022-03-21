import { FunctionComponent, ReactNode } from "react"
import MotionDiv from '../styles/motion'

interface SectionProps {
    children?: ReactNode,
    delay?: number
}

const Section: FunctionComponent<SectionProps> = ({ children, delay = 0 }) => (
    <MotionDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // @ts-ignore
        transition={{ duration: 0.8, delay }}
        mb={6}
    >
        {children}
    </MotionDiv>
)

export default Section
