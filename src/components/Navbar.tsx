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
    useColorModeValue, Button
} from '@chakra-ui/react'
import { DownloadIcon, HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import ThemeButton from './ThemeButton'
import LinkItem from './LinkItem'
import Logo from './Logo'

const Navbar = () => {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff50', '#20202350')}
            sx={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
        >
            
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                // @ts-ignore
                justify="space-between"
                wrap="wrap"
                align="center"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="md" letterSpacing={'wide'}>
                        <Logo />
                    </Heading>
                </Flex>
                
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/projects">
                        Projets
                    </LinkItem>
                    <LinkItem href="/contact">
                        Contact
                    </LinkItem>
                </Stack>
    
                { /** @ts-ignore */ }
                <Box flex={1} align="right">
                    <Button leftIcon={<DownloadIcon/>} mr={2} variant={'outline'} fontSize={'15px'} fontWeight={'normal'} title={'Télécharger mon CV'}>
                        CV
                    </Button>
    
                    <ThemeButton />
                    
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Menu"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>Projets</MenuItem>
                                </NextLink>
                                <NextLink href="/contact" passHref>
                                    <MenuItem as={Link}>Contact</MenuItem>
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
