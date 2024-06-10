// import { client } from "@/lib/contentful";
import { PageHero } from "@/components";

const SingleEvent = () => {
  return (
    <>
      <PageHero title="Event" />
    </>
  );
};

export default SingleEvent;

// export const getStaticPaths = async () => {
//   const res = await client.getEntries({
//     content_type: "event",
//   });

//   const paths = res.items.map((item) => {
//     return {
//       params: { slug: item.fields.slug },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const { items } = await client.getEntries({
//     content_type: "event",
//     "fields.slug": params.slug,
//   });

//   const blog = {
//     ...items[0].fields,
//     featuredImage: `https:${item[0].fields.featuredImage.fields.file.url}`,
//     createdAt: item[0].sys.createdAt,
//   };

//   return {
//     props: {},
//   };
// };
