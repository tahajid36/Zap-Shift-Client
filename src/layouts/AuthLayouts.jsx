import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
import Logo from '../Components/Logo/Logo';
const AuthLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='my-5'>
            <Logo></Logo>

            </div>
            
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                <div className='flex-1 mt-[100px]'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authImg} alt="" />

                </div>
            </div>
        </div>
    );
};

export default AuthLayouts;