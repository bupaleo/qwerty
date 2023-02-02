import React from 'react';
import module from './Navbar.module.scss'
import DaySnow from '../assets/DaySnow.png'

function Navbar (props){
    const currenDtev= new Date().toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC'   
});
    const currenDay = new Dte().toLocalString('ru', {weekday: long});

    console.log(props.weatherState)

    return (
        <navbar className={module.lol}>
           <div className={module.info}>
            <h1>{weather.name} </h1> </div>
          <div className={module.info}>  <h4> Today - Wednesday, February 01  </h4>  </div> 
           <div className={module.info}> <img className={module.DaySnow} src={DaySnow}/>  </div>
           <div className={module.info}> <h1> {weather.main.temp}°C</h1> </div>           
           <div className={module.info}><h4>{weather.weather[0].description}</h4></div> 

        </navbar>
    );
}

export default Navbar;


{/* <div>
                        <p className={module.city}>{weather.name}</p>

                        <p className={module.temperature}>{weather.main.temp}°C</p>

                        <p className={module.description}></p>
                        <p className={module.description}>{weather.weather[0].description}</p>
                    </div> */}