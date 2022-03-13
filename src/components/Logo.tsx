import NextLink from "next/link"

const Logo = () => {
    return (
        // @ts-ignore
        <NextLink href={'/'} sx={{ textDecoration: 'none' }}>
             Baptiste Hardy
        </NextLink>
    )
}

export default Logo
