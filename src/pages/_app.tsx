import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { Chakra } from "../styles/chakra"
import i18next from 'i18next';
import { I18nextProvider } from "react-i18next";
import en from '../locales/en.json';
import fr from '../locales/fr.json';


function App({ Component, pageProps, router }: AppProps) {
    
    i18next.init({
        interpolation: { escapeValue: false },
        lng: "fra",
        supportedLngs: ["eng", "fra"],
        resources: {
            fra: { global: fr },
            eng: { global: en },
        },
    });
    
    return (
        <Chakra cookies={pageProps.cookies}>
            <I18nextProvider i18n={i18next}>
                <AnimatePresence
                    mode={'wait'}
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </I18nextProvider>
        </Chakra>
    )
}

export default App
