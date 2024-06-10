import { PageHero, RecentBlogs } from "@/components";
import { client } from "@/lib/contentful";

const Blogs = ({ blogs }) => {
  return (
    <>
      <PageHero title="Blogs" />
      <RecentBlogs recentBlogs={blogs} />
      <div className="px-[65px]">
        <hr className="bg-[#B6B6B6] h-[2px]" />
      </div>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "blog",
  });

  const blogs = res.items.slice(0, 5).map((item) => {
    return {
      title: item.fields.title,
      thumbnail: `https:${item.fields.thumbnail.fields.file.url}`,
      excerpt: item.fields.excerpt,
      createdAt: item.sys.createdAt,
      slug: item.fields.slug,
    };
  });

  return {
    props: {
      blogs,
    },
  };
}
