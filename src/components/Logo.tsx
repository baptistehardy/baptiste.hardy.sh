import NextLink from "next/link"
import { FunctionComponent } from "react"
import { Img } from "@chakra-ui/react"

const Logo: FunctionComponent = () => {
    return (
        // @ts-ignore
        <NextLink href={'/'}>
            <Img src={'/images/bhwh.svg'} boxSize={8} alt={'Baptiste Hardy logo'} />
        </NextLink>
    )
}

export default Logo
