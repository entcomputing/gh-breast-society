import Container from "../container";
import SubTitle from "../sub-title";
import { body } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import { Fade } from "react-awesome-reveal";
import GradientOutlineButton from "../buttons/gradient-outline-button";
import { useRouter } from "next/router";

// import { blogs } from "@/lib/data/blogs";

const RecentProjects = ({ recentProjects }) => {
  const router = useRouter();

  const sortedBlogs = recentProjects.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );
  const specificDate = '2024-06-10T11:46:26.604Z';

  return (
    <div className={`bg-white section-p ${body.className}`}>
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-0">
          <div className="lg:w-[50%] lg:pr-10 xl:pr-20 space-y-5 text-black lg:border-r">
            <SubTitle text="latest" className="text-black capitalize" />

            <Fade direction="up" duration={1500} triggerOnce>
              <div className="flex items-center justify-between gap-5">
                <h1 className="font-semibold text-transparent text-[20px] lg:text-[25px] md:w-[70%] bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] bg-clip-text">
                  {"Pfizer: Enhancing Management Of Breast Cancer Patients"}
                </h1>

                <div className="flex-none bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] text-center rounded-[6px] text-white w-24 h-24 flex flex-col items-center justify-center">
                  <span className="font-bold capitalize">
                    {dayjs(specificDate).format("MMMM")}
                  </span>
                  <span className="flex text-[50px] items-center justify-center flex-none font-bold w-14 h-14">
                  {dayjs(specificDate).format("DD")}
                  </span>
                </div>
              </div>

              <div className="relative h-[250px] bg-black/20 rounded-[8px]">

                <Image
                  src="/imgs/project/project1.jpeg"
                  alt=""
                  priority
                  fill
                  object-fit="cover"
                  // className="m-2 rounded-lg shadow-md hover:scale-105"
                />
                {/* <Image
                  src={sortedBlogs[0].thumbnail}
                  alt=""
                  priority
                  fill
                  object-fit="cover"
                /> */}
              </div>

              <p className="font-light"> Female breast cancer is currently the most commonly diagnosed cancer in the world. In Ghana, breast cancer is the leading cause of cancer-related mortality among women and despite years of advocacy for early reporting and early treatment for breast cancer, patients with the disease still report late and default recommended treatment. </p>

              <GradientOutlineButton
                text="read more"
                classNames="py-2 px-5 rounded-[6px]"
                onClick={() => {
                  router.push(`/project`);
                }}
              />
            </Fade>
          </div>

          <div className="lg:w-[50%] lg:pl-10 xl:pl-20 space-y-5">
            <SubTitle text="Featured" className="text-black capitalize" />

            <Fade direction="up" duration={1500} triggerOnce>
              <ul className="divide-y">
                
                  return (
                    <div
                      className="flex items-center gap-4 py-3 text-white"
                      
                    >
                      <div className="rounded-[8px] relative h-[80px] w-[80px] flex-none bg-black/20">
                        <Image
                          src="/imgs/project/project1.jpeg"
                          alt=""
                          priority
                          fill
                          object-fit="cover"
                          // className="m-2 rounded-lg shadow-md hover:scale-105"
                        />
                      </div>

                      <div className="space-y-1 text-black">
                        <p className="text-xs font-bold leading-tight">
                          {"Pfizer: Enhancing Management Of Breast Cancer Patients"}
                        </p>

                        <p className="text-xs font-light"> Female breast cancer is currently the most commonly diagnosed cancer in the world. In Ghana, breast cancer is the leading cause of cancer-related mortality among women. </p>

                        <div className="flex items-center justify-between text-xs text-[#EF4A7B] font-semibold my-3">
                          <p>
                            {dayjs(specificDate).format("MMMM")}
                            {dayjs(specificDate).format("DD")}
                          </p>

                          <Link href={`/project`}>Read More...</Link>
                        </div>
                      </div>
                    </div>
                  );
                
              </ul>
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RecentProjects;
