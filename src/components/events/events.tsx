import { FC } from "react";

import Container from "../container";
import SubTitle from "../sub-title";
import { body } from "@/lib/fonts";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
// import { events } from "@/lib/data/events";
import Link from "next/link";
import WhiteOutlineButton from "../buttons/white-outline-button";
import { useRouter } from "next/router";
import dayjs from "dayjs";

type Event = {
  title: string;
  slug: string;
  excerpt: string;
  startDate: string;
  thumbnail: string;
};

type EventsProps = {
  events: Event[];
};

const Events: FC<EventsProps> = ({ events }) => {
  const router = useRouter();

  if (events.length === 0) {
    return (
      <div className={`bg-[#EF4A7B] section-p ${body.className}`}>
        <Container>
          <SubTitle
            text="No events available"
            className="text-white capitalize"
          />
        </Container>
      </div>
    );
  }

  return (
    <div className={`bg-[#EF4A7B] section-p ${body.className}`}>
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-0">
          <div className="lg:w-[50%] lg:pr-10 xl:pr-20 space-y-5 text-white ">
            <SubTitle text="upcoming" className="text-white capitalize" />

            <Fade direction="up" duration={1500} triggerOnce>
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-white text-[25px]">
                  {events[0]?.title}
                </h1>

                <div className="bg-white text-center rounded-[6px] text-[#EF4A7B] w-24 h-24 flex flex-col items-center justify-center">
                  <span className="font-bold capitalize">
                    {dayjs(events[0]?.startDate).format("MMMM")}
                  </span>
                  <span className="flex text-[60px] items-center justify-center flex-none font-bold w-14 h-14">
                    {dayjs(events[0]?.startDate).format("DD")}
                  </span>
                </div>
              </div>

              <div className="relative w-full h-[250px] bg-black/20">
                <Image
                  src={events[0]?.thumbnail}
                  alt=""
                  priority
                  fill
                  className="object-cover"
                />
              </div>

              <p className="font-light">{events[0]?.excerpt}</p>

              {/* <WhiteOutlineButton
                text="learn more"
                classNames="py-2 px-5 rounded-[6px]"
                onClick={() => {
                  router.push(`/events/${events[0].slug}`);
                }}
              /> */}
            </Fade>
          </div>

          <div className="lg:w-[50%] lg:pl-10 xl:pl-20 space-y-5 lg:border-l">
            <SubTitle text="Future events" className="text-white capitalize" />

            <Fade direction="up" duration={1500} triggerOnce>
              <ul className="divide-y">
                {events.slice(1).map((event, idx) => {
                  return (
                    <div
                      className="flex items-center gap-4 py-5 text-white"
                      key={idx}
                    >
                      <div className="bg-[#FFF737] text-center rounded-[6px] text-[#EF4A7B] w-16 h-16 flex flex-col items-center justify-center flex-none">
                        <span className="text-xs font-bold capitalize">
                          {dayjs(event?.startDate).format("MMMM")}
                        </span>
                        <span className="flex text-[30px] items-center justify-center flex-none w-5 h-5 font-bold">
                          {dayjs(event?.startDate).format("DD")}
                        </span>
                      </div>

                      <div className="">
                        <p className="uppercase">{event?.title}</p>

                        <p className="text-xs font-light">{event?.excerpt}</p>

                        {/* <div className="flex items-center justify-end text-xs text-[#fff] font-semibold">
                          <Link href={`/events/${event.slug}`}>
                            Learn More...
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  );
                })}
              </ul>
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Events;
