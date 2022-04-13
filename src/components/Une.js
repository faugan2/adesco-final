import "../styles/une.scss";
import "../styles/une_mobile.scss";
import banner from "./img/banner.webp";
import auto from "./img/auto.jpg";
import garantie from "./img/garantie.jpg";
import sanction from "./img/sanction.jpg";
import { useSelector } from "react-redux";
import {selectActivites} from "../features/counterSlice";
import {useState,useEffect} from "react";

const Une=()=>{
    const activites=useSelector(selectActivites);

    const [data,set_data]=useState(null);

    useEffect(()=>{
        if(activites==null) return;
        set_data(activites);
    },[activites])
    return(
        <div className="une">
            <div className="top">
                <h1>A la une</h1>
                <h2>Les dernières actualités et activités d'ADESCO</h2>
            </div>
            <div className="content">

                {
                    data?.map((activite,i)=>{
                        return(
                            <div>
                                <img src={activite.acf.image} />
                                <h2>{activite.title.rendered}</h2>
                                <p>{activite.acf.resume}</p>
                            </div>
                        );
                    })
                }
                
            </div>
        </div>
    );
}
export default Une;