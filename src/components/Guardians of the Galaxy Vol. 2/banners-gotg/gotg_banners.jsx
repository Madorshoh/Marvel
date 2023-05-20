import React from "react";
// import ImgGotg from "../../../assets/img/guardiansImg/gotg_vol_2_banner_2.png"
import ImgGuardians from "../../../assets/img/guardiansImg/guardians-banners.avif"
import './gotg.css'
import { useState,useEffect } from "react";

const GotgBanners = () => {
        const [guard, setGuard] = useState([])
        let gotgUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=97c6f53"
        
        useEffect(()=>{
            fetch(gotgUrl)
                .then(Response => Response.json())
                .then((guardData)=>setGuard(guardData))
        },[])


    return (
        <div className="banners-container">
            <div className="guardians-header">
                {
                    <h2>{guard.Title} </h2>
                }
            </div>
            <div className="guardians-img">
                {/* <img src={ImgGotg} alt="" className="imggotg"/> */}
                <img src={ImgGuardians} alt="" className="imgguardians"/>
            </div>
        </div>
     );
}
 
export default GotgBanners;