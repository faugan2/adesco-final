import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectPartenaires, selectVisite } from '../features/counterSlice';
import "../styles/stats.scss";
import CircularProgress from '@material-ui/core/CircularProgress';
import Contact from './Contact';
const moment=require("moment");

export default function Stats() {
    const p=useSelector(selectPartenaires);
    const v=useSelector(selectVisite);

    const [data_partenaires,set_data_partenaires]=useState(null);
    const [visites,set_visites]=useState(null);
    const [cette_annee,set_cette_annee]=useState(0);
    const [ce_mois,set_ce_mois]=useState(0);
    const [cette_semaine,set_cette_semaine]=useState(0);
    const [aujourdhui,set_aujourdhui]=useState(0);
    const [enligne,set_enligne]=useState(0);

    useEffect(()=>{
        if(p==null) return;
        set_data_partenaires(p);
        console.log(p)
    },[p])

    useEffect(()=>{
        if(v==null) return;
        set_visites(v);

        const annee=moment().format("YYYY");
        const res=v?.filter((item,i)=>{
            const date=moment(item.date?.seconds*1000).format("YYYY")
            return date==annee;
        })
        set_cette_annee(res.length);

        const mois=moment().format("MMM YYYY");
        const res2=v?.filter((item,i)=>{
            const m=moment(item.date?.seconds*1000).format("MMM YYYY")
            return m==mois;
        })
        set_ce_mois(res2.length);

        const week=moment().isoWeek();
        const res3=v?.filter((item,i)=>{
            const m=moment(item.date?.seconds*1000).isoWeek();
            return m==week;
        })
        set_cette_semaine(res3.length);

        const today=moment().format("ll")
        const res4=v?.filter((item,i)=>{
            const m=moment(item.date?.seconds*1000).format("ll");
            return m==today;
        })
        set_aujourdhui(res4.length)

        const res5=v?.filter((item,i)=>{
            const d=moment(item.date?.seconds*1000).fromNow();
            console.log(d)
            if(d.includes("a few seconds")){
                return true;
            }
            if(!d.includes("minutes")){
                return false;
            }
            let dd=d.replace("minutes ago","");
            dd=parseInt(dd);
            console.log(dd,50)
            return dd<=50;
        })

        set_enligne(res5.length)

       
    },[v])

    
  return (
    <div className="stats">
        <div className="stat">
            <div className="stat_top">
                Visite du site
            </div>
            <div className="stat_body">
                <div className="flex flex-row justify-between m-2">
                    <p className="text-base font-semibold">Total Visite</p>
                    <p className="text-base">{visites?.length}</p>
                </div>

                <div className="flex flex-row justify-between m-2">
                    <p className="text-base font-semibold">Cette Année</p>
                    <p className="text-base">{cette_annee}</p>
                </div>

                <div className="flex flex-row justify-between m-2">
                    <p className="text-base font-semibold">Ce Mois</p>
                    <p className="text-base">{ce_mois}</p>
                </div>

                <div className="flex flex-row justify-between m-2">
                    <p className="text-base font-semibold">Cette Semaine</p>
                    <p className="text-base">{cette_semaine}</p>
                </div>

                <div className="flex flex-row justify-between m-2">
                    <p className="text-base font-semibold">Aujourd'hui</p>
                    <p className="text-base">{aujourdhui}</p>
                </div>

                <div className="flex flex-row justify-between m-2">
                    <p className="text-base font-semibold">En ligne</p>
                    <p className="text-base">{enligne}</p>
                </div>

            </div>
        </div>

        <div className="stat">
            <div className="stat_top">
                Nos Partenaires
            </div>
            <div className="stat_body">
                {data_partenaires==null && <CircularProgress />}
                {(data_partenaires!=null && data_partenaires?.length==0 ) && <p>Aucune information n'est trouvée</p>}

                {(data_partenaires!=null && data_partenaires?.length>0) && 
                
                <div className="flex flex-col items-center">
                    {data_partenaires?.map((item,i)=>{
                       const title=item?.title?.rendered;
                       const src=item?.acf?.image?.url;
                        return(
                            <div key={i}  className="mb-2">
                                <img src={src} className="w-32 h-16" />
                            </div>
                        );
                    })}
                </div>    
                }
            </div>
        </div>

        <div className="stat">
            <div className="stat_top">
                Nous Contacter
            </div>
            <div className="stat_body">
                <Contact />
            </div>
        </div>
    </div>
  )
}
