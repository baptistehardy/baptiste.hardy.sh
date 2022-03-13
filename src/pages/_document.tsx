import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../styles/theme'

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='fr'>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                    <title>Baptiste Hardy - ???</title>
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
