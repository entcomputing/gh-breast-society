import { body } from "@/lib/fonts";

import { GradientButton, Title } from "@/components";
import MembershipForm from "./membership-form";
import Container from "./container";
import SubTitle from "./sub-title";
import { useRouter } from "next/router";
import GrayText from "./gray-text";
import Image from "next/image";

const ProjectInfo = () => {
  const router = useRouter();

  return (
    <>


      <div className={`${body.className} section-p space-y-10`}>
        
        <div className="flex flex-col items-center ">
        {/* flex flex-col items-center px-5 xl:mb-24 */}
            
        

          <SubTitle
            text="Enhancing Management of breast cancer Patients to improve Outcomes"
            className="text-[#EF4A7B] text-center capitalize"
          />

          <SubTitle
            text="With
            Education, Resources, and Mentorship"
            className="text-[#EF4A7B] text-center capitalize"
          />

          <SubTitle
            text="for Effective Navigational Transition in Ghana (The EMPOWERMENT study)"
            
            className="text-[#EF4A7B] text-center capitalize"
          />

          <SubTitle
            text="EXECUTIVE SUMMARY"
            className="text-[#EF4A7B] text-center capitalize"
          />

        </div>

    
      </div>

      
    </>
  );
};

export default ProjectInfo;
