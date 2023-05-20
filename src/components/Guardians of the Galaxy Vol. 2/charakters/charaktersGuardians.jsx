import './charaktersGuradians.css'
import ImgChris from "../../../assets/img/actors/Chris Pratt.jpg"
import ImgZoe from "../../../assets/img/actors/Zoe Saldana.jpg"
import ImgDave from "../../../assets/img/actors/Dave Bautista.jpg"

const Charakters = () => {
    
    return (  
        <>
            <div className='charakters-container'>
                <h2>CHARAKTERS</h2>
                <div className="charakter-card">
                    <div className="characted-box">
                        <img src={ImgChris} alt="Chris Prat" width={250} />
                        <p className='actors-film-in-name'>STAR-LORD</p>
                        <p className='actors-name'>Chris Pratt</p>
                    </div>
                    <div className="characted-box">
                        <img src={ImgZoe} alt="Zoe Saldana" width={250} />
                        <p className='actors-film-in-name'>GAMORA</p>
                        <p className='actors-name'>Zoe Saldana</p>
                    </div>
                    <div className="characted-box">
                        <img src={ImgDave} alt="Zoe Saldana" width={250} />
                        <p className='actors-film-in-name'>DRAX</p>
                        <p className='actors-name'>Dave Bautista</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Charakters;