import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '/src/locales/languages/en.json';
import az from '/src/locales/languages/az.json';
import ru from '/src/locales/languages/ru.json';

const resources = {
    en: { translation: en },
    az: { translation: az },
    ru: { translation: ru },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        supportedLngs: ['en', 'az', 'ru'],
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
