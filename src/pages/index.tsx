import type { NextPage } from 'next'
import MainLayout from "../components/layouts/MainLayout"
import Section from "../components/Section"
import Paragraph from "../components/Paragraph"
import SectionTitle from '../components/SectionTitle'


const Home: NextPage = () => {
    return (
        <MainLayout title={'Accueil'}>
            <Section delay={0}>
                <SectionTitle>
                    Heading 1
                </SectionTitle>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi assumenda cupiditate delectus dignissimos ea fugiat illum incidunt inventore magnam nisi, perferendis provident quidem repellendus tempora vel veritatis voluptatibus voluptatum?
                </Paragraph>
            </Section>
            <Section delay={0.1}>
                <SectionTitle>
                    Heading 2
                </SectionTitle>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate delectus dignissimos eligendi libero magnam, neque placeat quas quo ratione? Beatae culpa ea ex, expedita inventore molestiae neque quo sit.
                </Paragraph>
            </Section>
        </MainLayout>
    )
}

export default Home

export { getServerSideProps } from "../styles/chakra";
