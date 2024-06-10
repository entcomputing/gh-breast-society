import { FC } from "react";
import { body } from "@/lib/fonts";

type GradientOutlineButtonProps = {
  text: string;
  classNames: string;
  onClick: () => void;
};

const GradientOutlineButton: FC<GradientOutlineButtonProps> = ({
  text,
  classNames,
  onClick,
}) => {
  return (
    <button
      className={`uppercase font-semibold border border-[#EF4A7B] bg-clip-text text-transparent bg-gradient-to-r from-[#EF4A7B] to-[#F858CB] ${body.className} ${classNames}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GradientOutlineButton;
