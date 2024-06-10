import { PageHero, Events as UpcomingEvents, Gallery } from "@/components";
import { client } from "@/lib/contentful";

const Events = ({ events, images }) => {
  return (
    <>
      <PageHero title="events" />
      <UpcomingEvents events={events} />
      <Gallery images={images} />
    </>
  );
};

export default Events;

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "event",
  });

  const res2 = await client.getEntries({
    content_type: "eventGallery",
  });

  const events = res.items
    .filter((item) => item.fields.startDate >= new Date().toISOString())
    .sort((a, b) => new Date(a.fields.startDate) - new Date(b.fields.startDate))
    .map((item) => {
      return {
        ...item.fields,
        thumbnail: `https:${item.fields.thumbnail.fields.file.url}`,
      };
    });

  const eventGallery = res2.items.map((item) => {
    return {
      name: item.fields.name,
      images: item.fields.images.map((image) => {
        return `https:${image.fields.file.url}`;
      }),
    };
  });

  const allImages = eventGallery.reduce((result, current) => {
    return [...result, ...current.images];
  }, []);

  const shuffleImages = (images) => {
    for (let i = images.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let k = images[i];

      images[i] = images[j];
      images[j] = k;
    }

    return images;
  };

  return {
    props: {
      events: events.slice(0, 6),
      images: shuffleImages(allImages).slice(0, 10),
    },
    revalidate: 43200,
  };
}
