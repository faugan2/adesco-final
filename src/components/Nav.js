import "../styles/nav.scss";
import "../styles/nav_mobile.scss";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useState,useEffect} from "react";
import Modal from "./Modal";
import Contact from "./Contact";
import {useHistory} from "react-router-dom";

import ccm from "./img/ccm.jpg";
import adesco from "./img/adesco.jpg";
import { selectPage,selectAdescos, selectLoading } from "../features/counterSlice";
import {useSelector} from "react-redux";

const Nav=()=>{
    const p=useSelector(selectPage);
    const pages=useSelector(selectAdescos);
    const loading=useSelector(selectLoading);

    const history=useHistory();
    
    useEffect(()=>{
        if(loading==false && pages==null){
            history.push("/client");
        }
    },[pages,loading]);

    const [open,set_open]=useState(false);
    const [page,set_page]=useState(0);

    useEffect(()=>{
        if(p==null) return;
        set_page(p);
    },[p])

    
    const show_menu=(e)=>{
        const menu=document.querySelector(".right");
        menu.classList.toggle("active");
        const btn=document.querySelector(".nav>button")
        btn.classList.toggle("active")
    }

  
    return(
        <div className="nav">
            <div className="left" onClick={e=>{
                history.push("/client");
            }}>
                <img src={adesco}/> 
                <h1>ONG <span>ADESCO</span></h1>
            </div>
            <div className="right">
                <ul>
                    <li 
                        className={`${page==0 ? "active" : ""}`}
                    onClick={e=>{
                        history.push("/home");
                    }}>
                        <HomeIcon />
                        <Link><a>Accueil</a></Link>
                    </li>
                    <li 
                        className={`${page==1 ? "active" : ""}`}
                    onClick={e=>{
                        history.push("/activites");
                    }}>
                        <HelpOutlineIcon />
                        <Link to="/page-content"><a>Activités réalisées</a></Link>
                    </li>
                    <li 
                        className={`${page==2 ? "active" : ""}`}
                        onClick={e=>{
                        history.push("/rapports");
                    }}>
                        <TurnedInNotIcon />
                        <Link to="#"><a>Rapport d'activités</a></Link>
                    </li>

                    <li 
                    className={`${page==3 ? "active" : ""}`}
                    onClick={e=>{
                        history.push("/avis-bulletins");
                    }}>
                        <FolderOpenIcon />
                        <Link to="#"><a>Avis & Bulletin</a></Link>
                       
                    </li>
                    

                   

                    <li  onClick={e=>{set_open(true)}}>
                        <MailOutlineIcon />
                        <Link to="#"><a>Contact</a></Link>
                    </li>
                </ul>
            </div>

            <button onClick={show_menu} className="btn_show">
                <span></span>
                <span></span>
                <span></span>
            </button>

            {open==true && <Modal content={<Contact click={e=>{set_open(false)}}/>} click={e=>{set_open(false)}}/>}
        </div>
    )
}
export default Nav;