import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { Chakra } from "../styles/chakra"

function App({ Component, pageProps, router }: AppProps) {
    
    return (
        <Chakra cookies={pageProps.cookies}>
            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </Chakra>
    )
}

export default App
