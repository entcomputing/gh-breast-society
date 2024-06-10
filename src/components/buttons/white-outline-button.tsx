import { FC } from "react";
import { body } from "@/lib/fonts";

type WhiteOutlineButtonProps = {
  text: string;
  classNames: string;
  onClick: () => void;
};

const WhiteOutlineButton: FC<WhiteOutlineButtonProps> = ({
  text,
  classNames,
  onClick,
}) => {
  return (
    <button
      className={`uppercase font-semibold border border-white bg-clip-text text-white ${body.className} ${classNames}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default WhiteOutlineButton;
