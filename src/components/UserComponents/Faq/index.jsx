import './index.scss'
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";

function HomeBanner() {

    const {t} = useTranslation();
    const navigate = useNavigate();

    return (
        <section id={"homeBanner"}>
            <div className={"container"}>
                <div className={"wrapper"}>
                    <h2>Building Future Proof Digital Solutions</h2>
                    <p>Do you have a vision for your business but don’t know where to start? Let’s transform your ideas
                        into
                        powerful digital solutions that work for you and grow with your success.</p>
                    <button>
                        <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 10.5C4.5 6.729 4.5 4.843 5.672 3.672C6.844 2.501 8.729 2.5 12.5 2.5H14C17.771 2.5 19.657 2.5 20.828 3.672C21.999 4.844 22 6.729 22 10.5V14.5C22 18.271 22 20.157 20.828 21.328C19.656 22.499 17.771 22.5 14 22.5H12.5C8.729 22.5 6.843 22.5 5.672 21.328C4.501 20.156 4.5 18.271 4.5 14.5V10.5Z" stroke="black" stroke-width="1.5"/>
                            <path d="M10.3 12.474C9.87303 11.73 9.66703 11.123 9.54303 10.507C9.35903 9.59698 9.78003 8.70698 10.476 8.13898C10.771 7.89898 11.108 7.98098 11.282 8.29398L11.675 8.99898C11.986 9.55698 12.142 9.83698 12.111 10.133C12.081 10.429 11.871 10.67 11.451 11.153L10.3 12.474ZM10.3 12.474C11.2001 14.0164 12.4836 15.2999 14.026 16.2M14.026 16.2C14.77 16.627 15.377 16.833 15.993 16.957C16.903 17.141 17.793 16.72 18.361 16.024C18.601 15.729 18.519 15.392 18.206 15.218L17.502 14.825C16.942 14.514 16.663 14.358 16.367 14.389C16.071 14.419 15.83 14.629 15.347 15.049L14.026 16.2Z" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
                            <path d="M5.5 6.5H3M5.5 12.5H3M5.5 18.5H3" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Contact
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;