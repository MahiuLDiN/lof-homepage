import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper";
import Navbar from "../components/Navs/Navbar"
import Footer from "./Navs/Footer";
import Bec from "./Bec";
import Bec2 from "./Bec2";
import Faq from "./Faq";


export default function Homepage() {
  return (
    <>
    <Navbar/>
      <Swiper
        style={{
          height: "100vh",
        }}
        speed={1200}
       
        modules={[Mousewheel]}
        className="mySwiper main-sloider faq-sw"
        mousewheel={true}
        autoplay={false}
      >
        <SwiperSlide >
         1
        </SwiperSlide>
        <SwiperSlide >
         2
        </SwiperSlide>
        <SwiperSlide >
         3
        </SwiperSlide>
        <SwiperSlide >
         <Bec/>
        </SwiperSlide>
        <SwiperSlide >
         <Bec2/>
        </SwiperSlide>
        <SwiperSlide >
         <Faq/>
        </SwiperSlide>
      </Swiper>
      <Footer/>
    </>
  );
}
