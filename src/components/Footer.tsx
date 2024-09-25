import { FC } from 'react';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
    return (
        <footer className="grid align-center justify-center p-4">
            <p>© {new Date().getFullYear()} Baptiste Hardy</p>
        </footer>
    )
}