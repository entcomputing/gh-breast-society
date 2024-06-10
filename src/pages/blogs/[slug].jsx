import { SingleBlog as Blog, PageHero } from "@/components";
import { client } from "@/lib/contentful";

const SingleBlog = ({ blog }) => {
  return (
    <>
      <PageHero title="Blog" />
      <Blog blog={blog} />
      <div className="px-[65px]">
        <hr className="bg-[#B6B6B6] h-[2px]" />
      </div>
    </>
  );
};

export default SingleBlog;

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blog",
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
    content_type: "blog",
    "fields.slug": params.slug,
  });

  const blog = {
    title: items[0].fields.title,
    content: items[0].fields.content,
    featuredImage: `https:${items[0].fields.featuredImage.fields.file.url}`,
    createdAt: items[0].sys.createdAt,
  };

  return {
    props: { blog },
  };
};
