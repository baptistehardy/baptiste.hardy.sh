"use client"

import { useRouter } from "next/navigation"
import { FunctionComponent, ReactNode } from "react"

interface LinkItemProps {
    href: string,
    target?: string,
    children: ReactNode,
}

const LinkItem: FunctionComponent<LinkItemProps> = ({ href, target = '_self', children, ...props }) => {
    
    const router = useRouter()
    const active = router.asPath === href
    
    // const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    // const activeColor = useColorModeValue('teal.500', 'teal.200')
    
    return (
        <div>
            {children}
        </div>
    )
}

export default LinkItem
