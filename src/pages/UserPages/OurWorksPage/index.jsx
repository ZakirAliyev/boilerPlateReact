import Navbar from "../../../components/UserComponents/Navbar/index.jsx";
import Footer from "../../../components/UserComponents/Footer/index.jsx";
import HomeBanner from "../../../components/UserComponents/HomeBanner/index.jsx";
import Faq from "../../../components/UserComponents/Faq/index.jsx";

function HomePage() {
    return (
        <section id={"homePage"}>
            <Navbar/>
            <HomeBanner/>
            <Faq/>
            {/*<Footer/>*/}
        </section>
    );
}

export default HomePage;