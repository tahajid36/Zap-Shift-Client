import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {userName, review: testimonial,user_photoURL} = review
    return (
        <div className="card w-full max-w-md bg-base-100 shadow-md rounded-2xl p-6">
        {/* Quote Icon */}
        <div className="text-primary text-3xl mb-3">
          <FaQuoteLeft />
        </div>
  
        {/* Review Text */}
        <p className=" leading-relaxed">
         {testimonial}
        </p>
  
        {/* Divider */}
        <div className="border-b my-4"></div>
  
        {/* Author Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full">
            <img className='rounded-full' src={user_photoURL} alt="" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{userName}</h3>
            <p className="text-sm text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </div>
    );
};

export default ReviewCard;