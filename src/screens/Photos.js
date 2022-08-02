import "../styles/page_content.scss";
import "../styles/page_content_mobile.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useSelector} from "react-redux";
import { selectAdescos, selectCategorie_galerie, selectPhotos, selectSelected_categorie } from "../features/counterSlice";
import {useState,useEffect} from "react";
import {useHistory,useParams} from "react-router-dom";

const PageContent=()=>{

    const p=useSelector(selectPhotos);
    const cat=useSelector(selectCategorie_galerie);
    const s=useSelector(selectSelected_categorie);

    const [data,set_data]=useState(null);
    const [categories,set_categories]=useState(null);

    const history=useHistory();
    console.log("s=",s);

    useEffect(()=>{
        if(p==null) return;
        if(cat==null) return;
        if(s==null) return;

        const res_cat=cat.filter((item,i)=>{
            return item.id==s;
        })
        if(res_cat.length>0){
            set_categories(res_cat[0])
        }

        const res=p.filter((item,i)=>{
            return item.acf.categories==s;
        })
       
        
        set_data(res);
        //set_categories(cat);
    },[p,cat,s])

    const go_to_photos=(id)=>{
        history.push("/photos",{id});
    }


    return(
        <>
         <Nav />
        
        <div className="page_content">
           
                <div className="content">
                    
                <h2>{categories?.title.rendered}</h2>
                <div className="galerie_image">
                    {
                        data?.map((item,i)=>{
                            return(
                                <div key={i} className="flex-1 flex flex-col m-1 cursor-pointer hover:opacity-50"
                               
                                
                                >
                                    <img src={item.acf.file.url} className="h-60 mb-2"/>
                                    <p className="text-center">{item.title.rendered}</p>
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