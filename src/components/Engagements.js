import "../styles/engagements.scss";
import "../styles/engagements_mobile.scss";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BusinessIcon from '@material-ui/icons/Business';
import un from "./img/1.jpg";
import deux from "./img/2.jpg";
import trois from "./img/3.jpg";
import quatre from "./img/4.png";
import cinq from "./img/5.jpg";
import six from"./img/6.jpg";
import sept from "./img/7.jpg";
import huit from "./img/8.jpg";

import {useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {selectPrestations,setPrestations} from "../features/counterSlice";

import {useHistory} from "react-router-dom";

const Engagements=()=>{
	
	const p=useSelector(selectPrestations);
	
	const [data,set_data]=useState(null);
    const [data2,set_data2]=useState([
        {
            image:un,
            title:"Privé : Promotion des Droits des Adolescents à la Santé Sexuelle et Génésique (DASSG)",
            detail:"Les adolescent (e)s et jeunes âgé(e)s de 10 à 24 ans qui représentent 30,6% de la"
        },
        {
            image:deux,
            title:"Privé : Mobilisation Communautaire / Renforcement de capacités",
            detail:"ADESCO est une ONG à but non lucratif qui jouit d’un réel ancrage communautaire et a une forte capacité"
        },
        {
            image:trois,
            title:"Privé : Promotion des Droits des Adolescents à la Santé Sexuelle et Génésique (DASSG)",
            detail:"Les adolescent (e)s et jeunes âgé(e)s de 10 à 24 ans qui représentent 30,6% de la"
        },
        {
            image:quatre,
            title:"Privé : Promotion des Droits des Adolescents à la Santé Sexuelle et Génésique (DASSG)",
            detail:"Les adolescent (e)s et jeunes âgé(e)s de 10 à 24 ans qui représentent 30,6% de la"
        },
        {
            image:cinq,
            title:"Privé : Promotion des Droits des Adolescents à la Santé Sexuelle et Génésique (DASSG)",
            detail:"Les adolescent (e)s et jeunes âgé(e)s de 10 à 24 ans qui représentent 30,6% de la"
        },
        {
            image:six,
            title:"Privé : Promotion des Droits des Adolescents à la Santé Sexuelle et Génésique (DASSG)",
            detail:"Les adolescent (e)s et jeunes âgé(e)s de 10 à 24 ans qui représentent 30,6% de la"
        },
        {
            image:sept,
            title:"Privé : Promotion des Droits des Adolescents à la Santé Sexuelle et Génésique (DASSG)",
            detail:"Les adolescent (e)s et jeunes âgé(e)s de 10 à 24 ans qui représentent 30,6% de la"
        },
        {
            image:huit,
            title:"Privé : Promotion des Droits des Adolescents à la Santé Sexuelle et Génésique (DASSG)",
            detail:"Les adolescent (e)s et jeunes âgé(e)s de 10 à 24 ans qui représentent 30,6% de la"
        },
    ])
	
	useEffect(()=>{
		if(p==null) return;
		set_data(p);
	},[p])
    
    return(
        <div className="engagements">
            <div className="top">
                <h1>Nos prestations</h1>
            </div>
            <div className="content">

                {
                    data?.map((item,i)=>{
                        return(
                            <div key={i}>
                                    <img src={item.acf?.image?.url} />
                                    <h3>{item.title.rendered}</h3>
                                    <p>{item.acf?.a_propos}</p>  
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
}
export default Engagements;