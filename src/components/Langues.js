import React from 'react'
import fr from "./img/fr.png";
import ang from "./img/ang.png";

import {LanguageList} from "react-translator-component";

export default function Langues({click}) {
    const data=[
        {id:1,langue:"Français",icon:fr},
        {id:2,langue:"Anglais",icon:ang}
    ];
  return (
    <div className="h-32 w-64 flex gap-4 items-center justify-center rounded-md" >
        {data.map((item,i)=>{
            return <div key={i} className="p-1 flex flex-col items-center m-1 cursor-pointer" onClick={()=>{
                //alert("ok dakor");
                click();
            }}>
                <img src={item.icon} className="w-8 h-8 rounded-md"/>
                <p className="text-xs">{item.langue}</p>

            </div>
        })}

        
    </div>
  )
}
