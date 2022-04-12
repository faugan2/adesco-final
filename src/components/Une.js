import "../styles/une.scss";
import "../styles/une_mobile.scss";
import banner from "./img/banner.webp";
import auto from "./img/auto.jpg";
import garantie from "./img/garantie.jpg";
import sanction from "./img/sanction.jpg";
const Une=()=>{
    return(
        <div className="une">
            <div className="top">
                <h1>A la une</h1>
                <h2>Les dernières actualités et activités d'ADESCO</h2>
            </div>
            <div className="content">
                <div>
                    <img src={auto} />
                    <h2>Contrat d’assurance auto : quelle obligation ?</h2>
                    <p>
                    Au Togo, la loi impose que tout véhicule terrestre à moteur en état de circuler doit être 
                    couvert par une assurance.

                    </p>
                </div>
                <div>
                    <img src={sanction} />
                    <h2>Voiture non assurée : quelles sanctions ?</h2>
                    <p>
                    La loi sur l’assurance auto concerne aussi bien les véhicules en circulation que ceux qui 
                    ne circulent pas.Pour prouver que vous êtes assuré, 

                    </p>
                </div>
                <div>
                    <img src={garantie} />
                    <h2>Quelles sont les garanties d’assurance exigées par la loi?</h2>
                    <p>
                    Pour conduire un véhicule au Togo, vous devez obligatoirement souscrire la garantie 
                    d'assurance Responsabilité civile. 
                    </p>
                </div>
                <div>
                    <img src={banner} />
                    <h2>Est-ce que je suis obligé de souscrire une assurance auto?</h2>
                    <p>Oui, la loi vous y oblige. Vous serez passible d’une amende si vous êtes pris à
                         </p>
                </div>
            </div>
        </div>
    );
}
export default Une;