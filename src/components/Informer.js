import "../styles/informer.scss";
import "../styles/informer_mobile.scss";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import un from "./img/1.jpg";

import { useSelector,useDispatch } from "react-redux";
import {selectActivites,setActivite} from "../features/counterSlice";
import {useState,useEffect} from "react";
import {useHistory} from "react-router-dom";

const Informer=()=>{
    const history=useHistory();
    const dispatch=useDispatch();
    const activites=useSelector(selectActivites);

    const [data,set_data]=useState(null);

    useEffect(()=>{
        if(activites==null) return;
        let a=[...activites];
        
        set_data(a.reverse());
    },[activites])
    return(
        <div className="informer">
            <div className="top">
                <button>
                    <MenuBookIcon />
                </button>
                <h1>Nos archives <hr /></h1>
                <button className="btn_all"
                    onClick={e=>{
                        history.push("/activites");
                    }}
                >
                    <MoreHorizIcon style={{color:"white"}}/>
                    <span>
                    Toutes nos publications</span>
                </button>
            </div>
            <div className="content">

                {
                    data?.map((item,i)=>{
                        return(
                            <div key={i} onClick={e=>{
                                dispatch(setActivite(item));
                                history.push("/details-activite")
                            }}
                            
                            >
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