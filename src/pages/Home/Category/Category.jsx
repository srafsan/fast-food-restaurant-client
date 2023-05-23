import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import "./Category.css";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"From 11:00am to 10pm"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide className="mb-24">
          <img src={slide1} alt="slide1" />
          <h3 className="text-4xl text-center -mt-16 pb-4 text-white">
            SALADS
          </h3>
        </SwiperSlide>
        <SwiperSlide className="mb-24">
          <img src={slide2} alt="slide2" />
          <h3 className="text-4xl text-center -mt-16 pb-4 text-white">
            PIZZAS
          </h3>
        </SwiperSlide>
        <SwiperSlide className="mb-24">
          <img src={slide3} alt="slide3" />
          <h3 className="text-4xl text-center -mt-16 pb-4 text-white">SOUPS</h3>
        </SwiperSlide>
        <SwiperSlide className="mb-24">
          <img src={slide4} alt="slide4" />
          <h3 className="text-4xl text-center -mt-16 pb-4 text-white">
            DESERTS
          </h3>
        </SwiperSlide>
        <SwiperSlide className="mb-24">
          <img src={slide5} alt="slide5" />
          <h3 className="text-4xl text-center -mt-16 pb-4 text-white">
            SALADS
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;