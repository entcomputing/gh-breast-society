import { ChangeEvent, FC } from "react";

type TextInputProps = {
  placeholder: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const TextInput: FC<TextInputProps> = ({
  placeholder,
  className,
  onChange,
  value,
}) => {
  return (
    <input
      value={value}
      className={`border border-[#FF9DCA] rounded-[6px] focus:outline-none h-[40px] px-3 placeholder:text-[#FF9DCA] w-full ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
};

export default TextInput;
