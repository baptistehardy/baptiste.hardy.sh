import { FunctionComponent } from "react"
import { Box, Link, Text } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const Footer: FunctionComponent = () => {
    const { t } = useTranslation('global');
    
    return (
        // @ts-ignore
        <Box align={'center'} fontSize={'sm'} opacity={0.7}>
            <Link href={'https://github.com/baptistehardy/baptiste.hardy.sh'} target={'_blank'}>
                <Text>{t('footer')}</Text>
            </Link>
        </Box>
    )
}

export default Footer
