import Head from 'next/head'
import Navbar from './Navbar'
import { FunctionComponent, ReactNode } from 'react'
import Footer from './Footer'

interface MainLayoutProps {
    title: string
    children: ReactNode
}

const Layout: FunctionComponent<MainLayoutProps> = ({ title, children }) => {
    return (
        <div>
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
                <title>{`Baptiste Hardy - ${title}`}</title>
            </Head>

            <Navbar />

            <div>{children}</div>

            <Footer />
        </div>
    )
}

export default Layout
