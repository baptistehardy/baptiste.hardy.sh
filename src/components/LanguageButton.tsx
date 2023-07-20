"use client"

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react"

const LanguageButton = () => {
    const { t, i18n } = useTranslation('global')
    
    const [lang, setLang] = useState<string>()
    
    useEffect(() => {
        setLang(i18n.language === 'fra' ? 'FR' : 'EN')
    }, [i18n.language])
    
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'fra' ? 'eng' : 'fra')
    };
    
    return (
        <button onClick={toggleLanguage}>
            {lang}
        </button>
    )
}

export default LanguageButton
