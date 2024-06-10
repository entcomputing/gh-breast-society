import { body } from "@/lib/fonts";
import Container from "../container";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className={`h-[80vh] md:h-[60vh] lg:h-screen bg-center bg-cover bg-home-hero ${body.className}`}
    >
      <div className="w-full h-full bg-light-pink/50">
        <Container>
          <div className="flex flex-col items-center justify-center lg:justify-center lg:items-start space-y-5 xl:space-y-[35px] text-white h-full">
            <Fade
              cascade
              direction="down"
              duration={1500}
              fraction={0}
              triggerOnce
            >
              <h2 className="text-center lg:text-left uppercase lg:w-[70%] leading-tight font-extralight text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:mt-16">
                One Moment can change everything
              </h2>

              <p className="text-lg font-light text-center md:text-xl lg:text-2xl lg:leading-tight lg:text-left lg:w-[60%]">
                It takes just <strong>3 minutues</strong> to be aware you are
                safe from breast cancer
              </p>

              <Link
                href="/self-examination-steps.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="bg-white font-semibold text-dark-pink px-5 py-3 rounded-[6px] uppercase lg:px-7 lg:text-lg">
                  Check now
                </button>
              </Link>
            </Fade>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
