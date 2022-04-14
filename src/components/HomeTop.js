import "../styles/home_top.scss";
import "../styles/home_top_mobile.scss";
import banner from "./img/banner.webp";
import AirplayIcon from '@material-ui/icons/Airplay';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HomeIcon from '@material-ui/icons/Home';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import PeopleIcon from '@material-ui/icons/People';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useState,useEffect} from "react";
import Modal from "./Modal";
import Contact from "./Contact";

import {useHistory} from "react-router-dom";

import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.jpeg";
import slide4 from "./img/slide4.jpg";

import SimpleImageSlider from "react-simple-image-slider";
import {useSelector} from "react-redux";
import {selectPhotos} from "../features/counterSlice";

const images = [
    { url: slide1 },
    { url: slide2 },
    { url: slide3 },
    { url: slide4 },
  ];

const HomeTop=()=>{
    const p=useSelector(selectPhotos);

    const [type,set_type]=useState(0);
    const [data,set_data]=useState(null);
    const [open,set_open]=useState(false);
    const [photos,set_photos]=useState(null);
    const [texts,set_texts]=useState(null);
    const [text,set_text]=useState("")

    useEffect(()=>{
        if(p==null) return;
        const d=[];
        const t=[];
        const res=p.map((item)=>{
           t.push(item.title.rendered);
           d.push({url:item.acf.file.url});
        })

        set_texts(t);
        set_photos(d);
        set_text(t[0]);
    },[p]);

    const history=useHistory();

    const show_text=(index,len)=>{
        if(texts==null) return;
        set_text(texts[index-1]);
    }

    return(
        <div className="home_top" style={{backgroundImage:`url(${banner})`,backgroundRepeat: 'no-repeat',}}>
            <div className="top">
                <h1></h1>
                <h1 className="content">BIENVENUE CHEZ l'ONG ADESCO</h1>
            </div>
            <div className="center">
                <div className="left" onClick={e=>{
                    history.push("/galerie-images");
                }}>
                {photos!=null && <SimpleImageSlider
                    width={300}
                    height={350}
                    images={photos}
                    showBullets={false}
                    showNavs={false}
                    autoPlay={true}
                    navMargin={0}
                    autoPlayDelay={3.5}
                    navStyle={2}
                    onCompleteSlide={show_text}
                />}
                <div>
                <p style={{zIndex:"999"}}>{text}</p>
                </div>
               
                </div>
                <div className="content">
                    <h2>Mieux connaitre l'ONG ADESCO</h2>
                    <button onClick={e=>{
                        history.push("/vision");
                    }}>
                        Vision, mission, valeurs et principes
                        <div>
                            <DriveEtaIcon  />
                        </div>
                    </button>
                    <div>
                        <button onClick={e=>{
                            history.push("/approches-intervention")
                        }}>Approches d'interventions
                        <div>
                            <HomeIcon  />
                        </div>
                        </button>
                        <button onClick={e=>{
                            history.push("/planification")
                        }}>Planification stratégiques
                        <div>
                            <FlightTakeoffIcon  />
                        </div>
                        </button>
                        <button onClick={e=>{
                            history.push("/organigramme")
                        }}>Organigramme
                        <div>
                            <PeopleIcon  />
                        </div>
                        </button>
                        <button onClick={e=>{
                            history.push("/status-agrements");
                        }}>Status et agréments
                        <div>
                            <MoreHorizIcon  />
                        </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h2>Besoin d'en savoir plus ?</h2>
                    <h2 style={{color:"indianred"}}>Voulez-vous adhérer ?</h2>
                    <h2>Voulez-vous faire un don ?</h2>
                    
                    <button onClick={e=>set_open(true)}>Nous conacter</button>
                </div>
                
            </div>

            {open==true && <Modal content={<Contact click={e=>{set_open(false)}}/>} click={e=>{set_open(false)}}/>}
        </div>
    );
}

export default HomeTop;