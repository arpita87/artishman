import React from 'react';
import Navbar from './Navbar';
import Banner from '../Banner/Banner';
import TopClasses from '../TopClasses/TopClasses';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
            <Offer></Offer>
            <Banner></Banner>
            <TopClasses></TopClasses>
        </div>
    );
};

export default Home;