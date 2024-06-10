import { PageHero, ContactUs } from "@/components";

const Contact = () => {
  return (
    <>
      <PageHero title="Get in touch" />
      <ContactUs />
      <div className="px-[65px]">
        <hr className="bg-[#B6B6B6] h-[2px]" />
      </div>
    </>
  );
};

export default Contact;
