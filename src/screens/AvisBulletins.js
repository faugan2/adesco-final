import "../styles/avis.scss";
import "../styles/avis_mobile.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectAvis,selectBulletins} from "../features/counterSlice";
import {useState,useEffect} from "react";
import GetAppIcon from '@material-ui/icons/GetApp';
import {useDispatch} from "react-redux";
import {setPage} from "../features/counterSlice";
const PageContent=()=>{

    const a=useSelector(selectAvis);
    const b=useSelector(selectBulletins);

    const [data,set_data]=useState(null);
    const [data2,set_data2]=useState(null);

    useEffect(()=>{
        if(a==null) return;
        set_data(a);
    },[a])

    useEffect(()=>{
        if(b==null) return;
        set_data2(b);
    },[b])

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(setPage(3))
    },[])


    return(
        <>
        <Nav />
        
        <div className="avis">
            
                <div className="content">
                    <h2>Avis</h2>
                    <div>
                    {
                        data?.map((item,i)=>{
                            return(
                                <div key={i}>
                                    <h3>{item.acf.titre}</h3>
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

                    <h2>Bullettins</h2>
                    <div>
                    {
                        data2?.map((item,i)=>{
                            return(
                                <div key={i}>
                                    <h3>{item.acf.titre}</h3>
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