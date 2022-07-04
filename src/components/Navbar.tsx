import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Button
} from '@chakra-ui/react'
import { DownloadIcon, HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import ThemeButton from './ThemeButton'
import LinkItem from './LinkItem'
import Logo from './Logo'
import LanguageButton from "./LanguageButton"
import { useTranslation } from "react-i18next"

const Navbar = () => {
    const { t } = useTranslation('global');
    
    return (
        <Box
            position={'fixed'}
            as={'nav'}
            w={'100%'}
            bg={useColorModeValue('#ffffff50', '#20202350')}
            sx={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
        >
            
            <Container
                display={'flex'}
                p={2}
                maxW={'container.md'}
                // @ts-ignore
                justify={'space-between'}
                wrap={'wrap'}
                align={'center'}
            >
                <Flex align={'center'} mr={5}>
                    <Heading as={'h1'} size={'md'} letterSpacing={'wide'}>
                        <Logo />
                    </Heading>
                </Flex>
                
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems={'center'}
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href={'/'}>
                        {t('profile.header')}
                    </LinkItem>
                    <LinkItem href={'/'}>
                        {t('experience.header')}
                    </LinkItem>
                    <LinkItem href={'/'}>
                        {t('projets.header')} {/* ou Travaux */}
                    </LinkItem>
                    <LinkItem href={'/'}>
                        {t('contact.header')}
                    </LinkItem>
                </Stack>
    
                { /** @ts-ignore */ }
                <Box align={'right'}>
                    <Link href={'https://rxresu.me/baptistehardy/baha2022'} target={'_blank'} _hover={{ textDecoration: 'none' }}>
                        <Button leftIcon={<DownloadIcon/>} mr={2} variant={'outline'} fontSize={'15px'} fontWeight={'normal'} title={t('cv_download')}>
                            CV
                        </Button>
                    </Link>
                    <ThemeButton />
                    <LanguageButton/>
                    
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id={'navbar-menu'}>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant={'outline'}
                                aria-label={'Menu'}
                            />
                            <MenuList>
                                <NextLink href={'/projects'} passHref>
                                    <MenuItem as={Link}>{t('projets.header')}</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
