import { PageHero, Tabs } from "@/components";
import { client } from "@/lib/contentful";

const Gallery = ({ eventGallery }) => {
  return (
    <>
      <PageHero title="gallery" />
      <Tabs gallery={eventGallery} />
    </>
  );
};

export default Gallery;

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
