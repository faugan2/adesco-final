import "../styles/splash.scss";
import CircularProgress from '@material-ui/core/CircularProgress';

import {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setActivites, setPages, setPartenaires, setRapports} from "../features/counterSlice";

const Splash=()=>{
    const history=useHistory();
    const dispatch=useDispatch();
    useEffect(()=>{
        
            (async ()=>{
                await load_activites();
                await load_partenaires();
                await load_pages();
                await load_rapports();
                history.replace("/home");
            })();
            
        
    },[])

    const load_activites=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/activites");
        const data=await res.json();
        dispatch(setActivites(data))
    }

    const load_partenaires=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/partenaires");
        const data=await res.json();
        dispatch(setPartenaires(data))
    }

    const load_pages=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/pages");
        const data=await res.json();
        dispatch(setPages(data))
    }

    const load_rapports=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/rapports");
        const data=await res.json();
        dispatch(setRapports(data))
    }
    return (
        <div className="splash">
           <div>
               <CircularProgress size={25} />
               <p>Chargement...</p>
           </div>
           
        </div>
    )
}

export default Splash;