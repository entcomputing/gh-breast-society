import { FC } from "react";
import { body } from "@/lib/fonts";

type GradientButtonProps = {
  text: string;
  classNames: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const GradientButton: FC<GradientButtonProps> = ({
  text,
  classNames,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      className={`text-white uppercase bg-gradient-to-r from-[#EF4A7B] to-[#F858CB] ${body.className} ${classNames}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default GradientButton;
