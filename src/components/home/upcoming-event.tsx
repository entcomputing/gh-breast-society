import Image from "next/image";
import { body } from "@/lib/fonts";
import { useRouter } from "next/router";

import { Title } from "@/components";
import GradientButton from "../buttons/gradient-button";
import Container from "../container";
import { Fade } from "react-awesome-reveal";

// imgs
import upcoming from "../../../public/imgs/upcoming1.png";
import walk from "../../../public/imgs/walk.png";

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

        <div className="flex flex-col justify-between space-y-8 xl:space-y-0">
          <Title text="upcoming events" />

          <Fade duration={1500} triggerOnce>
            <p
              className={`${body.className} font-extralight leading-loose text-center lg:text-left`}
            >
              Stop The Sigma. Be Supportive.
            </p>
          </Fade>

          <div className="flex justify-center lg:justify-end">
            <GradientButton
              text="learn more"
              classNames="px-5 py-2 rounded-[6px]"
              onClick={() => {
                router.push("/events");
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UpcomingEvent;
