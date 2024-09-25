import { FC, PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
    title: string;
}

export const Section: FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="h-dvh grid content-center">
            <h2 className="text-2xl text-bold my-4">{title}</h2>
            {children}
        </section>
    )
}