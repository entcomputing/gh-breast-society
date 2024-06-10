import React from "react";
import Container from "./container";
import { body } from "@/lib/fonts";
import { Title } from "@/components";
import Image from "next/image";
import { useRouter } from "next/router";

const Donate = () => {
  const router = useRouter();

  return (
    <>
      <div className={`section-p ${body.className}`}>
        <Container>
          <div className="space-y-10">
            <Title text="PAYMENT OF MEMBERSHIP DUES/DONATIONS" />

            <div className="space-y-2">
              <h1 className="font-medium text-transparent text-[20px] lg:text-[25px] bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] bg-clip-text text-center lg:text-left">
                Help us care for those living with breast cancer.
              </h1>

              <p className="font-light text-center lg:text-left">
                Your generous donation helps us provide breast cancer educational resources, research, advocacy and breast screening outreaches.
              </p>
            </div>

            <p className="text-xl font-light text-center lg:text-left">
              Membership dues and donations can be paid by the following means:
            </p>

            <div className="divide-y">
              <div className="flex flex-col gap-10 py-10 lg:flex-row lg:items-start">
                <Image src="/momo.svg" alt="" width={43} height={56} />

                <div className="space-y-5">
                  <h1 className="font-medium text-transparent text-[20px] lg:text-[25px] bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] bg-clip-text">
                    1. Mobile Money
                  </h1>

                  <div className="flex flex-col gap-10 lg:items-center lg:flex-row">
                    <div className="space-y-1">
                      <p className="font-seminbold text-[#919090] text-lg">
                        Account Name
                      </p>
                      <p className="font-light">Breast Society of Ghana</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-seminbold text-[#919090] text-lg">
                        Account Number
                      </p>
                      <p className="font-light">0555488271 (merchant MTN)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-start">
                <Image src="/bank.svg" alt="" width={52} height={66} />

                <div className="space-y-5">
                  <h1 className="font-medium text-transparent text-[20px] lg:text-[25px] bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] bg-clip-text">
                    2. Bank
                  </h1>

                  <div className="flex flex-col gap-10 lg:items-center lg:flex-row">
                    <div className="space-y-1">
                      <p className="font-seminbold text-[#919090] text-lg">
                        Holder
                      </p>
                      <p className="font-light">
                        GCB (Ghana Commercial Bank) Korle-Bu Branch
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-seminbold text-[#919090] text-lg">
                        Account Name
                      </p>
                      <p className="font-light">Breast Society of Ghana</p>
                    </div>

                    <div className="space-y-1">
                      <p className="font-seminbold text-[#919090] text-lg">
                        Account Number
                      </p>
                      <p className="font-light">1131180000251</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-light text-center lg:text-left">
              Please send a message to{" "}
              <span className="text-[#EF4A7B]">0559994747</span> with a copy of
              pay in slip or transaction details if you pay by Mobile money.
            </p>
          </div>
        </Container>
      </div>

      <div
        className={`bg-gradient-to-r from-[#EF4A7B] to-[#F858CB] text-white section-p ${body.className}`}
      >
        <Container>
          <div className="space-y-5">
            <p className="text-3xl lg:text-4xl font-semibold text-center lg:text-left lg:w-[50%]">
              Thank you for your donation.
            </p>

            <p className="font-light text-center lg:text-2xl lg:text-left">
              Learn more about other ways you can support the Breast
              Society Of Ghana to care for those living with breast cancer.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                className="bg-white font-semibold text-dark-pink px-5 py-3 rounded-[6px] uppercase lg:px-7 lg:text-lg"
                onClick={() => {
                  router.push("/membership");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Donate;
