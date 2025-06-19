import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import slide6 from '../../../assets/home/slide6.jpg'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Category() {
  return (
     <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
          spaceBetween={10}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
           
        </SwiperSlide>
        <SwiperSlide>
           <img height={'405px'} width={'273px'} src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img height={'405px'} width={'273px'} src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img height={'405px'} width={'273px'} src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img height={'405px'} width={'273px'} src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img height={'405px'} width={'273px'} src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img height={'405px'} width={'273px'} src={slide6} alt="" />
        </SwiperSlide>
       
      </Swiper>
     </>
  )
}
