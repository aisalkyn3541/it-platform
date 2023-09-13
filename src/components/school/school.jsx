import React from 'react';
import OurSchool from './ourSchool/ourSchool';
import Courses from './courses/Courses';
import MasterClasses from './MasterClasses/MasterClasses';
import Purchase from './purchase/Purchase';
import Reviews from './Reviews/Reviews';

const School = () => {
    return (
        <div>
            <OurSchool/>
            <Courses/>
            <MasterClasses/>
            <Purchase/>
            <Reviews/>
        </div>
    );
};

export default School;