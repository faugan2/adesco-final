import "../styles/contact.scss";
import "../styles/contact_mobile.scss";
import CloseIcon from '@material-ui/icons/Close';
const Contact=({click})=>{
    return(
        <div className="contact">
            <div className="top">
                <h2>Contactez l'ONG ADESCO</h2>
                <button onClick={click}>
                    <CloseIcon />
                </button>
            </div>
            <div className="line">
                <label>Votre nom complet</label>
                <input type="text" />
            </div>

            <div className="line">
                <label>Votre adresse Email</label>
                <input type="email" />
            </div>

            <div className="line">
                <label>Votre numéro de téléphone</label>
                <input type="tel" />
            </div>

            <div className="line">
                <label>Votre message</label>
                <textarea />
            </div>

            <div className="line">
                <button onClick={click}>Envoyez le message</button>
            </div>

        </div>
    );
}
export default Contact;