import './slider.css'
import SliderImg1 from "../../assets/img/imgSlider/slider-img-1.jpg"
import SliderImg2 from "../../assets/img/imgSlider/slider-img-2.jpg"
import SliderImg3 from "../../assets/img/imgSlider/slider-img-3.jpg"

function Slider() {
    
  return (
    <div className='slider-container'>
        <div className='slider-boxes'>
            <div className="slider-line">
                <div className="slider-box">
                    <img src={SliderImg1} alt="" />
                </div>
                {/* <div className="slider-box">
                    <img src={SliderImg2} alt="" />
                </div>
                <div className="slider-box">
                    <img src={SliderImg3} alt="" />
                </div> */}
                <div className='slider-btn'>
                    <button className='slidee-next'>Next</button>
                    <button className='slider-prev'>Prev</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Slider;