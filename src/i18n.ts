import yaml from "js-yaml";

export async function loadLocale(lang: "de" | "en") {
    const res = await fetch(`/locales/${lang}.yaml`);
    const text = await res.text();
    return yaml.load(text) as any;
}