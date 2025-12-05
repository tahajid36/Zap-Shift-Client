import React from 'react';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'
import Logo from '../Components/Logo/Logo';
const AuthLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo></Logo>
            <div className='flex justify-between items-center'>
                <div className='flex-1'>
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