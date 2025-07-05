import {createRoot} from 'react-dom/client'
import './styles/main.scss'
import './index.scss'
import App from './App.jsx'
import {Provider} from "react-redux";
import {store} from "./services/store.jsx";
import {ThemeProvider} from "./context/ThemeContext/index.jsx";
import {LanguageProvider} from "./context/LanguageContext/index.jsx";

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <LanguageProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </LanguageProvider>
    </ThemeProvider>
)