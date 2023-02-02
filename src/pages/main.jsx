import React from 'react';
import Navbar from '../components/Navbar.jsx'
import Section from '../components/Section.jsx'
import Header from '../components/Header.jsx'
import WeatherCard from '../components/WeatherCard.jsx'
function main(props) {
    return (
        <div>

            <Header/>
            <WeatherCard/>
        </div>
    );
}

export default main;