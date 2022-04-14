import "../styles/page_content.scss";
import "../styles/page_content_mobile.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useSelector} from "react-redux";
import { selectAdescos } from "../features/counterSlice";
import {useState,useEffect} from "react";

const PageContent=()=>{

    const p=useSelector(selectAdescos);

    const [data,set_data]=useState(null);

    useEffect(()=>{
        if(p==null) return;
        const res=p.filter((item)=>{
            return item.id==119;
        })
        if(res.length==0) return;
        set_data(res[0]);
    },[p])


    return(
        <div className="page_content">
            <Nav />
                <div className="content">
                    
                <h2>{data?.title.rendered}</h2>
                <div   dangerouslySetInnerHTML={{__html:data?.acf.description}}/>
                </div>
            <Footer />
        </div>
    );
}
export default PageContent;