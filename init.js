import { init } from 'i18next';


const browserLang = navigator.language || navigator.userLanguage; 
const userLang = localStorage.getItem('language');
const i18next = init({
    fallbackLng: userLang || browserLang,
    debug: true,
});
export default i18next;
