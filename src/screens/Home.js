import "../styles/home.scss";
import Nav from "../components/Nav";
import HomeTop from "../components/HomeTop";
import Parteners from "../components/Parteners";
import Engagements from "../components/Engagements";
import Who from "../components/Who";
import Une from "../components/Une";
import Informer from "../components/Informer";
import Footer from "../components/Footer";
import {useState,useEffect} from "react";
import {useDispatch} from "react-redux";
import {setPage} from "../features/counterSlice";

const Home=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(setPage(0))
    },[])
    return(
        <div className="home">
            <Nav />
            <HomeTop />
           
            <Engagements />
            <Who />
            <Une />
            <Informer />
            <Parteners />
            <Footer />
        </div>
    )
}
export default Home;