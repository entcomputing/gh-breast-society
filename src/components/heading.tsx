import { FC } from "react";
import { body } from "@/lib/fonts";
import { Fade } from "react-awesome-reveal";

type TitleProps = {
  text: string;
};

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <Fade direction="down" duration={1500} triggerOnce fraction={0}>
      <h2
        className={`font-semibold text-center lg:text-left uppercase leading-tight text-[#C04C81] text-[25px] lg:text-[30px] ${body.className}`}
      >
        {text}
      </h2>
    </Fade>
  );
};

export default Title;
