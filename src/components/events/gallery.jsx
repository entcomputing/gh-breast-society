import Container from "../container";
import { body } from "@/lib/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
// import { photos } from "@/lib/data/gallery";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
import WhiteOutlineButton from "../buttons/white-outline-button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const Gallery = ({ images }) => {
  const router = useRouter();

  return (
    <div
      className={`bg-gradient-to-r from-[#EF4A7B] to-[#F858CB] section-p ${body.className}`}
    >
      <Container>
        <div className="space-y-10">
          <Fade direction="down" duration={1500} triggerOnce>
            <h1 className="uppercase text-center font-bold text-[25px] text-white">
              event gallery
            </h1>
          </Fade>

          {/* desktop swiper */}
          <div className="hidden lg:block">
            <Swiper
              effect={"coverflow"}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 10,
                stretch: 15,
                depth: 80,
                modifier: 1,
                scale: 0.6,
                slideShadows: false,
              }}
              modules={[EffectCoverflow, Autoplay]}
              spaceBetween={0}
              speed={1500}
              autoplay={{
                delay: 5000,
                // disableOnInteraction: false,
              }}
              loop={true}
            >
              {images.map((img, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="relative h-[300px] bg-black/20">
                      <Image
                        src={img}
                        // placeholder="blur"
                        fill
                        object-fit="cover"
                        object-position="center"
                        className="scale-125"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* mobile swiper */}
          <div className="lg:hidden">
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={20}
              speed={1500}
              loop={true}
            >
              {images.map((img, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="relative h-[350px] bg-black/20">
                      <Image
                        src={img}
                        // placeholder="blur"
                        fill
                        object-fit="cover"
                        object-position="center"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="flex justify-center">
            <WhiteOutlineButton
              text="view more"
              classNames="py-2 px-6 rounded-[6px]"
              onClick={() => router.push("/gallery")}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
