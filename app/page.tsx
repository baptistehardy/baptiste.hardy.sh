import type { NextPage } from 'next'
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const Home: NextPage = () => {
    return (
        <div className={`text-white`}>
            <Navbar/>
            <div className={`mx-auto max-w-2xl ps-2 px-8 lg:px-12 pt-3`}>
                <h1 className={`sr-only`}>Profile</h1>
                <p>
                    Je suis un développeur full-stack basé à Chartres (Centre-Val de Loire), avec une passion pour créer
                    des choses qui facilitent et automatisent ma vie pour plus en profiter. Je possède les compétences
                    pour développer des services et produits du cahier des charges, de la conception et du design,
                    jusqu'au déploiement.
                </p>
                <h1 id={`#skills`} className={`font-semibold font-sans text-lg p-6`}>Compétences</h1>
                <ul className={`list-none`}>
                    <li>HTML5/CSS3</li>
                    <li>PHP</li>
                    <li>React</li>
                    <li>Javascript/Typescript avec NodeJS</li>
                    <li>PostgreSQL</li>
                </ul>
                <p className={`py-4`}>En apprentissage :</p>
                <ul>
                    <li>Rust</li>
                    <li>Flutter</li>
                </ul>
                <h1 id={`#works`} className={`font-semibold font-sans text-lg p-6`}>Projets</h1>
                <p className={`py-4`}>Projets...</p>
            </div>
        </div>

    )
}

export default Home
