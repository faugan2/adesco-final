import "../styles/footer.scss";
import "../styles/footer_mobile.scss";
import {Link} from "react-router-dom";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import RoomIcon from '@material-ui/icons/Room';
import TwitterIcon from '@material-ui/icons/Twitter';

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
                        <li><Link to="/planification"><a>Planification stratégiques 2021-2025</a></Link></li>
                        <li><Link to="/organigramme"><a>Organigramme</a></Link></li>
                        <li><Link to="/status-agrements"><a>Statuts et agréments</a></Link></li>
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
                        <li><Link to="/galerie-videos"><a>Vidéos</a></Link></li>
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
                                <a>+228 90 14 68 75</a>
                            </Link>
                        </li>

                        <li>
                            <a target="_blank" href="https://facebook.com/adescosantedeveloppement">
                                <FacebookIcon />
                                <a href="https://facebook.com/adescosantedeveloppement" target="_blank">ONG ADESCO</a>
                            </a>
                        </li>
						
						
						<li>
                            <a  target="_blank" href="https://twitter.com/ongadesco">
                                <TwitterIcon />
                                <a href="https://twitter.com/ongadesco" target="_blank">ONG ADESCO</a>
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <div className="bottom">
                <div className="content">
                <p className="text-center">ongadesco.org - Copyright &copy; 2018-2022 - Tous droits résevés.</p>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;