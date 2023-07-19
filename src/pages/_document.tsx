import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Main, NextScript, Head } from 'next/document'
import theme from '../styles/theme'

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='fr'>
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
