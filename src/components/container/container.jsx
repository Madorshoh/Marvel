import Header from '../header/header'
import Slider from '../slider/slider'
import Card from '../card/Card'
import './container.css'

function Container() {
    return(
        <div className='containers'>
            <Header/>
            <Slider/>
            <Card />
        </div>
    )
}
export default Container