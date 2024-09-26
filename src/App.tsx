import { Section } from "./components/Section.tsx";
import { Hero } from "./components/Hero.tsx";
import { Footer } from "./components/Footer.tsx";
import { Navbar } from "./components/Navbar.tsx";

function App() {
    return (
        <>
            <Navbar/>
            <Hero>
                <h1 className="text-5xl font-semibold my-12">Baptiste Hardy</h1>
                <div>
                    <p className="pb-4">
                        Développeur full-stack basé à Chartres
                        (Centre-Val de Loire)
                    </p>
                    <p>
                        Je possède les compétences pour développer des
                        services et produits du cahier des charges, de la conception
                        et du design, jusqu'au déploiement.
                    </p>
                </div>
            </Hero>
            <Section title={"Skills"}>
                <h3 className="text-xl text-semibold my-2">Langages</h3>
                <ul>
                    <li>HTML5/CSS3</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>PHP</li>
                    <li>Go</li>
                    <li>Nix</li>
                    <li>(Rust)</li>
                </ul>
                <h3 className="text-2xl text-semibold my-4">Frameworks</h3>
                <ul>
                    <li>Symfony</li>
                    <li>(React)</li>
                    <li>Flutter</li>
                    <li>etc...</li>
                </ul>
                <h3 className="text-2xl text-semibold my-4">Libraires</h3>
                <ul>
                    <li>React</li>
                    <li>etc...</li>
                </ul>
                <h3 className="text-2xl text-semibold my-4">Software</h3>
                <ul>
                    <li>Office Suite</li>
                    <li>Windows</li>
                    <li>Linux</li>
                    <li>Docker</li>
                    <li>etc...</li>
                </ul>
            </Section>
            <Section title={"Projets"}>
                <ul>
                    <li>prythm</li>
                    <li></li>
                </ul>
            </Section>
            <Section title={"Expérience"}>
                <ul>
                    <li>BTS SIO</li>
                    <li>Licence</li>
                    <li>C'CIN (2019-2024)</li>
                </ul>
            </Section>
            <Section title={"Hobbies"}>
                <ul>
                    <li>Photographie</li>
                    <li>Vélo</li>
                    <li>Homelabbing/self-hosting</li>
                    <li>Fan d'animation</li>
                </ul>
            </Section>
            <Footer />
        </>
    )
}

export default App