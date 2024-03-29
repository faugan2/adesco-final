import "../styles/rapports.scss";
import "../styles/rapports_mobile.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectRapports} from "../features/counterSlice";
import {useState,useEffect} from "react";
import GetAppIcon from '@material-ui/icons/GetApp';
import {useDispatch} from "react-redux";
import {setPage} from "../features/counterSlice";

const PageContent=()=>{

    const r=useSelector(selectRapports);

    const [data,set_data]=useState(null);

    useEffect(()=>{
        if(r==null) return;
        set_data(r);
    },[r])

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(setPage(2))
    },[])


    return(
        <>
        <Nav />
        
        <div className="rapports">
            
                <div className="content">
                    <h2>Nos rapports d'activités</h2>
                    <div>
                    {
                        data?.map((item,i)=>{
                            return(
                                <div key={i}>
                                    <h3>Année {item.acf.annee}</h3>
                                    <p>{item.acf.note}</p>
                                    <button onClick={e=>{
                                        window.open(
                                            item.acf.fichier,
                                            '_blank'
                                          );
                                    }}>
                                        <GetAppIcon />
                                        Telécharger</button>
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
            <Footer />
        </div>
        </>
    );
}
export default PageContent;