import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const components = {
    Link: {
        baseStyle: () => ({
            textUnderlineOffset: 5,
            _focus: {
                boxShadow: 'none'
            },
        })
    },
    Button: {
        baseStyle: () => ({
            _focus: {
                boxShadow: 'none'
            },
        })
    }
}

const theme = extendTheme({ config, components })

export default theme
