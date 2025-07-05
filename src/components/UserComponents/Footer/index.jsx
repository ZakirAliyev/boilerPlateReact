import './index.scss'
import {useTranslation} from "react-i18next";

function Footer() {

    const {t} = useTranslation();

    return (
        <section id={"footer"}>
            <div className={"container"}>
                <nav>
                    Footer
                </nav>
            </div>
        </section>
    );
}

export default Footer;