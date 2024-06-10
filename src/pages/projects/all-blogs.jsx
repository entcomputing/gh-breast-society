import { PageHero, AllBlogs as Blogs } from "@/components";
import { client } from "@/lib/contentful";

const AllBlogs = ({ blogs }) => {
  return (
    <>
      <PageHero title="All Blogs" />
      <Blogs blogs={blogs} />
      <div className="px-[65px]">
        <hr className="bg-[#B6B6B6] h-[2px]" />
      </div>
    </>
  );
};

export default AllBlogs;

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "blog",
  });

  const blogs = res.items.map((item) => {
    return {
      title: item.fields.title,
      slug: item.fields.slug,
      thumbnail: `https:${item.fields.thumbnail.fields.file.url}`,
      featuredImage: `https:${item.fields.featuredImage.fields.file.url}`,
      createdAt: item.sys.createdAt,
    };
  });

  return {
    props: {
      blogs,
    },
  };
}
