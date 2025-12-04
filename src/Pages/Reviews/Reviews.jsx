import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ReviewCard from './ReviewCard';
const Reviews = ({reviewsPromise}) => {
    
    const reviews = use(reviewsPromise)
    console.log(reviews)
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Reviews from Clients</h1>
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 30,
              stretch: '50%',
              depth: 200,
              modifier: 0.75,
              slideShadows: true,
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
            >
               {reviews.map(review=>  <SwiperSlide>
          <ReviewCard key={review.id} review={review}></ReviewCard>
        </SwiperSlide>)}
        
            </Swiper>
            
        </div>
    );
};

export default Reviews;