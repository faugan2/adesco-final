import "../styles/page_content.scss";
import "../styles/page_content_mobile.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useSelector,useDispatch} from "react-redux";
import { selectAdescos, selectCategorie_galerie, selectPhotos ,setSelected_categorie} from "../features/counterSlice";
import {useState,useEffect} from "react";
import {useHistory} from "react-router-dom";

const PageContent=()=>{

    const p=useSelector(selectPhotos);
    const cat=useSelector(selectCategorie_galerie);

    const [data,set_data]=useState(null);
    const [categories,set_categories]=useState(null);

    const history=useHistory();
    const dispatch=useDispatch();

    useEffect(()=>{
        if(p==null) return;
        if(cat==null) return;

        set_data(p);
        set_categories(cat);
    },[p,cat])

    const go_to_photos=(id)=>{
        dispatch(setSelected_categorie(id))
        history.push("/photos");
    }


    return(
        <>
         <Nav />
        
        <div className="page_content">
           
                <div className="content flex flex-col">
                    
                <h2>Catégories de galerie photos</h2>
                <div className="flex justify-between">
                    {
                        categories?.map((item,i)=>{
                            return(
                                <div key={i} className="flex-1 flex flex-col m-1 cursor-pointer hover:opacity-50"
                                title={item.id}
                                onClick={go_to_photos.bind(this,item.id)}
                                >
                                    <img src={item.acf.image.url} className="h-60 mb-2"/>
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