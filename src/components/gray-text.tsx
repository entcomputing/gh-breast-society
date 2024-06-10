import { FC } from "react";

type TextProps = {
  text: string;
  className?: string;
};

const GrayText: FC<TextProps> = ({ text, className }) => {
  return (
    <p
      className={`font-light text-2xl text-center lg:text-left lg:text-3xl leading-none text-[#737373] ${className}`}
    >
      {text}
    </p>
  );
};

export default GrayText;
