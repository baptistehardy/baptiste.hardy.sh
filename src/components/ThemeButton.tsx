import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeButton = () => {
    const { toggleColorMode } = useColorMode()
    
    return (
        <IconButton
            aria-label="Theme toggle"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
        />
    )
}

export default ThemeButton
