import { FC } from 'react';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
    return (
        <nav className="p-4">
            <ul className="flex space-x-4">
                <li className="text-lg">
                    <a className="hover:bg-black rounded-md px-4 py-2 cursor-pointer select-none">Home</a>
                </li>
                <li className="text-lg opacity-50">
                    <a className="hover:bg-black rounded-md px-4 py-2 cursor-pointer select-none">Blog</a>
                </li>
                <li className="grow"></li>
                <li className="text-lg">
                    <a href="https://rxresu.me/baptistehardy/baha2022" target="_blank"
                       className="hover:bg-black rounded-md px-4 py-2 cursor-pointer select-none">CV</a>
                </li>
            </ul>
        </nav>
    )
}