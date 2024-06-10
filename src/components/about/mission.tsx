import Container from "../container";
import SubTitle from "../sub-title";
import { body } from "@/lib/fonts";

const Mission = () => {
  return (
    <div className={`bg-[#F14D8C] text-white section-p ${body.className}`}>
      <Container>
        <div className="flex flex-col justify-between gap-5 py-10 lg:flex-row">
          <div className="flex flex-col items-center flex-1 space-y-5">
            <SubTitle
              text="Mission"
              className="font-bold text-center text-white"
            />

            <p className="text-center font-light md:w-[60%]">
              To provide coordinated medical, allied health and social interventions for improving standard outocmes.
            </p>
          </div>

          <div className="flex flex-col items-center flex-1 space-y-5">
            <SubTitle
              text="Vision"
              className="font-bold text-center text-white "
            />

            <p className="text-center font-light md:w-[60%]">
              A platform for coordinated excellent breast care in Ghana.
            </p>
          </div>
        </div>

        <hr />

        <div className="flex flex-col items-center flex-1 py-10 space-y-5">
          <SubTitle text="Aims" className="font-bold text-center text-white " />

          <ul className="space-y-3 font-light text-center">
            <li>
              &#8226; To influence standards for the management of breast
              diseases in the country
            </li>
            <li>
              &#8226; To be involved in breast diseases research and education
            </li>
            <li>
              &#8226; To carry out breast cancer advocacy for management in
              terms of awareness and early detection
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Mission;
