import { FunctionComponent } from "react"
import { Box, Link, Text } from "@chakra-ui/react"

const Footer: FunctionComponent = () => {
    return (
        // @ts-ignore
        <Box align={'center'} fontSize={'sm'} opacity={0.7}>
            <Link href={'https://github.com/baptistehardy/baptiste.hardy.sh'} target={'_blank'}>
                <Text>Designed & Built by Baptiste Hardy</Text>
            </Link>
        </Box>
    )
}

export default Footer
