import NextLink from "next/link"
import { FunctionComponent } from "react"
import { Img, Link } from "@chakra-ui/react"

const Logo: FunctionComponent = () => {
    return (
        // @ts-ignore
        <NextLink href={'/'}>
            <Link>
                <Img src={'/images/bhwh.svg'} boxSize={8} alt={'Baptiste Hardy logo'} />
            </Link>
        </NextLink>
    )
}

export default Logo
