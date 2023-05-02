import './header.css'
import HeaderImgMarvel from '../../assets/img/marvel.png'
import HeaderImgSearch from '../../assets/img/search-icon.png'

function Header() {
  return (
    <div className='header-containers'>
  
      <div className='header-top'>
  
        <div className='header-left'>
          <svg
            width={'30px'}
            height={'30px'}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 65.6 66.7"
          >
            <path
              fill-rule="evenodd"
              d="M59.5 15.1L53 51.4c0 .4-.3.6-.6.6h-6.5c-.3 0-.6-.2-.8-.6l-8.8-24.7H36l-4.3 24.7c-.1.3-.3.6-.6.6H25c-.3 0-.6-.2-.5-.6l6.6-37.3c.1-.3.3-.6.6-.6h6.4c.5 0 .7.2.8.6l8.8 24.7h.3l5.5-30.4C47.9 3.7 40.6.9 32.7.9 14.7.9.2 15.5.2 33.4c0 8.8 3.5 16.7 9.1 22.5l7.3-41.7c.1-.3.3-.6.6-.6H24c.3 0 .5.2.5.6l-8.3 47.2c4.8 2.8 10.4 4.5 16.4 4.5 17.9 0 32.5-14.5 32.5-32.5 0-6.8-2.1-13.1-5.6-18.3z"
            ></path>
          </svg>
          <a href="#"><h1>SIGN IN </h1></a><h1>|</h1>
          <a href="#"><h1>JOIN</h1></a>
        </div>
  
        <div>
          <img src={HeaderImgMarvel} alt="Marvel.png" width={122}/>
        </div>
  
        <div className='header-right'>
          <div className='header-right-mus'>
            <a href="#"><p>Marvel Unlimited</p>
            <span>Subscribe</span></a>
          </div>
          <div className='header-right-icon'>
            <img src={HeaderImgSearch} alt="Search-icon.png" width={"30px"} height={"30px"} />            
          </div>
        </div>
  
      </div>
  

      <div className='header-a'>
        <a href="#">NEWS</a>
        <a href="#">COMICS</a>
        <a href="#">CHARAKTERS</a>
        <a href="#">MOVIES</a>
        <a href="#">TV SHOWS</a>
        <a href="#">GAMES</a>
        <a href="#">VIDEOS</a>
        <a href="#">MORE</a>
      </div>

    </div>
  )
}
export default Header
