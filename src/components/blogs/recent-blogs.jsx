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

const RecentBlogs = ({ recentBlogs }) => {
  const router = useRouter();

  const sortedBlogs = recentBlogs.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  return (
    <div className={`bg-white section-p ${body.className}`}>
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-0">
          <div className="lg:w-[50%] lg:pr-10 xl:pr-20 space-y-5 text-black lg:border-r">
            <SubTitle text="latest" className="text-black capitalize" />

            <Fade direction="up" duration={1500} triggerOnce>
              <div className="flex items-center justify-between gap-5">
                <h1 className="font-semibold text-transparent text-[20px] lg:text-[25px] md:w-[70%] bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] bg-clip-text">
                  {sortedBlogs[0].title}
                </h1>

                <div className="flex-none bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] text-center rounded-[6px] text-white w-24 h-24 flex flex-col items-center justify-center">
                  <span className="font-bold capitalize">
                    {dayjs(sortedBlogs[0].createdAt).format("MMMM")}
                  </span>
                  <span className="flex text-[50px] items-center justify-center flex-none font-bold w-14 h-14">
                    {dayjs(sortedBlogs[0].createdAt).format("DD")}
                  </span>
                </div>
              </div>

              <div className="relative h-[250px] bg-black/20 rounded-[8px]">
                <Image
                  src={sortedBlogs[0].thumbnail}
                  alt=""
                  priority
                  fill
                  object-fit="cover"
                />
              </div>

              <p className="font-light">{sortedBlogs[0].excerpt}</p>

              <GradientOutlineButton
                text="read more"
                classNames="py-2 px-5 rounded-[6px]"
                onClick={() => {
                  router.push(`/blogs/${sortedBlogs[0].slug}`);
                }}
              />
            </Fade>
          </div>

          <div className="lg:w-[50%] lg:pl-10 xl:pl-20 space-y-5">
            <SubTitle text="Featured" className="text-black capitalize" />

            <Fade direction="up" duration={1500} triggerOnce>
              <ul className="divide-y">
                {sortedBlogs.slice(1).map((blog, idx) => {
                  return (
                    <div
                      className="flex items-center gap-4 py-3 text-white"
                      key={idx}
                    >
                      <div className="rounded-[8px] relative h-[80px] w-[80px] flex-none bg-black/20">
                        <Image
                          src={blog.thumbnail}
                          alt=""
                          fill
                          object-fit="cover"
                          priority
                        />
                      </div>

                      <div className="space-y-1 text-black">
                        <p className="text-xs font-bold leading-tight">
                          {blog.title}
                        </p>

                        <p className="text-xs font-light">{blog.excerpt}</p>

                        <div className="flex items-center justify-between text-xs text-[#EF4A7B] font-semibold my-3">
                          <p>
                            {dayjs(blog.createdAt).format("MMMM")}{" "}
                            {dayjs(blog.createdAt).format("DD")}
                          </p>

                          <Link href={`/blogs/${blog.slug}`}>Read More...</Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RecentBlogs;
