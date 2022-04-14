import "../styles/page_content.scss";
import "../styles/page_content_mobile.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useSelector,useDispatch} from "react-redux";
import { selectAdescos,selectActivite ,setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";

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
        <div className="page_content">
            <Nav />
                <div className="content">
                    
                <h2>{data?.title.rendered}</h2>
                <div   dangerouslySetInnerHTML={{__html:data?.acf.details}}/>
                </div>
            <Footer />
        </div>
    );
}
export default PageContent;