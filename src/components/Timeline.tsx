import { FunctionComponent, ReactNode } from "react"

type TimelineSectionType = {
    year: string,
    description: ReactNode
}

interface TimelineProps {
    timeline: Array<TimelineSectionType>,
    children?: ReactNode
}

interface FCwChildren {
    children: ReactNode;
}

const TimelineSection: FunctionComponent<FCwChildren> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

const TimelineYear: FunctionComponent<FCwChildren> = ({ children }) => {
    return (
        <span>
            {children}
        </span>
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
