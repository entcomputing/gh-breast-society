import Container from "../container";
import { body } from "@/lib/fonts";
import dayjs from "dayjs";
import GradientOutlineButton from "../buttons/gradient-outline-button";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

const AllBlogs = ({ blogs }) => {
  const router = useRouter();

  return (
    <Container>
      <Fade duration={1500} cascade triggerOnce direction="up">
        <div
          className={`section-p grid lg:grid-cols-3 gap-10 ${body.className}`}
        >
          {blogs.map((blog) => {
            return (
              <div className="flex flex-col items-start space-y-4">
                <div className="flex justify-between gap-5">
                  <h1 className="font-semibold text-transparent text-[20px] lg:text-[16px] leading-tight md:w-[70%] bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] bg-clip-text">
                    {blog.title}
                  </h1>

                  <div className="flex-none bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] text-center rounded-[6px] text-white w-16 h-16 flex flex-col items-center justify-center">
                    <span className="font-bold capitalize">
                      {dayjs(blog.createdAt).format("MMMM")}
                    </span>
                    <span className="flex text-[30px] items-center justify-center flex-none font-bold w-8 h-8">
                      {dayjs(blog.createdAt).format("DD")}
                    </span>
                  </div>
                </div>

                <div className="relative h-[200px] w-full bg-black/20 rounded-[8px]">
                  <Image
                    src={blog.featuredImage}
                    alt=""
                    priority
                    fill
                    object-fit="cover"
                  />
                </div>

                <p className="font-light">{blog.excerpt}</p>

                <GradientOutlineButton
                  text="read more"
                  classNames="py-2 px-5 rounded-[6px]"
                  onClick={() => {
                    router.push(`/blogs/${blog.slug}`);
                  }}
                />
              </div>
            );
          })}
        </div>
      </Fade>
    </Container>
  );
};

export default AllBlogs;
