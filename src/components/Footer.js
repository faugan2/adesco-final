import "../styles/footer.scss";
import "../styles/footer_mobile.scss";
import {Link} from "react-router-dom";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import RoomIcon from '@material-ui/icons/Room';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="content">
                <div>
                    <h4>A propos de nous</h4>
                    <hr />
                    <ul>
                        <li><Link to="/vision"><a>Vision, mission, valeurs et principes partagés</a></Link></li>
                        <li><Link to="/approches-intervention"><a>Approches d'intervention</a></Link></li>
                        <li><Link to="/axes-strategiques"><a>Axes stratégiques</a></Link></li>
                        <li><Link to="/planification"><a>Planification stratégiques 2018-2023</a></Link></li>
                        <li><Link to="/organigramme"><a>Organigramme</a></Link></li>
                        <li><Link to="/status-agrements"><a>Status et agréments</a></Link></li>
                    </ul>
                </div>
                <div>
                <h4>Soutenir adesco</h4>
                <hr />
                    <ul>
                        <li><Link to="/travailler-avec-adesco"><a>Pourquoi travailler avec l'ONG ADESCO</a></Link></li>
                        <li><Link to="/faire-un-don"><a>Faire un don</a></Link></li>
                        <li><Link to="/nos-projets"><a>Nos projets</a></Link></li>
                        <li><Link to="/adhesion"><a>Adhésion</a></Link></li>
                        <li><Link to="/devenir-benevole"><a>Devenir bénévole</a></Link></li>
                    </ul>
                </div>
                <div>
                <h4>Galerie</h4>
                <hr />
                    <ul>
                        <li><Link to="/galerie-images"><a>Photos</a></Link></li>
                        <li><Link to="#"><a>Vidéos</a></Link></li>
                    </ul>
                </div>
                <div>
                <h4>Contacts</h4>
                <hr />
                    <ul>
                        <li>
                            <Link to="#">
                                <RoomIcon />
                                <a>
                                Siège social : Sokodé, Rue N°1.205, Maison N° 453, quartier Kpangalam<br />
                                BP : 322 – Sokodé-Togo
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <MailOutlineIcon />
                                <a>adesco@yahoo.fr</a>
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <CallIcon />
                                <a>+228 25 50 09 90</a>
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <WhatsAppIcon />
                                <a>+228 92 04 03 78</a>
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <FacebookIcon />
                                <a href="https://facebook.com/ongadesco">ONG ADESCO</a>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <div className="bottom">
                <div className="content">
                <p>ccmcourtiers.com - Copyright &copy; 2018-2022 - Tous droits résevés.</p>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;