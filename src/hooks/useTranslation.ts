import { useEffect, useState } from "react";
import { loadLocale } from "../i18n";

export function useTranslation(defaultLang: "de" | "en" = "de") {
    const [lang, setLang] = useState<"de" | "en">(defaultLang);
    const [t, setT] = useState<any>(null);

    useEffect(() => {
        loadLocale(lang).then(setT);
        localStorage.setItem("lang", lang);
    }, [lang]);

    return { t, lang, setLang };
}