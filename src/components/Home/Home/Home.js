import React from 'react';
import Banner from '../Banner/Banner';
import Expert from '../Expert/Expert';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Expert></Expert>
            <Footer></Footer>
        </div>
    );
};

export default Home;