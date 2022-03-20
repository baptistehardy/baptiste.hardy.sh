import NextLink from "next/link"
import { FunctionComponent } from "react"

const Logo: FunctionComponent = () => {
    return (
        // @ts-ignore
        <NextLink href={'/'} sx={{ textDecoration: 'none' }}>
             Baptiste Hardy
        </NextLink>
    )
}

export default Logo
