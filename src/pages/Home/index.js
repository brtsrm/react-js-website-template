import React from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Service from "../Service"
import About from "../About"
import WhyUs from "../WhyUs"
import Teams from "../Team"
import Feedback from "../Feedback"

function index() {
    return (
        <>
            <Service/>
            <About/>
            <WhyUs/>
            <Teams />
            <Feedback />
        </>
    );
}
export default index;