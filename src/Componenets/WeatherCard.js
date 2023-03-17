import React from 'react'
import '../CSS/weathercard.css';
import { BsSun } from 'react-icons/bs';
import breakingNews2_jpg from '../images/earthImage.png';
import DetailedWeatherCard from './DetailedWeatherCard';


function WeatherCard() {

    // const handleOnSearchChange(serachData)

  return (
    <div>
      <div id='rns-weather-card' className="card" >
                    <img id='rns-weather-image' src={breakingNews2_jpg} className="card-img" alt="..."/>
                <div id='weather-main-text' className="card-img-overlay">
                    <h4 id='weather-logo' className="card-text">Weather Forecast</h4>
                    <div id='wcard-body'>
                        <div id='wcard-left-body'>
                            <h1 id='temp-wcard'><b>32'c</b></h1>
                            <h4 id='location-wcard'>Bhuj, Gujrat, India</h4>
                            <h6 id='day-Wtype-wcard'>Wednesday, sunny</h6>
                        </div>
                        <h1><BsSun size={70}/></h1>
                        {/* <DetailedWeatherCard onSearchchange={handleOnSearchChange}/> */}
                    </div>
                    <div id='wcard-footer' className="card-footer">
                        <div id='wcard-footer-pairs'><h5>thursday</h5>
                        <div>
                        <h5>27'C <BsSun/></h5>
                        </div></div>
                        <div><h5>friday</h5>
                        <div>
                        <h5>27'C <BsSun/></h5>
                        </div></div>
                        <div><h5>saturday</h5>
                        <div></div>
                        <h5>27'C <BsSun/></h5>
                        </div>
                        <div><h5>sunday</h5>
                        <div></div>
                        <h5>27'C <BsSun/></h5>
                        </div>
                        <div><h5>monday</h5>
                        <div></div>
                        <h5>27'C <BsSun/></h5>
                        </div>
                        <div><h5>tuseday</h5>
                        <div>
                        <h5>27'C <BsSun/></h5>
                        </div></div>
                        
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default WeatherCard
