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


const HomeTop=()=>{
    const [assurances,set_assurances]=useState([
        {
            data:[
                "Auto",
                "Habitation",
                "Voyage",
                "RC chef de famille"
            ]   
        },
        {
            data:[
                "Voyage",
                "Accident",
                "Transport de marchandises",
                "Bris de glace",
                "Santé"
            ]
        }
    ])
    const [type,set_type]=useState(0);
    const [data,set_data]=useState(null);
    const [open,set_open]=useState(false);
    

    useEffect(()=>{
        set_data(assurances[type].data);
    },[type])

    const type_changed=(e)=>{
        const v=parseInt(e.target.value);
        set_type(v);
    }
    return(
        <div className="home_top" style={{backgroundImage:`url(${banner})`,backgroundRepeat: 'no-repeat',}}>
            <div className="top">
                <h1></h1>
                <h1 className="content">BIENVENUE CHEZ l'ONG ADESCO</h1>
            </div>
            <div className="center">
                <div></div>
                <div className="content">
                    <h2>Mieux connaitre l'ONG ADESCO</h2>
                    <button>
                        Vision, mission, valeurs et principes
                        <div>
                            <DriveEtaIcon  />
                        </div>
                    </button>
                    <div>
                        <button>Approches d'interventions
                        <div>
                            <HomeIcon  />
                        </div>
                        </button>
                        <button>Planification stratégiques
                        <div>
                            <FlightTakeoffIcon  />
                        </div>
                        </button>
                        <button>Organigramme
                        <div>
                            <PeopleIcon  />
                        </div>
                        </button>
                        <button>Status et agréments
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