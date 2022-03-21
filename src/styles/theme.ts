import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const components = {
    Link: {
        baseStyle: () => ({
            textUnderlineOffset: 10,
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
    },
    Paragraph: {
        baseStyle: () => ({
            letterSpacing: '0.1px'
        })
    },
}

const fonts = {
    heading: 'DM Mono',
    body: "'M PLUS 1'"
}

const styles = {
    global: props => ({
        body: {
            bg: mode('#ffffff', '#202023')(props)
        }
    })
}

const theme = extendTheme({ config, components, fonts, styles })

export default theme
