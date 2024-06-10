import Image from "next/image";
import { body } from "@/lib/fonts";
import { useRouter } from "next/router";

import { Title } from "@/components";
import GradientButton from "../buttons/gradient-button";
import Container from "../container";
import GrayText from "../gray-text";
import { Fade } from "react-awesome-reveal";

// imgs
import whoWeAre from "../../../public/imgs/who-we-are.png";

const WhoWeAre = () => {
  const router = useRouter();

  return (
    <div className="bg-[#F3F3F3] section-p ">
      <Container>
        <div className="flex flex-col items-center justify-center gap-10 xl:gap-0 xl:items-stretch xl:flex-row">
          <div
            className={`${body.className} flex flex-col items-center xl:items-stretch justify-between space-y-8 xl:space-y-0`}
          >
            <Title text="who we are" />

            <Fade cascade duration={1500} triggerOnce damping={0.1}>
              <GrayText
                text="No one should face breast cancer alone"
                className="xl:w-[50%]"
              />

              <p className="xl:w-[90%] leading-loose font-extralight text-center xl:text-left">
                At our foundation, we are dedicated to empowering and supporting
                individuals diagnosed with breast cancer. Through our
                comprehensive educational programs, conferences, newsletters,
                and a nationwide breast cancer helpline, we strive to provide
                the latest information and unwavering assistance to those on
                their journey of recovery.
              </p>

              <GradientButton
                text="learn more"
                classNames="px-5 py-2 rounded-[6px]"
                onClick={() => {
                  router.push("/about-us");
                }}
              />
            </Fade>
          </div>

          <div className="flex-none">
            <Image
              src={whoWeAre}
              alt=""
              width={537}
              height={454}
              priority
              placeholder="blur"
              className="transition-all duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhoWeAre;
