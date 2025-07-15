import {createContext, useContext, useState, useEffect} from 'react';
import i18n from "../../locales/i18n.js";

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        const defaultLang = savedLang || 'en';
        setLanguage(defaultLang);
        i18n.changeLanguage(defaultLang);
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    };

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
