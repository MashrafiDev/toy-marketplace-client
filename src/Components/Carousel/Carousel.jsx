import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css'

const Carousel = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-medium text-[#9363b5] mb-2 mt-8'>Baby Kids Toy Section</h1>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/b6CjVXV/2-06443651-054a-436b-9476-0f052b33713e-1.webp" className="w-full" />
                    <div className='absolute ms-[10%] mt-[10%] w-[50%]' data-aos="zoom-out-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <h3 className=' text-[#a8a8a8] lg:text-[43px]'>Welcome Baby Born</h3>
                        <h1 className='text-[#9363b5] lg:text-[80px] baby'>Care Your Baby</h1>
                        <p className='off mb-5'>Toy 20% Off All Type Plant Accessories</p>
                        <br />
                        <Link className='bg-gradient-to-r from-purple-800 to-purple-400 rounded-[50px] px-4 py-2 text-white m-3'>SHOP NOW</Link>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Wny3WzV/1-83c59c5b-562d-4fa4-9e35-fe34c3861314-1.webp" className="w-full" />
                    <div className='absolute ms-[50%] mt-[10%] w-[50%]' data-aos="zoom-out-down" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                        <h3 className=' text-[#a8a8a8] lg:text-[43px]'>Welcome Baby Born</h3>
                        <h1 className='text-[#9363b5] lg:text-[80px] baby'>Care Your Baby</h1>
                        <p className='off mb-5'>Toy 20% Off All Type Plant Accessories</p>
                        <br />
                        <Link className='bg-gradient-to-r from-purple-800 to-purple-400 rounded-[50px] px-4 py-2 text-white m-3'>SHOP NOW</Link>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;