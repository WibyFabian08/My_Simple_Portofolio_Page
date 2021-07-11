import React from 'react';
import Job from '../parts/Job';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import Hero from '../parts/Hero'
import Skill from '../parts/Skill';

const MainPage = () => {
    return (
        <div className="main-page">
            <Header></Header>
            <Hero></Hero>
            <Skill></Skill>
            <Job></Job>
            <Footer></Footer>
        </div>
    )
}

export default MainPage;