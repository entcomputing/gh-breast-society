import Container from "../container";
import { body } from "@/lib/fonts";
import GradientButton from "../buttons/gradient-button";
import { useRouter } from "next/router";

const AboutText = () => {
  const router = useRouter();

  return (
    <Container>
      <div className={`space-y-5 section-p font-light ${body.className}`}>
        <p>
          This society was inaugurated in{" "}
          <span className="text-[#F14D8C]">January 2018</span> with a vision to become a platform
          for coordinated excellent breast care in Ghana focusing
          on breast cancer.
        </p>

        <p>
        Breast cancer is the leading cause of cancer deaths in females worldwide and in Ghana. 
        Increasingly, younger women are being diagnosed with breast cancer and due to delays in initiating and complying with treatment there are countless needless and preventable deaths. 
        Breast cancer is curable when diagnosed and treated early. The barriers to survival of this disease are multifactorial and include a complex web of ignorance, societal misconceptions, inadequate health infrastructure, inadequate personnel and of course poverty. 
        These factors cannot be remedied in the consulting rooms as such the Breast Society of Ghana was born out of the need for a national collaborative approach of all stakeholders to bring about societal behavior change, improve standards of healthcare and advocate for improved resourcing and access to cancer care in Ghana.
        </p>

        <p>
          The society membership is made up of health professionals from across the country, breast cancer survivors, advocates, corporate bodies and individuals engaged in the fight against breast cancer. 
          Together we aim to provide coordinated medical, allied health and social interventions for improving standards and outcomes of breast care in Ghana. 
          Standards of health care are improved through continuous professional development and facilitating professional networking to enhance multidisciplinary team discussions and strengthen referral pathways across the country.
        </p>

        <p>
          Since the inception of the society we have taken up the fight against breast cancer through awareness creation activities focusing on early detection and breast screening, disseminating facts about the disease, dispelling myths and overturning stigmatization associated with the diagnosis. 
        </p>

        <p>
          Breast Society of Ghana has had the privilege of nurturing and empowering breast cancer survivors and providing a platform for them to share their stories and advocate for improved cancer care in Ghana. 
          We believe in navigating and supporting patients through active treatment and beyond. 
          This past year we have run with the theme {" "} 
          <span className="text-[#F14D8C] font-semibold">
          “Stop the stigma! Be supportive”
          </span>
           We are on a campaign to deal with the stigmatization and ostracization of breast cancer patients and survivors that plagues our society, fueled by ignorance. 
          This we do through public education with survivors at the forefront sharing their stories as evidence that the disease is curable and one is capable of living a full life after treatment.
        </p>

     

        <p>
          Our motto is  {" "} 
          <span className="text-[#F14D8C] font-semibold">
            “Joint action for breast care”
          </span> 
          and we are calling on all stakeholders – governmental and non-governmental agencies, healthcare and non-healthcare professionals, breast cancer survivors and all individuals to join in the fight against breast cancer. 
          Ghana must move to improve accessibility and quality of healthcare for breast cancer screening, diagnosis and treatment. 
          We need to focus on early detection through breast screening and move away from the superstitions and beliefs that delay timely and appropriate treatment. Breast cancer is curable when detected early, promptly and appropriately treated. It is time to change the narrative. Join us today!
        </p>

      </div>

      <div className="flex justify-center py-8">
        <GradientButton
          text="Become A Member"
          classNames="px-5 py-2 rounded-[6px]"
          onClick={() => {
            router.push("/membership");
          }}
        />
      </div>
    </Container>
  );
};

export default AboutText;
