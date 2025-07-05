import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '/public/locales/en.json';
import az from '/public/locales/az.json';
import ru from '/public/locales/ru.json';

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
