"use client"

import NextLink from 'next/link'
import ThemeButton from './ThemeButton'
import LinkItem from './LinkItem'
import Logo from './Logo'
import LanguageButton from "./LanguageButton"
import { useTranslation } from "react-i18next"
import Link from "next/link"

const Navbar = () => {
    const { t } = useTranslation('global');
    
    return (
        <div>
            
            <div
            >
                <div>
                    <h1>
                        <Logo />
                    </h1>
                </div>
                
                <div>
                    <LinkItem href={'/'}>
                        {t('profile.header')}
                    </LinkItem>
                    <LinkItem href={'/'}>
                        {t('experience.header')}
                    </LinkItem>
                    <LinkItem href={'/projects'}>
                        {t('projects.header')} {/* ou Travaux */}
                    </LinkItem>
                    <LinkItem href={'/'}>
                        {t('contact.header')}
                    </LinkItem>
                </div>
    
                { /** @ts-ignore */ }
                <div>
                    <Link href={'https://rxresu.me/baptistehardy/baha2022'} target={'_blank'} _hover={{ textDecoration: 'none' }}>
                        <button title={t('cv_download')}>
                            CV
                        </button>
                    </Link>
                    <ThemeButton />
                    <LanguageButton/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
