import dayjs from "dayjs";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Container from "../container";
import { body } from "@/lib/fonts";
import { Fade } from "react-awesome-reveal";

const SingleBlog = ({ blog }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => {
        return <p className="">{children}</p>;
      },
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-semibold">{text}</span>,
    },
  };

  return (
    <Container>
      <div className="space-y-10 section-p">
        <div className="flex items-center justify-between gap-5">
          <h1 className="font-semibold text-transparent text-[20px] lg:text-[30px] md:w-[40%] bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] bg-clip-text">
            {blog.title}
          </h1>

          <div className="flex-none bg-gradient-to-b from-[#EF4A7B] to-[#F858CB] text-center rounded-[6px] text-white w-24 h-24 flex flex-col items-center justify-center">
            <span className="font-bold capitalize">
              {dayjs(blog.createdAt).format("MMMM")}
            </span>
            <span className="flex text-[50px] items-center justify-center flex-none font-bold w-14 h-14">
              {dayjs(blog.createdAt).format("DD")}
            </span>
          </div>
        </div>

        <div className="relative h-[200px] md:h-[450px] bg-black/20 rounded-[8px]">
          <Image src={blog.featuredImage} alt="" fill object-fit="cover" />
        </div>

        <Fade direction="up" duration={1500} triggerOnce>
          <div className={`space-y-5 ${body.className}`}>
            {documentToReactComponents(blog.content, options)}
          </div>
        </Fade>
      </div>
    </Container>
  );
};

export default SingleBlog;
