import { FC } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Burger } from "@mantine/core";
import { useRouter } from "next/router";
import Link from "next/link";
import { body } from "@/lib/fonts";

type MobileDrawerProps = {
  menuItems: any[];
};

const MobileDrawer: FC<MobileDrawerProps> = ({ menuItems }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        transitionProps={{
          duration: 0,
        }}
        position="right"
        classNames={{
          content: "bg-gradient-to-r from-[#EF4A7B] to-[#F858CB]",
          header: "bg-gradient-to-r from-[#EF4A7B] to-[#F858CB] border-0",
          close: "text-white",
        }}
      >
        <ul className={`space-y-10 ${body.className}`}>
          {menuItems.map((item) => {
            return (
              <li
                key={item.text}
                className={`font-medium uppercase ${
                  router.asPath === item.path ? "text-black" : "text-white"
                }`}
                onClick={() => close()}
              >
                <Link href={item.path}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </Drawer>

      <Burger opened={opened} onClick={open} className="lg:hidden" />
    </>
  );
};

export default MobileDrawer;
