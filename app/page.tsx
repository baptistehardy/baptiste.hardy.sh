import type { NextPage } from 'next'
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const Home: NextPage = () => {
    return (
        <div className={`text-white`}>
            <Navbar />
            <div className={`mx-auto max-w-6xl ps-2 px-8 lg:px-12`}>
                <div>text</div>
            </div>
        </div>

    )
}

export default Home
