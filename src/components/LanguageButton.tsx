import { Button, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
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
        <Button
            aria-label={'Language toggle'}
            onClick={toggleLanguage}
            ml={2}
            variant={'outline'}
            fontSize={'15px'}
            fontWeight={'normal'}
        >
            {lang}
        </Button>
    )
}

export default LanguageButton
