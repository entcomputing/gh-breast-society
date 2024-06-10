import { body } from "@/lib/fonts";

import StoriesCarousel from "./stories-carousel";
import Container from "../container";
import SubTitle from "../sub-title";

const SurvivorStories = () => {
  return (
    <div className="section-p bg-[#EF4A7B] text-white">
      <Container>
        <div
          className={`${body.className} flex flex-col items-center space-y-5`}
        >
          <SubTitle
            text="Survivor's Stories"
            className="text-center text-white "
          />

          <p className="leading-relaxed text-center font-extralight lg:w-[60%]">
            Breast Cancer is not the end. Discover inspiring survivor stories
            that illuminate the power of hope and unwavering resilience from
            diagnosis to recovery.
          </p>

          <div className="h-6 lg:h-10" />

          <StoriesCarousel />
        </div>
      </Container>
    </div>
  );
};

export default SurvivorStories;
