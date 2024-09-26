import { FC, PropsWithChildren } from 'react';

interface HeroProps extends PropsWithChildren {}

export const Hero: FC<HeroProps> = ({ children }) => {
    return (
        <section className="h-dvh grid content-center bg-[url('../assets/pattern.svg')]">
            <p className="m-8">
                {children}
            </p>
        </section>
    )
}