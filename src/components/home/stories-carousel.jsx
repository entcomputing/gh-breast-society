import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ActionIcon, Modal } from "@mantine/core";
import { PiPlayCircleThin } from "react-icons/pi";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import ReactPlayer from "react-player/youtube";

import "swiper/css";
import "swiper/css/navigation";

import { stories } from "@/lib/data/stories";

const StoriesCarousel = () => {
  const { _, width } = useViewportSize();
  let slidesPerView = 2;

  if (width < 480) {
    slidesPerView = 1;
  }

  if (width > 1024) {
    slidesPerView = 3;
  }

  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        modules={[Navigation, Autoplay]}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 10000,
          // disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {stories.map((story, idx) => {
          return (
            <SwiperSlide key={idx}>
              <StoryVideo
                image={story.image}
                videoLink={story.videoLink}
                description={story.description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

const StoryVideo = ({ image, videoLink, description }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { _, width } = useViewportSize();

  let videoWidth = "640px";

  if (width < 450) {
    videoWidth = "350px";
  }

  return (
    <>
      <div className="">
        <div className="relative">
          <div className="relative h-[250px]">
            <Image
              src={image}
              alt=""
              placeholder="blur"
              className="bg-cover"
              fill
              object-fit="cover"
            />
          </div>

          <div className="absolute top-0 flex items-center justify-center w-full h-full bg-black/30">
            <ActionIcon
              size={60}
              variant="light"
              className="rounded-full hover:bg-transparent"
              onClick={open}
            >
              <PiPlayCircleThin size={60} color="#fff" />
            </ActionIcon>
          </div>
        </div>

        {/* <div className="px-0 py-1">
          <p className="text-sm">{description}</p>
        </div> */}
      </div>

      <Modal
        opened={opened}
        onClose={close}
        centered
        size="auto"
        classNames={{
          header: "bg-transparent",
          content: "bg-transparent",
          close: "hover:bg-transparent text-[#EF4A7B] focus:outline-none",
        }}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoLink}`}
          width={videoWidth}
          controls
          style={{
            backgroundColor: "#000",
          }}
        />
      </Modal>
    </>
  );
};

export default StoriesCarousel;
