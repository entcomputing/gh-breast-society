import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useViewportSize } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

const Members = ({ members }) => {
  const { _, width } = useViewportSize();
  let slidesPerView = 2;

  if (width < 480) {
    slidesPerView = 1;
  }

  if (width > 1024) {
    slidesPerView = 4;
  }

  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        modules={[Navigation, Autoplay]}
        // loop={true}
        // speed={2000}
        autoplay={{
          delay: 7500,
          // disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#F04B7C",
          "--swiper-pagination-color": "#F04B7C",
        }}
      >
        {members.map((member, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="h-[400px] flex flex-col rounded-[10px] shadow-lg border">
                <div className="h-[70%] relative bg-black/20 rounded-tr-[10px] rounded-tl-[10px]">
                  <Image
                    src={member.image}
                    alt=""
                    // width={394}
                    // height={430}
                    // placeholder="blur"
                    fill
                    className="object-cover rounded-tr-[10px] rounded-tl-[10px]"
                  />
                </div>

                <div className="h-[30%] rounded-br-[10px] rounded-bl-[10px] bg-gradient-to-r from-[#EF4A7B] to-[#F858CB] text-white p-5 space-y-3">
                  <p className="font-semibold">{member.name}</p>

                  <p className="text-sm italic font-light">{member.title}</p>

                  {member.bio && (
                    <p className="text-sm underline">
                      <Link href={`/members/${member.slug}`}>View Bio</Link>
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Members;
