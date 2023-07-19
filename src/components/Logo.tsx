import NextLink from "next/link"
import { FunctionComponent } from "react"
import Image from "next/image"

const Logo: FunctionComponent = () => {
    return (
        // @ts-ignore
        <NextLink href={'/'}>
            <Image src={'/images/bhwh.svg'} alt={'Baptiste Hardy logo'} width={30} height={30} />
        </NextLink>
    )
}

export default Logo
