import React, { useEffect, useState } from 'react';
import TabsData from '../TabsData/TabsData';
import PhotoGellary from '../PhotoGellary/PhotoGellary';
import useTitle from '../hooks/useTitle';
import Carousel from '../Carousel/Carousel';
import Gift from '../Gift/Gift';


const HomeMain = () => {
    const [tabs, setTabs] = useState([])
    useTitle("PB | Home")
    useEffect(() => {
        fetch('http://localhost:3000/tabs')
            .then(res => res.json())
            .then(data => setTabs(data))
    }, [])
    return (
        <div>
            <div className='flex items-center mx-auto lg:justify-around'>
                <div className='ms-36' data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <p className=' text-red-400 text-3xl'>Hot & Trendy</p>
                    <p className='text-black text-7xl '>Baby Kids Toys</p>
                    <p className='text-neutral-600 text-3xl mt-3'>Get Upto 30% Off Your First Order</p>
                    <button className='bg-gradient-to-r from-purple-800 to-purple-400 rounded-[50px] px-4 py-2 text-white mt-3'>SHOP NOW</button>
                </div>
                <img className='' data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src="https://i.ibb.co/8xbNbSV/istockphoto-1218444566-612x612-removebg-preview.png" alt="" />
            </div>
            <div>
                {
                    tabs.map(tab => <TabsData
                        key={tab._id}
                        tab={tab}
                    ></TabsData>)
                }
            </div>
            <h3 className='text-center text-[#9363b5] mt-4 text-4xl'>Toy Gallery</h3>
            <PhotoGellary></PhotoGellary>
            <Carousel></Carousel>
            <h3 className='text-center text-[#9363b5] mt-8 text-4xl'>Baby Toy Gift Corner</h3>
            <Gift></Gift>
        </div >
    );
};

export default HomeMain;