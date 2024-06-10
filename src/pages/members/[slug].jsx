import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import { client } from "@/lib/contentful";
import { PageHero } from "@/components";
import { body } from "@/lib/fonts";

const MemberBio = ({ member }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => {
        return <p className="">{children}</p>;
      },
    },
  };

  return (
    <>
      <PageHero title={member.name} />
      <div className="py-10 flex flex-col items-center space-y-10">
        <div className="relative w-[200px] h-[200px] rounded-full bg-black/20">
          <Image
            src={member.image}
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>

        <p className="capitalize text-[#C04C81] font-semibold text-[25px]">
          {member.name}
        </p>

        <div className={`space-y-5 ${body.className} max-w-4xl mx-auto`}>
          {documentToReactComponents(member.bio, options)}
        </div>
      </div>
    </>
  );
};

export default MemberBio;

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "member",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "member",
    "fields.slug": params.slug,
  });

  const member = {
    name: items[0].fields.name,
    title: items[0].fields.title,
    image: `https:${items[0].fields.image.fields.file.url}`,
    bio: items[0].fields.bio ? items[0].fields.bio : "",
  };

  return {
    props: { member },
  };
};
