import type { NextPage } from 'next'
import MainLayout from "../components/layouts/MainLayout"

const Home: NextPage = () => {
    return (
        <MainLayout title={'Accueil'}>
            Index
        </MainLayout>
    )
}

export default Home

export { getServerSideProps } from "../styles/chakra";
