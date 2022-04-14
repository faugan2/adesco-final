import "../styles/page_content.scss";
import "../styles/page_content_mobile.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useSelector} from "react-redux";
import { selectAdescos, selectPhotos } from "../features/counterSlice";
import {useState,useEffect} from "react";

const PageContent=()=>{

    const p=useSelector(selectPhotos);

    const [data,set_data]=useState(null);

    useEffect(()=>{
        if(p==null) return;

        set_data(p);
    },[p])


    return(
        <div className="page_content">
            <Nav />
                <div className="content">
                    
                <h2>galerie photos</h2>
                <div className="galerie_image">
                    {
                        data?.map((item,i)=>{
                            return(
                                <div key={i}>
                                    <img src={item.acf.file.url} />
                                    <p>{item.title.rendered}</p>
                                </div>
                            );
                        })
                    }
                </div>
                </div>
            <Footer />
        </div>
    );
}
export default PageContent;