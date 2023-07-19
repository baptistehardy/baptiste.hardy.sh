"use client"

import { FC, ReactNode } from "react";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import fr from "@/locales/fr.json";
import en from "@/locales/en.json";

interface ProvidersProps {
    children: ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {

    i18next.init({
        interpolation: { escapeValue: false },
        lng: "fra",
        supportedLngs: ["eng", "fra"],
        resources: {
            fra: { global: fr },
            eng: { global: en },
        },
    });

    return (
        <I18nextProvider i18n={i18next}>
            {children}
        </I18nextProvider>
    )
}