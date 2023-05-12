import { useRouter } from "next/router"
import { Link } from "@chakra-ui/react"
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
        <Link
            p={2}
            bg={(active && href != '/') ? 'rgba(0,0,0,0.25)' : ''}
            borderRadius={5}
            target={target}
            textDecoration={'none'}
            {...props}
        >
            {children}
        </Link>
    )
}

export default LinkItem
