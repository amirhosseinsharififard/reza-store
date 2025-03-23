import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Pagination, Navigation} from "swiper/modules";

import Card from "../elements/Card";
export default function SwiperSpecialOffers() {
  return (
    <>
      <Swiper
       slidesPerView={4.5}
       dir="rtl"
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'>
        <SwiperSlide>
          <Card data='slam' progress={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data='amir' progress={25} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data='khobi' progress={25} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data='ha' progress={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data='ha' progress={75} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data='ha' progress={75} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data='ha' progress={95} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data='ha' progress={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data='ha' progress={100} />
        </SwiperSlide>
        <SwiperSlide>
          <Card data='ha' progress={0} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
