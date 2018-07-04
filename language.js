import i18next from './init';

export function changeLang(lang) {
    localStorage.setItem('language', lang);
    i18next.changeLanguage(lang);
    return lang;
}

export function getCurrentLang() {
    return localStorage.getItem('language');
}

export function addResource(lang, ns, strings) {
    if (!i18next.getResourceBundle(lang, ns)) {
        console.log(`added ${lang}`);
        i18next.addResourceBundle(lang, ns, strings[lang]);
    }

}

export function initializeStrings(ns, strings) {
    // Initialize only the setted language
    const lang = getCurrentLang();
    if (!i18next.getResourceBundle(lang, ns)) {
        console.log(`init ${lang}`);
        i18next.addResourceBundle(lang, ns, strings[lang]);
    }
}
