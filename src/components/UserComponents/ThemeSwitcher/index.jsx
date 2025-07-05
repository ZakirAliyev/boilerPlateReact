import {useTheme} from "../../../context/ThemeContext/index.jsx";

const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Temayı Değiştir
        </button>
    );
};

export default ThemeSwitcher;
