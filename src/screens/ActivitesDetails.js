import "../styles/page_content.scss";
import "../styles/page_content_mobile.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useSelector,useDispatch} from "react-redux";
import { selectAdescos,selectActivite ,setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";
import { RWebShare } from "react-web-share";

const PageContent=()=>{
    const dispatch=useDispatch();
    const p=useSelector(selectActivite);

    const [data,set_data]=useState(null);
    useEffect(()=>{
        dispatch(setPage(-1));
    },[])

    useEffect(()=>{
        if(p==null) return;
        
        set_data(p);
    },[p])


    return(
        <>
            <Nav />
            <div className="page_content">
            
                <div className="content">
                    
                <h2>{data?.title.rendered}</h2>
                <div   dangerouslySetInnerHTML={{__html:data?.acf.details}}/>
                </div>

                <center><RWebShare
                    data={{
                    text: data?.acf?.resume,
                    url: data?.link,
                    title: data?.title.rendered
                    }}
                    onClick={() => console.log("shared successfully!")}
                >
                    <button
                    className="bg-green-400 p-1 mb-2 w-32"
                    >Partager 🔗</button>
                </RWebShare></center>
            <Footer />
        </div>
        </>
        
    );
}
export default PageContent;