import { ChangeEvent, FC } from "react";

type TextAreaProps = {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
};

const TextArea: FC<TextAreaProps> = ({ placeholder, onChange, value }) => {
  return (
    <textarea
      rows={4}
      className="w-full border border-[#FF9DCA] rounded-[6px] focus:outline-none p-3 placeholder:text-[#FF9DCA]"
      placeholder={placeholder}
      onChange={onChange}
      required
      value={value}
    />
  );
};

export default TextArea;
