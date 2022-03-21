import { FunctionComponent, ReactNode } from "react"
import { Box, Text } from "@chakra-ui/react"

type TimelineSectionType = {
    year: string,
    description: ReactNode
}

interface TimelineProps {
    timeline: Array<TimelineSectionType>,
    children?: ReactNode
}

const TimelineSection: FunctionComponent = ({ children }) => {
    return (
        <Box sx={{
            paddingLeft: '4em',
            textIndent: '-4em'
        }}>
            {children}
        </Box>
    )
}

const TimelineYear: FunctionComponent = ({ children }) => {
    return (
        <Text as={'span'} sx={{
            fontWeight: 'bold',
            marginRight: '1em'
        }}>
            {children}
        </Text>
    )
}

const Timeline: FunctionComponent<TimelineProps> = ({ timeline }) => {
    return (
        <>
            {timeline.map((section, key) => {
                return (
                    <TimelineSection key={key}>
                        <TimelineYear>{section.year}</TimelineYear>
                        {section.description}
                    </TimelineSection>
                )
            })}
        </>
    )
}

export { Timeline, TimelineSection, TimelineYear }
export type { TimelineSectionType }
