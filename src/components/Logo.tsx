import NextLink from "next/link"
import { FunctionComponent } from "react"

const Logo: FunctionComponent = () => {
    return (
        // @ts-ignore
        <NextLink href={'/'} sx={{ textDecoration: 'none' }}>
             BH
        </NextLink>
    )
}

export default Logo
