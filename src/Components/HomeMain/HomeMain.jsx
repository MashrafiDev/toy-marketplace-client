import React from 'react';

const HomeMain = () => {
    return (
        <div className='flex items-center mx-auto lg:justify-around'>
            <div className='ms-36'>
                <p className=' text-red-400 text-3xl'>Hot & Trendy</p>
                <p className='text-black text-7xl '>Baby Kids Toys</p>
                <p className='text-neutral-600 text-3xl mt-3'>Get Upto 30% Off Your First Order</p>
                <button className='bg-gradient-to-r from-purple-800 to-purple-400 rounded-[50px] px-4 py-2 text-white mt-3'>SHOP NOW</button>
            </div>
            <img className='' src="https://i.ibb.co/8xbNbSV/istockphoto-1218444566-612x612-removebg-preview.png" alt="" />
        </div>
    );
};

export default HomeMain;