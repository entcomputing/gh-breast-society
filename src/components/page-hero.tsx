import { FC } from "react";
import { body } from "@/lib/fonts";
import Container from "./container";
import { Fade } from "react-awesome-reveal";

type PageHeroProps = {
  title: string;
};

const PageHero: FC<PageHeroProps> = ({ title }) => {
  return (
    <div
      className={`h-52  md:h-80 lg:h-72 bg-center bg-cover bg-home-hero ${body.className}`}
    >
      <div className="h-full w-full bg-[#9E2C4F]/80 pt-14 md:pt-20">
        <Container>
          <div className="flex items-center h-full text-white">
            <h2 className="text-[30px] lg:text-[60px] capitalize leading-tight font-extralight">
              {title}
            </h2>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PageHero;
