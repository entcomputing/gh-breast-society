import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ActionIcon } from "@mantine/core";
import { notifications } from "@mantine/notifications";

import { body } from "@/lib/fonts";
import GradientButton from "./buttons/gradient-button";
import Container from "./container";
import { useWindowScroll } from "@mantine/hooks";
import { links1, links2 } from "@/lib/data/links";
import { useRouter } from "next/router";

const Footer = () => {
  const [_, scrollTo] = useWindowScroll();
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log({ email });

      notifications.show({
        message: "Subscription Success!",
        color: "teal",
      });
    } catch (error) {
      notifications.show({
        message: "Subscription Failed! Try Again",
        color: "red",
      });
    } finally {
      setEmail("");
    }
  };

  return (
    <Container>
      <footer className={`space-y-10 section-p ${body.className}`}>
        <div className="flex flex-col justify-center space-y-5 xl:space-y-0 xl:justify-between xl:flex-row xl:items-center">
          <p className={`${body.className} text-[25px] text-center`}>
            Help make a difference. Support our fight against breast cancer
          </p>

          <GradientButton
            text="donate now"
            classNames="px-5 py-3 xl:px-10 xl:py-3 text-[20px] rounded-[6px]"
            onClick={() => {
              router.push("/donate");
            }}
          />
        </div>

        <hr className="bg-[#B6B6B6] h-[1.5px]" />

        <div className="flex flex-col space-y-10 xl:flex-row xl:items-center xl:justify-between">
          <div className="space-y-32">
            <div className="space-y-5">
              <p className="font-semibold text-[#6A6A6A] text-[25px] xl:w-[55%] leading-tight xl:text-left text-center">
                Subscribe to our newsletter
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex items-center w-full xl:w-[340px] h-[50px]"
              >
                <input
                  type="text"
                  className="border border-t-0 border-x-0 rounded-none border-b-[#F14C85] w-[80%] focus:outline-none placeholder:text-[#FF9DCA] h-full pl-1"
                  placeholder="email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <GradientButton
                  text=">"
                  classNames="w-[20%] h-full text-2xl"
                  onClick={() => {}}
                  type="submit"
                />
              </form>
            </div>

            <p className="hidden xl:block font-semibold text-[16px] text-[#6A6A6A]">
              © 2024 All rights reserved.{" "}
              <Link href="/" className="hover:text-[#F14C85] hover:underline">
                Breast Society of Ghana
              </Link>
            </p>
          </div>

          <FooterLinks links={links1} />

          <FooterLinks links={links2} />

          <div className="flex flex-col justify-center items-center xl:w-[200px] space-y-10">
            <ActionIcon
              onClick={() => scrollTo({ y: 0 })}
              className="h-[100px] w-[85px]"
            >
              <Image
                src="/imgs/ribbon.png"
                alt=""
                height={100}
                width={85}
                className=""
              />
            </ActionIcon>

            <div className="flex items-center space-x-5">
              <Link href="/">
                <Image
                  src="/facebook.svg"
                  alt=""
                  width={20}
                  height={39}
                  className="cursor-pointer"
                />
              </Link>

              <Link href="/">
                <Image
                  src="/twitter.svg"
                  alt=""
                  width={43}
                  height={35}
                  className="cursor-pointer"
                />
              </Link>

              <Link href="/">
                <Image
                  src="/linkedin.svg"
                  alt=""
                  width={42}
                  height={39}
                  className="cursor-pointer"
                />
              </Link>
            </div>

            <p className="text-center xl:hidden font-semibold text-[16px] text-[#6A6A6A]">
              © 2024 All rights reserved.{" "}
              <Link href="/" className="hover:text-[#F14C85] hover:underline">
                Breast Society of Ghana
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </Container>
  );
};

const FooterLinks = ({ links }: { links: any[] }) => {
  return (
    <ul className="space-y-5">
      {links.map((link) => {
        return (
          <li
            key={link.text}
            className={`text-center xl:text-left text-[#A5A5A5] hover:text-[#EF4A7B] capitalize font-semibold text-[16px] ${body.className}`}
          >
            <Link href={link.path}>{link.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Footer;
