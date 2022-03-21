import { FunctionComponent } from "react"
import { Box, Text } from "@chakra-ui/react"

const Footer: FunctionComponent = () => {
    return (
        // @ts-ignore
        <Box align={'center'} fontSize={'sm'} opacity={0.7}>
            <Text>© {new Date().getFullYear()} Baptiste Hardy</Text>
        </Box>
    )
}

export default Footer
