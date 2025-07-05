import './index.scss'
import {useTranslation} from "react-i18next";

function Navbar() {

    const {t} = useTranslation();

    return (
        <section id={"navbar"}>
            <div className={"container"}>
                <nav>
                    Navbar
                </nav>
            </div>
        </section>
    );
}

export default Navbar;