import React from 'react';
import Banner from '../components/Banner';
import Featured from '../components/FeaturedSection';
import FeaturedSection from '../components/FeaturedSection';
import ContactUsSection from '../components/ContactUsSection';
import CareSection from '../components/CareSection';
import VolunteerSection from '../components/VolunteerSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <CareSection></CareSection>
            <ContactUsSection></ContactUsSection>
            <VolunteerSection></VolunteerSection>
        </div>
    );
};

export default Home;