import { PageHero, RecentBlogs, RecentProjects, Tabs, ProjectInfo as ProjectInfo, ProjectDoc } from "@/components";
import { client } from "@/lib/contentful";

// import arhinful from "../../public/imgs/members/charles-arhinful.jpeg";
// import akwasi from "../../public/imgs/members/dr-akwasi.jpeg";
// import hannah from "../../public/imgs/members/dr-hannah.jpeg";
// import josephine from "../../public/imgs/members/josephine-nsaful.jpeg";
// import lily from "../../public/imgs/members/lily.jpeg";
// import gina from "../../public/imgs/members/gina.jpeg";

import project1 from "../../../public/imgs/project/project1.jpeg";
import project2 from "../../../public/imgs/project/project2.jpeg";
import project3 from "../../../public/imgs/project/project3.jpeg";

const Blogs = ({ eventGallery }) => {
  return (
    <>
      <PageHero title="Projects/Pfizer" />
      <ProjectInfo />
      <ProjectDoc/>
      {/* <RecentProjects recentBlogs={blogs} /> */}
      <div className="px-[65px]">
        <hr className="bg-[#B6B6B6] h-[2px]" />
      </div>
    </>
  );
};

export default Blogs;

// export async function getStaticProps() {
//   const res = await client.getEntries({
//     content_type: "blog",
//   });

//   const blogs = res.items.slice(0, 5).map((item) => {
//     return {
//       title: item.fields.title,
//       thumbnail: `https:${item.fields.thumbnail.fields.file.url}`,
//       excerpt: item.fields.excerpt,
//       createdAt: item.sys.createdAt,
//       slug: item.fields.slug,
//     };
//   });

//   return {
//     props: {
//       blogs,
//     },
//   };
// }


export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "eventGallery",
  });

  const eventGallery = res.items.map((item) => {
    return {
      name: item.fields.name,
      images: item.fields.images.map((image) => {
        return `https:${image.fields.file.url}`;
      }),
    };
  });

  return {
    props: { eventGallery },
  };
}

const gallery = [

  {
    name: "Dr. Lily Paemka",
    images: project1,
  },
  {
    name: "Mrs. Gina Kumah-Dzagah",
    images: project2,
  },
  {
    name: "Charles Arhinful",
    images: project3,
  },
];