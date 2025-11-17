import Image from "next/image";
import { body } from "@/lib/fonts";
import { useRouter } from "next/router";

import { Title } from "@/components";
import GradientButton from "../buttons/gradient-button";
import Container from "../container";
import { Fade } from "react-awesome-reveal";

// imgs
import upcoming from "../../../public/imgs/upcoming1.png";
import walk from "../../../public/imgs/webinar.jpg";

const UpcomingEvent = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="flex flex-col items-center gap-10 lg:gap-20 lg:items-stretch lg:flex-row section-p">
        <Image
          src={walk}
          alt=""
          width={300}
          height={300}
          priority
          className="flex-none transition-all duration-1000 hover:scale-105"
          placeholder="blur"
        />

        <div className="flex flex-col justify-between space-y-5 xl:space-y-0 flex-1">
          <Title text="upcoming events" />

          <Fade duration={1500} triggerOnce>
            <p
              className={`${body.className} font-extralight leading-loose text-center lg:text-left`}
            >
              CPD/CME
            </p>
          </Fade>

          <div className="flex justify-center lg:justify-start">
            <GradientButton
              text="learn more"
              classNames="px-5 py-2 rounded-[6px]"
              onClick={() => {
                router.push("/events");
              }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-start space-y-4 lg:border-l lg:border-gray-300 lg:pl-8 flex-1 bg-gray-50 p-6 rounded-lg">
          <Fade duration={1500} triggerOnce>
            <div className={`${body.className} font-light leading-relaxed text-gray-700 text-center lg:text-left space-y-3`}>
              <p>Hi there,</p>
              <p>You are invited to a Zoom meeting.</p>
              
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">When:</span> Nov 25, 2025 02:00 PM Greenwich Mean Time
                </p>
                <p>
                  <span className="font-semibold">Topic:</span> Breast Society of Ghana 4th Quarter CME
                </p>
              </div>

              <p>
                <span className="font-semibold">Register in advance for this meeting:</span>
                <br />
                <a 
                  href="https://us06web.zoom.us/meeting/register/y-iMh508TCWB09LxBNx9vA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline break-all"
                >
                  https://us06web.zoom.us/meeting/register/y-iMh508TCWB09LxBNx9vA
                </a>
              </p>

              <p className="text-sm italic text-gray-600">
                After registering, you will receive a confirmation email containing information about joining the meeting.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </Container>
  );
};

export default UpcomingEvent;
