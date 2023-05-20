import GotgBanners from "./banners-gotg/gotg_banners";
import './guardians.css'
import ImgOwerGotg from "../../assets/img/guardiansImg/guardiansofthegalaxyvol2_lob_fea_dsk_01.jpg"
import Charakters from "./charakters/charaktersGuardians";
import { useState, useEffect} from "react";
import axios from "axios";


const Guardians = () => {
    const [guard, setGuard] = useState([])
    let gotgUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=97c6f53"
    
    // const Axios = ()=>{
    //     axios.get(gotgUrl)
    //     .then((res)=>setGuard(guardData))
    // }
    useEffect(()=>{
        fetch(gotgUrl)
            .then(Response => Response.json())
            .then((guardData)=>setGuard(guardData))
        // Axios()
    },[])

    return ( 
        <div className="guardians-container">
            <GotgBanners />
            <div className="owerwiew-container">
                <img src={ImgOwerGotg} alt="" className="ImgOwerGotg" />
                <div className="owerwiew">
                    <h2>OWERVIEW</h2>
                    
                        <div className="owerwiw-container-box">
                            <div className="owerview-container-left">
                                <p> <span className="plot">{guard.Plot}</span></p>
                                <div className="owerview-box">
                                    <div className="owerview-box-left">
                                        <p>Awards: <br /><span className="awards">{guard.Awards}</span></p>
                                        <p>BoxOffice: <br /> <span>{guard.BoxOffice}</span></p>
                                        <p>Country: <br /><span>{guard.Country}</span></p>
                                        <p>Director: <br /><span>{guard.Director}</span></p>
                                        <p>Genre: <br /><span>{guard.Genre}</span></p>
                                    </div>
                                    <div className="owerview-box-right">
                                        <p>Language: <br /><span>{guard.Language}</span></p>
                                        <p>Released: <br /><span>{guard.Released}</span></p>
                                        <p>Runtime: <br /><span>{guard.Runtime}</span></p>
                                        <p>Writer: <br /><span className="writer">{guard.Writer}</span></p>
                                        <p>Year: <br /><span>{guard.Year}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="owerview-img">
                                <img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" alt="" />
                            </div>

                        </div>
                    
                </div>
            </div>
            <Charakters/>
        </div>
     );
}
 
export default Guardians;

// Actors
// : 
// "Chris Pratt, Zoe Saldana, Dave Bautista"