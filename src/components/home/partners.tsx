import { body } from "@/lib/fonts";
import SubTitle from "../sub-title";
import PartnersCarousel from "./partners-carousel";
import Container from "../container";

const Partners = () => {
  return (
    <div
      className={`bg-gradient-to-r from-[#EF4A7B] to-[#F858CB] text-white section-p ${body.className} `}
    >
      <Container>
        <div className="space-y-5">
          <SubTitle text="Partners" className="text-center text-white " />

          <PartnersCarousel />
        </div>
      </Container>
    </div>
  );
};

export default Partners;
