import { body } from "@/lib/fonts";
import Container from "../container";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

// imgs
import drhannah from "../../../public/imgs/members/dr-hannah.jpeg";
import drnsaful from "../../../public/imgs/members/nsaful.jpg";

const AboutHero = () => {
  return (
    <div
      className={`h-screen xl:h-[90vh] bg-center bg-cover bg-home-hero ${body.className} text-white`}
    >
      <div className="w-full h-full bg-[#65163D]/60 backdrop-blur-[10px]">
        <Container>
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center gap-10 mt-20 xl:px-20 lg:gap-20 lg:items-center lg:flex-row">
              <div className="flex flex-col justify-between space-y-5 xl:space-y-[35px]">
                <Fade cascade direction="down" duration={1500} triggerOnce>
                  <h2 className="text-4xl leading-tight text-center capitalize md:text-5xl xl:text-6xl lg:text-left font-extralight">
                    Message from president
                  </h2>

                  <p className="lg:text-2xl xl:text-[20px] lg:leading-tight font-light text-center lg:text-left xl:w-[75%]">
                    I welcome you warmly to the website of the Breast Society of
                    Ghana (BSoG).
                  </p>
                </Fade>

                <p className="xl:text-xl lg:leading-tight lg:w-[50%] text-center lg:text-left italic font-medium">
                  &#8226; Dr. Josephine Nsaful
                </p>
              </div>

              <div className="relative w-[363px] h-[373px]">
                <Image
                  src={drnsaful}
                  alt=""
                  priority
                  className="flex-none object-cover rounded-md"
                  placeholder="blur"
                  fill
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutHero;
