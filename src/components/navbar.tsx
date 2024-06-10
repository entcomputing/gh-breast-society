import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import MobileDrawer from "./mobile-drawer";
import { links } from "@/lib/data/links";
import GradientButton from "./buttons/gradient-button";
import { body } from "@/lib/fonts";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-gray-300/40 backdrop-blur-[10px] w-full fixed z-50">
      <Container>
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="block">
            <Image
              src="/logo.svg"
              alt=""
              width={110}
              height={110}
              className="hidden lg:block"
            />

            <Image
              src="/logo.svg"
              alt=""
              width={80}
              height={80}
              className="lg:hidden"
            />
          </Link>

          <GradientButton
            text="Donate"
            classNames="px-4 py-2 rounded-[6px] font-semibold text-xs lg:hidden"
            onClick={() => {
              router.push("/donate");
            }}
          />

          <div className="flex-col items-end hidden space-y-5 lg:flex">
            <GradientButton
              text="Donate"
              classNames="px-7 py-2 rounded-[6px] font-bold"
              onClick={() => {
                router.push("/donate");
              }}
            />

            <ul
              className={`flex items-center space-x-5 text-white uppercase text-[14px] font-semibold ${body.className}`}
            >
              {links.map(({ text, path }) => {
                return (
                  <li
                    key={text}
                    className={`hover:text-[#C04C81]  ${
                      router.asPath === path ? "text-[#C04C81]" : "text-black"
                    }`}
                  >
                    <Link href={path}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <MobileDrawer menuItems={links} />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
