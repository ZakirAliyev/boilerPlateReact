import './index.scss'
import {useTranslation} from "react-i18next";
import {TfiWorld} from "react-icons/tfi";
import logo from "/src/assets/sariLogo.webp"
import {useNavigate} from "react-router";

function Navbar() {

    const {t} = useTranslation();
    const navigate = useNavigate();

    return (
        <section id={"navbar"}>
            <div className={"container"}>
                <nav>
                    <div className={"links"}>
                        <div className={"link"}>Home</div>
                        <div className={"link"}>About</div>
                        <div className={"link"}>Portfolio</div>
                        <div className={"link"}>FAQ</div>
                    </div>
                    <img src={`${logo}`} alt={"Logo"} onClick={() => navigate("/")}/>
                    <div className={"buttonWrapper"}>
                        <button>Contact us</button>
                        <TfiWorld className={"icon"}/>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default Navbar;