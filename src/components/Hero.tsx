import { FC, PropsWithChildren } from 'react';

interface HeroProps extends PropsWithChildren {}

export const Hero: FC<HeroProps> = ({ children }) => {
    return (
        <section className="h-dvh grid content-center">
            {children}
        </section>
    )
}