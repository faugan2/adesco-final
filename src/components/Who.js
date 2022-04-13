import "../styles/who.scss";
import "../styles/who_mobile.scss";
import {useSelector} from "react-redux";
import { selectPages } from "../features/counterSlice";
import {useState,useEffect} from "react";

const Who =()=>{
    const p=useSelector(selectPages);

    const [data,set_data]=useState(null);

    useEffect(()=>{
        if(p==null) return;
        const res=p.filter((item)=>{
            return item.id==55;
        })
        if(res.length==0) return;
        set_data(res[0]);
    },[p])
    return(
        <div className="who">
            <div className="content">
                <h1>QUI SOMMES-NOUS ?</h1>
                <div    dangerouslySetInnerHTML={{__html:data?.content.rendered}}/>
            </div>
        </div>
    );
}
export default Who;