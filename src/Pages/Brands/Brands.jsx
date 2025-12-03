import React from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import brand1 from '../../assets/brands/amazon.png'
import brand2 from '../../assets/brands/amazon_vector.png'
import brand3 from '../../assets/brands/casio.png'
import brand4 from '../../assets/brands/moonstar.png'
import brand5 from '../../assets/brands/randstad.png'
import brand6 from '../../assets/brands/star.png' 

const Brands = () => {
    return (
        <div className='mb-11'>
            <h1 className='text-3xl font-bold text-center my-8'>Our Brands</h1>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false
        }}
        
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={brand1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={brand2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={brand3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={brand4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={brand5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={brand6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={brand1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={brand2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={brand3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={brand4} alt="" /></SwiperSlide>
      
      </Swiper>
        </div>
    );
};

export default Brands;