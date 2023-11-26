// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img className='w-full h-[90vh] mx-auto rounded-lg' src="https://i.ibb.co/WPf60xQ/image011-1024x686.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[90vh] mx-auto' src="https://i.ibb.co/yF4Dg6D/4b45e1a05f2d3f1921fe055acacf5ddc.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[90vh] mx-auto' src="https://i.ibb.co/VMbYTbJ/f7b5d48bab667743a9e57fbe98ffe47a.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img className='w-full h-[90vh] mx-auto' src="https://i.ibb.co/w6SxqpT/1ec3089e3861fde68d4a8bed11fa2b62.jpg" alt="" /></SwiperSlide>
          
        </Swiper>
      </>
    );
};

export default Banner;