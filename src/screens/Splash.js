import "../styles/splash.scss";
import CircularProgress from '@material-ui/core/CircularProgress';

import {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setActivites, setPages, setPartenaires, 
    setRapports,
    setAvis,
    setBulletins,
    setAdescos,
    setLoading,
    setPhotos,
    setVideos,
} from "../features/counterSlice";

const Splash=()=>{
    const history=useHistory();
    const dispatch=useDispatch();
    useEffect(()=>{
        
            (async ()=>{
                dispatch(setLoading(true));
                await load_activites();
                await load_partenaires();
                await load_pages();
                await load_rapports();
                await load_avis();
                await load_bulletins();
                await load_adescos();
                await load_photos();
                await load_videos();
                dispatch(setLoading(false));
                
                history.replace("/home");
            })();
            
        
    },[])

    const load_activites=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/activites?per_page=100");
        const data=await res.json();
        dispatch(setActivites(data))
    }

    const load_partenaires=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/partenaires?per_page=100");
        const data=await res.json();
        dispatch(setPartenaires(data))
    }

    const load_pages=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/pages?per_page=100");
        const data=await res.json();
        dispatch(setPages(data))
    }

    const load_rapports=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/rapports?per_page=100");
        const data=await res.json();
        dispatch(setRapports(data))
    }

    const load_avis=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/avis?per_page=100");
        const data=await res.json();
        dispatch(setAvis(data))
    }

    const load_bulletins=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/bulletin?per_page=100");
        const data=await res.json();
        dispatch(setBulletins(data))
    }

    const load_adescos=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/adesco?per_page=100");
        const data=await res.json();
        dispatch(setAdescos(data))
    }

    const load_photos=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/photos?per_page=100");
        const data=await res.json();
        dispatch(setPhotos(data))
    }

    const load_videos=async ()=>{
        const res=await fetch("https://ongadesco.org/admin/wp-json/wp/v2/videos?per_page=100");
        const data=await res.json();
        dispatch(setVideos(data))
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