import Image from "next/image";
import { body } from "@/lib/fonts";

import { Title } from "@/components";
import GradientButton from "../buttons/gradient-button";
import Container from "../container";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";

// imgs
import launch from "../../../public/imgs/journal-img.png";
import logo from "../../../public/imgs/journal-logo.png";

const Journal = () => {
  const router = useRouter();

  return (
    <div className="bg-[#F3F3F3] section-p ">
      <Container>
        <div className="flex flex-col lg:flex-row items-start">
         <div className="flex flex-col justify-between space-y-6 order-1 pr-0 lg:pr-8 items-center text-center lg:items-start lg:text-left">
          <div className="mb-12">
            <Title text="ADVERTISEMENT" />
          </div>

          <Image
            src={logo}
            alt=""
            width={100}
            height={100}
            placeholder="blur"
            className="mb-2"
          />

            <Fade duration={1500} triggerOnce>
              <p
                className={`${body.className} leading-relaxed text-grey-600 text-center lg:text-left lg:w-[60%] whitespace-normal text-lg lg:text-xl`}
              >
                Using the power of leading-edge science to save and improve lives around the world
              </p>
            </Fade>

          <div className="mb-6 lg:mb-0">
            <GradientButton
              text="open pdf"
              classNames="mb-5 px-5 py-2 rounded-[6px]"
              onClick={() => {
                window.open("/docs/11268 (ZA-NON-01090) MSD Journal Ad_HR.pdf", "_blank");
              }}
            />
          </div>
        </div>


          <div className="flex-none order-2 ml-0 lg:ml-8">
            <Image
              src={launch}
              alt=""
              width={537}
              height={454}
              placeholder="blur"
              className="transition-all duration-1000 hover:scale-105 rounded-xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Journal;
