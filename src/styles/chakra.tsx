import '@fontsource/m-plus-1/400.css'
import '@fontsource/cabin/400.css'

import {
    ChakraProvider,
    createCookieStorageManager,
    createLocalStorageManager,
    localStorageManager } from '@chakra-ui/react'
import theme from "./theme"

export function Chakra({cookies, children}) {
    
    const localStorageManager = createLocalStorageManager('baptiste.hardy.sh')
    
    return (
        <ChakraProvider colorModeManager={localStorageManager} theme={theme}>
            {children}
        </ChakraProvider>
    )
}

export function getServerSideProps({ req }) {
    return {
        props: {
            cookies: req.headers.cookie ?? '',
        },
    }
}
