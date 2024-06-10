import Container from "../container";
import SubTitle from "../sub-title";
import { Accordion } from "@mantine/core";
import Image from "next/image";
import { body } from "@/lib/fonts";
import faq from "../../../public/imgs/faq.png";
import Link from "next/link";

import { faqs } from "@/lib/data/faqs";

const FAQsAccordion = () => {
  return (
    <div className="section-p bg-gradient-to-r from-[#EF4A7B] to-[#F858CB]">
      <Container>
        <div className="flex flex-col items-center gap-20 lg:flex-row lg:items-start">
          <div className="space-y-5">
            <SubTitle
              text="Need some help?
Read answers to frequently asked questions."
              className="text-white"
            />

            <Accordion
              classNames={{
                control: `text-white font-bold text-[16px] hover:bg-transparent ${body.className} py-2`,
                panel: `text-white ${body.className}`,
              }}
            >
              {faqs.map((faq, idx) => {
                return (
                  <Accordion.Item key={idx} value={faq.question}>
                    <Accordion.Control>
                      {idx + 1}. {faq.question}
                    </Accordion.Control>
                    <Accordion.Panel>
                      <div className="space-y-2">
                        <p>{faq.answer}</p>

                        {faq.link && (
                          <Link href={faq.link} target="_blank">
                            <p className="underline">Source</p>
                          </Link>
                        )}
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>

          <Image
            src={faq}
            alt=""
            width={499}
            height={935}
            className="flex-none"
            placeholder="blur"
          />
        </div>
      </Container>
    </div>
  );
};

export default FAQsAccordion;
