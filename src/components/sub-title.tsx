import { FC } from "react";
import { body } from "@/lib/fonts";
import { Fade } from "react-awesome-reveal";

type SubTitleProps = {
  text: string;
  className?: string;
};

const SubTitle: FC<SubTitleProps> = ({ text, className }) => {
  return (
    <Fade direction="down" duration={1500} fraction={0} triggerOnce>
      <h1
        className={`text-[25px] lg:text-[35px] ${body.className} ${className}`}
      >
        {text}
      </h1>
    </Fade>
  );
};

export default SubTitle;
