import './slider.css'
import SliderImg1 from "../../assets/img/imgSlider/slider-img-1.jpg"
import SliderImg2 from "../../assets/img/imgSlider/slider-img-2.jpg"
import SliderImg3 from "../../assets/img/imgSlider/slider-img-3.jpg"

function Slider() {
    
  return (
    <div className='slider-container'>
        <div id="carouselExampleCaptions" className="carousel slide carusel-top">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={SliderImg1} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5>NEW ON MARVEL UNLIMITED</h5>
                    <p>Read these plus 30,000+ digital comics for $9.99 a month!</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={SliderImg2} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Star-Lord's Top 5 Costumes!</h5>
                    <p>Count down five of Star-Lord's out-of-this-world comic outfits! Video Production by Wild Comet Media</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={SliderImg3} className="d-block w-100" alt="..."></img>
                <div className="carousel-caption d-none d-md-block">
                    <h5>NEW COMICS THIS WEEK</h5>
                    <p>Check out the newest Marvel comics coming out this week!</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  );
}

export default Slider;