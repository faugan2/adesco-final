import "../styles/page_content.scss";
import "../styles/page_content_mobile.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useSelector} from "react-redux";
import { selectAdescos, selectPhotos, selectVideos } from "../features/counterSlice";
import {useState,useEffect} from "react";

const PageContent=()=>{

    const p=useSelector(selectVideos);

    const [data,set_data]=useState(null);

    useEffect(()=>{
        if(p==null) return;

        set_data(p);
    },[p])


    return(
        <div className="page_content">
            <Nav />
                <div className="content">
                    
                <h2>galerie vidéos</h2>
                <div className="galerie_image">
                    {
                        data?.map((item,i)=>{
                            var url=item.acf.lien;
                            url=url.split("/");
                            
                            url=`https://www.youtube.com/embed/${url[3]}`;
                            console.log("url=",url);
                            return(
                                <div key={i}>
                                   <iframe src={url} controls ></iframe>
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