"use client"

import { useTranslation } from "react-i18next"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    const {t} = useTranslation('global');

    return (
        <nav className={`backdrop-blur-sm bg-black/50 text-white/75`}>
            <div className={`mx-auto max-w-4xl ps-2 sm:px-6 lg:px-8`} id={`main-menu`}>
                <div className={`relative flex h-12 items-center`}>
                    <div className={`flex flex-1 items-center justify-center sm:items-stretch sm:justify-start`}>
                        <div className={`flex flex-shrink-0 items-center`}>
                            <Image className={`h-6 w-auto`}
                                   src={`/images/bhwh.svg`}
                                   width={25}
                                   height={25}
                                   alt="Baptiste Hardy's logo"
                            />
                        </div>
                        <div className={`hidden sm:ml-6 sm:block`}>
                            <div className={`flex space-x-4`}>
                                <Link href={`#bio`}
                                      className={`text-white/50 hover:bg-white/10 hover:text-white rounded-md px-3 py-1 text-md font-medium`}>Bio</Link>
                                <Link href={`#skills`}
                                      className={`text-white/50 hover:bg-white/10 hover:text-white rounded-md px-3 py-1 text-md font-medium`}>Skills</Link>
                                <Link href={`#works`}
                                      className={`text-white/50 hover:bg-white/10 hover:text-white rounded-md px-3 py-1 text-md font-medium`}>Works</Link>
                                <Link href={`#experience`}
                                      className={`text-white/50 hover:bg-white/10 hover:text-white rounded-md px-3 py-1 text-md font-medium`}>Experience</Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0`}>
                        <Link
                            href={'https://rxresu.me/baptistehardy/baha2022'} target={'_blank'}
                            className={`p-2 px-3 rounded-md bg-black/90 text-white/75 hover:bg-white/10 hover:text-white focus:outline-none`}
                        >
                            <span className={`sr-only`}>CV</span>
                            CV
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`sm:hidden`} id={`mobile-menu`}>
                <div className={`space-y-1 px-2 pb-3 pt-2`}>
                    <Link href={`#bio`}
                          className={`text-white/50 hover:bg-white/10 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Bio</Link>
                    <Link href={`#skills`}
                          className={`text-white/50 hover:bg-white/10 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Skills</Link>
                    <Link href={`#works`}
                          className={`text-white/50 hover:bg-white/10 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Works</Link>
                    <Link href={`#experience`}
                          className={`text-white/50 hover:bg-white/10 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Experience</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
