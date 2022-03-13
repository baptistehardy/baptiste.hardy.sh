import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"
import Navbar from "../Navbar"
import { motion } from "framer-motion"
import { FunctionComponent, ReactNode } from "react"

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

interface MainLayoutProps {
    title: string,
    children: ReactNode
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({ title, children }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="description" content="Baptiste Hardy's website" />
                <meta name="author" content="Baptiste Hardy" />
                {/*<meta name="twitter:site" content="" />*/}
                {/*<meta name="twitter:creator" content="" />*/}
                {/*<meta name="twitter:card" content="summary_large_image" />*/}
                {/*<meta name="twitter:image" content="/card.png" />*/}
                {/*<link rel="apple-touch-icon" href="apple-touch-icon.png" />*/}
                <meta property="og:site_name" content="Baptiste Hardy's website" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/card.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>Baptiste Hardy - {title || '???'}</title>
            </Head>
            
            <Navbar />
            
            <Container maxW="container.md" pt={20}>
                <motion.div
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.3, type: 'easeInOut' }}
                    style={{ position: 'relative' }}
                >
                    {children}
                </motion.div>
            </Container>
        </Box>
    )
}

export default MainLayout