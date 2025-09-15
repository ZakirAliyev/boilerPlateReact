import { useTranslation } from 'react-i18next';
import {useLanguage} from "../../../context/LanguageContext/index.jsx";

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <p>Aktif Dil: {language}</p>
            <button onClick={() => changeLanguage('az')}>Azərbaycanca</button>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('ru')}>Русский</button>
        </div>
    );
};

export default LanguageSwitcher;
