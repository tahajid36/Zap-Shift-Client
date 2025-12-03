import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import bannerImg from '../../assets/banner/banner1.png'
import bannerImg2 from '../../assets/banner/banner2.png'
import bannerImg3 from '../../assets/banner/banner3.png'
// requires a loader

import React from 'react';

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}>
        <div className='relative'>
            <img src={bannerImg} />
            <div className='absolute bottom-10 left-16 flex justify-start '>
                <button className="mr-5 btn btn-md btn-primary rounded-full text-black">Track Your Parcel</button>
                <button className="btn btn-md btn-outline text-black">Be a Rider</button>


            </div>
        </div>
        <div>
            <img src={bannerImg2} />
        </div>
        <div>
            <img src={bannerImg3} />
        </div>
    </Carousel>
    );
};

export default Banner;


