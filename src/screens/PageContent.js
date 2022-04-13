import "../styles/page_content.scss";
import "../styles/page_content_mobile.scss";
import Nav from "../components/Nav";
import HomeTop from "../components/HomeTop";
import Parteners from "../components/Parteners";
import Engagements from "../components/Engagements";
import Who from "../components/Who";
import Une from "../components/Une";
import Informer from "../components/Informer";
import Footer from "../components/Footer";
const PageContent=()=>{
    return(
        <div className="page_content">
            <Nav />
                <div className="content">
                    hree we go for the content
                </div>
            <Footer />
        </div>
    );
}
export default PageContent;