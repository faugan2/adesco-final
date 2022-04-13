import "../styles/informer.scss";
import "../styles/informer_mobile.scss";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import un from "./img/1.jpg";

import { useSelector } from "react-redux";
import {selectActivites} from "../features/counterSlice";
import {useState,useEffect} from "react";

const Informer=()=>{
    const activites=useSelector(selectActivites);

    const [data,set_data]=useState(null);

    useEffect(()=>{
        if(activites==null) return;
        set_data(activites);
    },[activites])
    return(
        <div className="informer">
            <div className="top">
                <button>
                    <MenuBookIcon />
                </button>
                <h1>Nos archives <hr /></h1>
                <button className="btn_all">
                    <MoreHorizIcon style={{color:"white"}}/>
                    <span>
                    Tous nos archives</span>
                </button>
            </div>
            <div className="content">

                {
                    data?.map((item,i)=>{
                        return(
                            <div key={i}>
                                <div>
                                    <img src={item.acf.image} />
                                    <h3>{item.title.rendered}</h3>
                                </div>
                                <p>{item.acf.resume}</p>
                            </div>
                        );
                    })
                }
                

                

            
            </div>
        </div>
    );
}
export default Informer;