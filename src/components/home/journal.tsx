import Image from "next/image";
import { body } from "@/lib/fonts";

import { Title } from "@/components";
import GradientButton from "../buttons/gradient-button";
import Container from "../container";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";

// imgs
import launch from "../../../public/imgs/journal-img.png";

const Journal = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:gap-20 lg:items-stretch lg:flex-row section-p">
          <div className="flex flex-col justify-between space-y-8 xl:space-y-0 order-2 lg:order-1">
            <Title text="JOURNAL" />

            <Fade duration={1500} triggerOnce>
              <p
                className={`${body.className} font-extralight leading-loose text-center lg:text-left`}
              >
                Using the power of leading-edge science to save and improve lives around the world
              </p>
            </Fade>

            <div className="flex justify-center lg:justify-start">
              <GradientButton
                text="read journal"
                classNames="px-5 py-2 rounded-[6px]"
                onClick={() => {
                  window.open("/docs/11268 (ZA-NON-01090) MSD Journal Ad_HR.pdf", "_blank");
                }}
              />
            </div>
          </div>

          <Image
            src={launch}
            alt=""
            width={300}
            height={300}
            className="flex-none transition-all duration-1000 hover:scale-105 order-1 lg:order-2 rounded-lg ml-auto"
            placeholder="blur"
          />
        </div>
      </Container>
    </div>
  );
};

export default Journal;
