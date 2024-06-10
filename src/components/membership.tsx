import { body } from "@/lib/fonts";

import { GradientButton, Title } from "@/components";
import MembershipForm from "./membership-form";
import Container from "./container";
import SubTitle from "./sub-title";
import { useRouter } from "next/router";

const Membership = () => {
  const router = useRouter();

  return (
    <>
      <div className={`${body.className} section-p space-y-10`}>
        <div className="flex flex-col items-center px-5 xl:mb-24">
          <SubTitle
            text="Everything you do makes a difference."
            className="text-[#EF4A7B] text-center capitalize"
          />

          <p className="leading-relaxed font-light text-xl lg:w-[40%] text-center text-[#737373]">
            We appreciate your interest in becoming a member of the Breast
            Society Of Ghana.
          </p>
        </div>

        <Container>
          <div className={`flex flex-col xl:flex-row gap-14 xl:gap-0 xl:mb-10`}>
            <div className="flex flex-col space-y-3 xl:space-y-3 xl:w-[50%] xl:pr-10 xl:border-r">
              <Title text="membership types" />

              <p className="font-light text-[#131313] text-center lg:text-left">
                Discover more about our various membership types and how you can
                support.
              </p>

              <div className="pt-10 space-y-10">
                <div className="space-y-3">
                  <h1 className="font-semibold text-transparent text-[20px] lg:text-[25px] bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] bg-clip-text text-center lg:text-left">
                    Full Member
                  </h1>

                  <p className="font-light text-[#131313] text-center lg:text-left">
                    Open to qualified Physicians or Allied Health Professionals
                    involved in breast disease management or research.
                  </p>
                </div>

                <div className="space-y-3">
                  <h1 className="font-semibold text-transparent text-[20px] lg:text-[25px] bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] bg-clip-text text-center lg:text-left">
                    Affiliate Member
                  </h1>

                  <p className="font-light text-[#131313] text-center lg:text-left">
                    Open to companies, organizations, educational institutions
                    or individuals who organize breast disease related
                    activities / promote funding for patients’ treatment,
                    screening and awareness.
                  </p>
                </div>

                <div className="space-y-3">
                  <h1 className="font-semibold text-transparent text-[20px] lg:text-[25px] bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] bg-clip-text text-center lg:text-left">
                    Associate Member
                  </h1>

                  <p className="font-light text-[#131313] text-center lg:text-left">
                    Open to Medical, Nursing and other Allied Health
                    Professional Students.
                  </p>
                </div>

                <GradientButton
                  text="LEARN ABOUT MEMBERSHIP DUES"
                  classNames="w-full py-3 text-[20px] rounded-[6px]"
                  onClick={() => {
                    router.push("/donate");
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3 xl:space-y-3 xl:w-[50%] xl:pl-10">
              <Title text="membership application form" />

              <p className="text-[#7C7C7C] text-center lg:text-left font-light">
                Please fill out the form below, and our team will contact you.
              </p>

              <MembershipForm />
            </div>
          </div>
        </Container>
      </div>

      <div
        className={`bg-gradient-to-r from-[#EF4A7B] to-[#F858CB] text-white section-p ${body.className}`}
      >
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row xl:px-12">
            <p className="text-3xl lg:text-4xl font-semibold text-center lg:text-left lg:w-[50%]">
              For further questions regarding our membership or partnerships:
            </p>

            <div className="lg:w-[50%] space-y-5">
              <div className="text-center lg:text-xl lg:text-left">
                <p className="font-semibold">Email:</p>
                <p className="font-light underline">
                  ghbreastsociety@gmail.com
                </p>
              </div>

              <div className="text-center lg:text-xl lg:text-left">
                <p className="font-semibold">Tel:</p>
                <p className="font-light">055 999 4747</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Membership;
