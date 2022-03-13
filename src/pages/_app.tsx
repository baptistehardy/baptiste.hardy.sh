import type { AppProps } from 'next/app'
import { Chakra } from "../styles/chakra"

function App({ Component, pageProps }: AppProps) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Component {...pageProps} />
        </Chakra>
    )
}

export default App