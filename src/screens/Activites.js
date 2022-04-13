import "../styles/activites.scss";
import "../styles/activites_mobile.scss";
import Nav from "../components/Nav";
import HomeTop from "../components/HomeTop";
import Parteners from "../components/Parteners";
import Engagements from "../components/Engagements";
import Who from "../components/Who";
import Une from "../components/Une";
import Informer from "../components/Informer";
import Footer from "../components/Footer";

import { useSelector } from "react-redux";
import {selectActivites} from "../features/counterSlice";
import {useState,useEffect} from "react";


const Activites=()=>{

    const activites=useSelector(selectActivites);

    const [data,set_data]=useState(null);

    useEffect(()=>{
        if(activites==null) return;
        set_data(activites);
    },[activites])


    return(
        <div className="activites">
            <Nav />
                <div className="content">
                   {
                       data?.map((item,i)=>{
                           return(
                               <div key={i}>
                                    <img src={item.acf.image} />
                                    <h4>{item.title.rendered}</h4>
                                    <p>{item.acf.resume}</p>
                                </div>
                           )
                       })
                   }
                </div>
            <Footer />
        </div>
    );
}
export default Activites;