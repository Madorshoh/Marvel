import './card.css'
import{ useState,useEffect } from 'react'

function Card() {
    
    const [data, setData] =useState()
    
    const URl = 'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies'
    
    useEffect(()=>{
        fetch(URl)
        .then((response)=>response.json())
        .then((data) => setData(data));
    
    },[])
    // console.log(data);

    return(
        <div className="card-container" >
            {
                data?.map((item) => {
                    return(
                        <div className="card-boxes" key={item.Title}>
                            <div className="card-poster">
                                <img src={item.Poster} alt="" />
                            </div>
                            <div className='card-text'>
                            <div className="card-title">{item.Title}</div>
                            <div className="card-year">{item.Year}</div>
                            <div className="card-runtime">{item.Runtime}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Card