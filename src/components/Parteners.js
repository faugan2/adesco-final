import "../styles/parteners.scss";
import "../styles/parteners_mobile.scss";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import assitchape from "./img/assitchape.png";
import foaf from "./img/foaf.png";
import {useState,useEffect} from "react";
import ccm from "./img/ccm.jpg";
import sici from "./img/sici.jpg";
import a2w from "./img/logo3.jpeg";
import get_driver from "./img/get_driver.jpeg";
import adesco from "./img/adesco.jpg";
import jsql from "./img/jsql.png";
import { useSelector } from "react-redux";
import {selectPartenaires} from "../features/counterSlice";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Parteners=()=>{
    const p=useSelector(selectPartenaires);

    const [data,set_data]=useState(null);

    useEffect(()=>{
        if(p==null) return;
        set_data(p);
    },[p])

    return null;
    return(
        <div className="parteners">
           <Slide>
                {
                    data?.map((item,i)=>{
                        
                        return (
                            <div className="each-slide-effect" key={i}>
                                <div style={{ 'backgroundImage': `url(${item.acf.image.url})` }}>
                                    <span>{item.title.rendered}</span>
                                </div>
                            </div>
                        )
                        
                    })
                }
                </Slide>

               
        </div>
    );
}
export default  Parteners;