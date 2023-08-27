import React from 'react';
import './home.css';
import HeaderSlider from '../shaired-components/HeaderSlider';
import Footer from '../shaired-components/Footer';
import OurServices from './OurServices';
import NewsAndArticles from './NewsAndArticles';
import QuickLinks from './QuickLinks';


const Home = () => {
    return (
        <div className='mx-auto'>
            <HeaderSlider></HeaderSlider>
            <OurServices></OurServices>
            <NewsAndArticles></NewsAndArticles>
            <QuickLinks></QuickLinks>
            <Footer></Footer>
        </div>
    );
};

export default Home;