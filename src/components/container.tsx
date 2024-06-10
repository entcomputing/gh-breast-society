import { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="md:max-w-[640px] lg:max-w-[880px] xl:max-w-[1100px] 2xl:max-w-[1280px] px-5 md:px-0 mx-auto h-full">
      {children}
    </div>
  );
};

export default Container;
