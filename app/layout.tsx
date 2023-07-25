import { FC, ReactNode } from 'react'
import { Metadata } from 'next'
import i18next from 'i18next'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'
import { Providers } from '@/providers'
import '@/styles/global.css'

export interface RootLayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: 'Baptiste Hardy',
    description: "Baptiste Hardy's website"
}

export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    i18next.init({
        interpolation: { escapeValue: false },
        lng: 'fra',
        supportedLngs: ['eng', 'fra'],
        resources: {
            fra: { global: fr },
            eng: { global: en }
        }
    })

    return (
        <html lang="fr">
            <body className={`bg-[#111111]`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

export default RootLayout
