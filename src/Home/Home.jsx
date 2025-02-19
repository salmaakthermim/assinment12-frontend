import React from 'react';
import Banner from '../components/Banner';
import Featured from '../components/FeaturedSection';
import FeaturedSection from '../components/FeaturedSection';
import ContactUsSection from '../components/ContactUsSection';
import CareSection from '../components/CareSection';
import VolunteerSection from '../components/VolunteerSection';
import RecentBloodRequests from '../components/RecentBloodRequests';
import NewsArticles from '../components/NewsArticles';
import StatsSection from '../components/StatsSection';
import NewsSection from '../components/NewsSection';
import HeroSection from '../components/HeroSection ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
     
            <FeaturedSection></FeaturedSection>
            <NewsSection></NewsSection>
            <CareSection></CareSection>
            <RecentBloodRequests></RecentBloodRequests>
            <StatsSection></StatsSection>
            <NewsArticles></NewsArticles>
            <VolunteerSection></VolunteerSection>
            <ContactUsSection></ContactUsSection>
            
        </div>
    );
};

export default Home;