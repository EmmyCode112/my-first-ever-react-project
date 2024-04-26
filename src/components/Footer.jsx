import './Footer.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

  
  return (
    <div className='footer'>
      <div className="wrapper">
      <div className="left-footer">
      <h4>Support</h4>
            <ul>
        <li>Airbnb Home</li>
        <li>AirCover</li>
        <li>Hosting resources</li>
        <li>Commnity forum</li>
        <li>Airbnb friendly apartment</li>
        <li>Help center</li>
      </ul>
      </div>
      <div className="center-footer">
      <h4>Hosting</h4>
      <ul>
        <li>Airbnb Home</li>
        <li>AirCover</li>
        <li>Hosting resources</li>
        <li>Commnity forum</li>
        <li>Airbnb friendly apartment</li>
        <li>Help center</li>
      </ul>
        </div>
      <div className="right-footer">
      <h4>Airbnb</h4>
            <ul>
        <li>Airbnb Home</li>
        <li>AirCover</li>
        <li>Hosting resources</li>
        <li>Commnity forum</li>
        <li>Airbnb friendly apartment</li>
        <li>Help center</li>
      </ul>
      </div>
      </div>
      <div className="bottom">
        <div className="f-left">
          2024 Airbnb, Inc. 
          <ul>
            <li>Terms</li>
            <li>Sitemaps</li>
            <li>Privacy</li>
            <li>Your Privacy Choices</li>
          </ul>
        </div>
        <div className="f-right">
        <ul>
          <li><FontAwesomeIcon icon={faGlobe} className='globe' style={{padding: '0'}}/> <span>English</span></li>
          <li>$ Usd</li>
          <div className="icons">

          </div>
        </ul>
        </div>
      </div>
    </div>
  )

}
export default Footer