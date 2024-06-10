import Image from "next/image";
import { body } from "@/lib/fonts";

import { Title } from "@/components";
import GradientButton from "../buttons/gradient-button";
import Container from "../container";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";

// imgs
import launch from "../../../public/imgs/launch.png";

const LaunchEvent = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="flex flex-col items-center gap-10 lg:gap-20 lg:items-stretch lg:flex-row section-p">
        <Image
          src={launch}
          alt=""
          width={300}
          height={300}
          className="flex-none transition-all duration-1000 hover:scale-105"
          placeholder="blur"
        />

        <div className="flex flex-col justify-between space-y-8 xl:space-y-0">
          <Title text="launch of 2023 breast cancer awareness" />

          <Fade duration={1500} triggerOnce>
            <p
              className={`${body.className} font-extralight leading-loose text-center lg:text-left`}
            >
              Join us as we kick-start another year of raising awareness and
              advocating for early detection and prevention of breast cancer.
              Together, we will educate, empower, and support individuals and
              communities in the fight against breast cancer. Stay tuned for
              exciting events, invaluable educational resources, and impactful
              initiatives throughout the year.
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

export default LaunchEvent;
