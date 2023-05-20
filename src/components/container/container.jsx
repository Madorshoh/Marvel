import Header from '../header/header'
import Slider from '../slider/slider'
import Card from '../card/Card'
import './container.css'
import Guardians from '../Guardians of the Galaxy Vol. 2/guardians_of_the_galaxy_vol_2'

function Container() {
    return(
        <div className='containers'>
            <div className="container-box-shadow">
                <Header/>
                <Slider/>
                <Guardians />
                <Card />
            </div>
        </div>
    )
}
export default Container