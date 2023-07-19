"use client"

import { FunctionComponent } from "react"
import { useTranslation } from "react-i18next"
import Link from "next/link";

const Footer: FunctionComponent = () => {
    const { t } = useTranslation('global');
    
    return (
        // @ts-ignore
        <div>
            <Link href={'https://github.com/baptistehardy/baptiste.hardy.sh'} target={'_blank'}>
                <span>{t('footer')}</span>
            </Link>
        </div>
    )
}

export default Footer
