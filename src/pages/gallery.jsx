// import { PageHero, Tabs } from "@/components";
// import { client } from "@/lib/contentful";

// const Gallery = ({ eventGallery }) => {
//   return (
//     <>
//       <PageHero title="gallery" />
//       <Tabs 
//       gallery={eventGallery}
//       agm={eventGallery}
//       launch={eventGallery}
//       walk={eventGallery}
//       screening={eventGallery}
//       advocacy={eventGallery}
//       outreaches={eventGallery} 

//       />
//     </>
//   );
// };

// export default Gallery;

// export async function getStaticProps() {
//   const res = await client.getEntries({
//     content_type: "eventGallery",
//   });

//   const eventGallery = res.items.map((item) => {
//     return {
//       name: item.fields.name,
//       images: item.fields.images.map((image) => {
//         return `https:${image.fields.file.url}`;
//       }),
//     };
//   });

//   return {
//     props: { eventGallery },
//   };
// }


















import { PageHero, Tabs } from "@/components";
import { client } from "@/lib/contentful";

const Gallery = ({ eventGallery, agm, launch, walk, screening, advocacy, outreaches}) => {
  return (
    <>
      <PageHero title="gallery" />
      <Tabs 
      gallery={eventGallery}
      agm={agm}
      launch={launch}
      walk={walk}
      screening={screening}
      advocacy={advocacy}
      outreaches={outreaches} 

      />
    </>
  );
};


export default Gallery;

// export async function getStaticProps() {
//   const res = await client.getEntries({
//     content_type: "eventGallery",
//   });

//   const eventGallery = res.items.map((item) => {
//     return {
//       name: item.fields.name,
//       images: item.fields.images.map((image) => {
//         return `https:${image.fields.file.url}`;
//       }),
//     };
//   });

//   return {
//     props: { eventGallery },
//   };
// }




export async function getStaticProps() {
  // Helper function to fetch data by content type
  const fetchContent = async (contentType) => {
    const res = await client.getEntries({ content_type: contentType });
    return res.items.map((item) => ({
      name: item.fields.name,
      images: item.fields.images.map((image) => `https:${image.fields.file.url}`)
    }));
  };


  // Fetch data for each category
  const [eventGallery, agm, launch, walk, screening, advocacy, outreaches] = await Promise.all([
    fetchContent("eventGallery"),
    fetchContent("agm"),
    fetchContent("launchGallery"),
    fetchContent("walkGallery"),
    fetchContent("screeningGallery"),
    fetchContent("advocacyGallery"),
    fetchContent("outreachesGallery")
  ]);

  return {
    props: { eventGallery, agm, launch, walk, screening, advocacy, outreaches},
  };
}