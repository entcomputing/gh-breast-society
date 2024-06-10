import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useViewportSize } from "@mantine/hooks";
import Image from "next/image";

// imgs
import ecl from "../../../public/imgs/ecl.png";
import pharmasymbosis from "../../../public/imgs/pharmasymbosis.png";
import roche from "../../../public/imgs/roche.png";

import "swiper/css";
import "swiper/css/navigation";

const PartnersCarousel = () => {
  const { _, width } = useViewportSize();
  let slidesPerView = 3;

  if (width < 480) {
    slidesPerView = 1;
  }

  if (width > 1024) {
    slidesPerView = 3;
  }

  return (
    <>
      <Swiper
        // navigation={true}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        modules={[Navigation, Autoplay]}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 1000,
          // disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src={ecl}
              placeholder="blur"
              alt=""
              width={137}
              height={13}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/1.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src={pharmasymbosis}
              alt=""
              width={359}
              height={85}
              placeholder="blur"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/2.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src={roche}
              placeholder="blur"
              alt=""
              width={180}
              height={96}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/3.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/4.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/5.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/6.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/7.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/8.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/9.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/10.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/11.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/12.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/13.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center h-[100px]">
            <Image
              src="/15.png"
              alt=""
              width={359}
              height={85}
              // placeholder="blur"
            />
          </div>
        </SwiperSlide>



        
      </Swiper>
    </>
  );
};

export default PartnersCarousel;
