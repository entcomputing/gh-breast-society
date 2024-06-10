import { body } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

import { Title } from "@/components";
import ContactForm from "./contact-form";
import Container from "./container";
import GrayText from "./gray-text";

// imgs
import map from "../../public/imgs/map.png";

const details = [
  {
    title: "Location:",
    info: "Room 503, 5th Floor, NAGRAT Lyceum, Adabraka – Accra.",
  },
  {
    title: "Post Office Box:",
    info: "KB 560, Korlebu, Accra.",
  },
  {
    title: "Tel:",
    info: "+233 055 9994747",
  },
  {
    title: "Whatsapp:",
    info: "055 999 4747",
  },
  {
    title: "Email:",
    info: "ghbreastsociety@gmail.com",
  },
  {
    title: "Facebook:",
    info: "Breast Society of Ghana",
    link: "https://www.facebook.com/Ghbreastsociety?mibextid=LQQJ4d",
  },
  {
    title: "Instagram:",
    info: "gh_breastsociety",
    link: "https://www.instagram.com/gh_breastsociety/?hl=en&img_index=1",
  },
  {
    title: "YouTube:",
    info: "@Breastsocietyofghana",
    link: "https://www.youtube.com/@Breastsocietyofghana",
  },
  {
    title: "Opening hours:",
    info: "Mondays, Tuesdays, Thursdays, Fridays. 9:00 am - 4:00 pm",
  },
];

const ContactUs = () => {
  return (
    <Container>
      <div
        className={`flex flex-col xl:flex-row gap-14 section-p ${body.className}`}
      >
        <div className="flex flex-col justify-between space-y-8 xl:space-y-0 xl:w-[50%]">
          <Title text="contact us" />

          <GrayText
            text="We’re here to help. Please provide your contact details and we’ll
            reach out to you."
          />

          <ContactForm />
        </div>

        <div className="flex-none xl:w-[50%] space-y-5 flex flex-col items-center xl:items-start">
          <Link
            href="https://maps.app.goo.gl/vo4PR26VyaYB6GL28"
            rel="noopener noreferrer"
            target="_blank"
            className="block"
          >
            <Image
              src={map}
              placeholder="blur"
              alt=""
              width={664}
              height={335}
              className="flex-none"
            />
          </Link>

          <div className={`${body.className} space-y-3`}>
            {details.map((detail) => {
              return (
                <p className="font-extralight" key={detail.title}>
                  <span className="text-[#F04A7C] font-semibold">
                    {detail.title}{" "}
                  </span>
                  {detail.link ? (
                    <Link
                      href={detail.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="underline"
                    >
                      {detail.info}
                    </Link>
                  ) : (
                    <>{detail.info}</>
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
