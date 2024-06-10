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
          <span className="text-[#F14D8C]">January 2018</span> to bring together
          health professionals from across Ghana to collaborate on improving the
          management and outcomes of breast diseases, especially cancer.
        </p>

        <p>
          The Society continues to grow and now with over 200 registered
          members, we represent a significant number of health professionals
          involved in the delivery of breast care for benign and malignant
          breast cases in Ghana. This membership also includes corporate bodies,
          breast cancer survivors, advocates and other individuals engaged in
          the fight against breast cancer.
        </p>

        <p>
          We are driven by our united vision to become a platform for
          coordinated excellent breast care in Ghana, and have since 2018, been
          assiduously powering the fight against breast cancer by investing in
          flagship programs for research, prevention, early detection, improving
          treatment and supporting patients and survivors.
        </p>

        <p>
          Breast cancer poses a significant public health challenge and stands
          as the most diagnosed cancer in Ghana and globally. Regrettably,
          breast cancer is impacting women at relatively younger ages in Ghana.
          Due to delayed diagnoses and low adherence to treatment, the resulting
          outcomes are not as favourable as they ought to be. The loss of
          mothers, wives, sisters, and daughters to breast cancer is devastating
          for families. In addition, friends and associates are also affected,
          causing a significant impact on the community and the nation as a
          whole.
        </p>

        <p>
          The global cancer theme for 2023 is{" "}
          <span className="text-[#F14D8C] font-semibold">
            “Close the Care Gap” A Call to Unite Our Voices and Take Action.
          </span>{" "}
          The Breast Society of Ghana joins this campaign to call on everyone,
          individually and collectively to commit to support actions aimed at
          improving access to quality and timely care, including screening,
          awareness creation, early detection, treatment, and palliative care.
          All health professionals are urged to strive to offer the best of care
          to each patient, encouraging compliance while we all continue to
          spread the importance of early detection and healthy lifestyles. As
          persons with lived experience of the disease, breast cancer survivors
          are encouraged to lend their voices as advocates for better support
          for newly diagnosed patients.
        </p>

        <p>
          <span className="text-[#F14D8C] font-semibold">
            BSoG is on the move to change the horrid narrative of breast cancer
            in Ghana. Join us; together, we can make a difference!{" "}
          </span>
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
