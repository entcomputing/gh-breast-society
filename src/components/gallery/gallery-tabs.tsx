import Container from "../container";
import SubTitle from "../sub-title";
import { Tabs } from "@mantine/core";
import { body } from "@/lib/fonts";
import Gallery from "./gallery";
import { FC } from "react";

type EventGallery = {
  name: string;
  images: string[];
};

type GalleryTabsProps = {
  gallery: EventGallery[];
  agm: EventGallery[];
  launch: EventGallery[];
  walk: EventGallery[];
  screening: EventGallery[];
  advocacy: EventGallery[];
  outreaches: EventGallery[];
};

const GalleryTabs: FC<GalleryTabsProps> = ({ gallery, agm, launch, walk, screening, advocacy, outreaches }) => {
  const allImages = gallery.reduce(
    (result: string[], current: EventGallery) => {
      return [...result, ...current.images];
    },
    []
  );

  const agmImages = agm.reduce(
    (result: string[], current: EventGallery) => {
      return [...result, ...current.images];
    },
    []
  );


  const launchImages = launch.reduce(
    (result: string[], current: EventGallery) => {
      return [...result, ...current.images];
    },
    []
  );

  const walkImages = walk.reduce(
    (result: string[], current: EventGallery) => {
      return [...result, ...current.images];
    },
    []
  );

  const screeningImages = screening.reduce(
    (result: string[], current: EventGallery) => {
      return [...result, ...current.images];
    },
    []
  );

  const advocacyImages = advocacy.reduce(
    (result: string[], current: EventGallery) => {
      return [...result, ...current.images];
    },
    []
  );

  const outreachesImages = outreaches.reduce(
    (result: string[], current: EventGallery) => {
      return [...result, ...current.images];
    },
    []
  );

  const tabTitles = gallery.map((gallery) => gallery.name);
  
  const shuffleImages = (images: string[]) => {
    for (let i = images.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let k = images[i];
      images[i] = images[j];
      images[j] = k;
    }
    return images;
  };

  const shuffledImages = shuffleImages(allImages);

  const shuffledAgmImages = shuffleImages(agmImages);

  const shuffledLaunchImages = shuffleImages(launchImages);

  const shuffledWalkImages = shuffleImages(walkImages);

  const shuffledScreeningImages = shuffleImages(screeningImages);

  const shuffledAdvocacyImages = shuffleImages(advocacyImages);

  const shuffledOutreachesImages = shuffleImages(outreachesImages);

  return (
    <Container>
      <div className="space-y-10 section-p">
        <SubTitle
          text="Memories from past events"
          className="text-[#EF4A7B] text-center capitalize"
        />

        <Tabs
          defaultValue="All"
          classNames={{
            tab: `${body.className} hover:bg-transparent text-[#747373] font-semibold`,
            tabsList: "border-b-0",
          }}
          variant="default"
        >
          <Tabs.List position="center" grow>
            <Tabs.Tab value="All">All Images</Tabs.Tab>
            <Tabs.Tab value="Some">AGM Images</Tabs.Tab>
            <Tabs.Tab value="Launch">Launch Images</Tabs.Tab>
            <Tabs.Tab value="Walk">Walk Images</Tabs.Tab>
            <Tabs.Tab value="Screening">Screening Images</Tabs.Tab>
            <Tabs.Tab value="Advocacy">Advocacy Images</Tabs.Tab>
            <Tabs.Tab value="Outreaches">Outreaches Images</Tabs.Tab>

            {tabTitles.length > 2 &&
              tabTitles.map((title, idx) => (
                <Tabs.Tab key={idx} value={title}>
                  <p className="capitalize">{title}</p>
                </Tabs.Tab>
              ))}
          </Tabs.List>

          {/* Panel for "All Images" */}
          <Tabs.Panel value="All" pt="xs">
            <Gallery images={shuffledImages} />
          </Tabs.Panel>

          {/* Panel for "AGM Images" */}
          <Tabs.Panel value="Some" pt="xs">
            <Gallery images={shuffledAgmImages} />
          </Tabs.Panel>

          {/* Panel for "Launch Images" */}
          <Tabs.Panel value="Launch" pt="xs">
            <Gallery images={shuffledLaunchImages} />
          </Tabs.Panel>

          {/* Panel for "Walk Images" */}
          <Tabs.Panel value="Walk" pt="xs">
            <Gallery images={shuffledWalkImages} />
          </Tabs.Panel>

          {/* Panel for "Screening Images" */}
          <Tabs.Panel value="Screening" pt="xs">
            <Gallery images={shuffledScreeningImages} />
          </Tabs.Panel>

          {/* Panel for "Screening Images" */}
          <Tabs.Panel value="Advocacy" pt="xs">
            <Gallery images={shuffledAdvocacyImages} />
          </Tabs.Panel>

          {/* Panel for "Screening Images" */}
          <Tabs.Panel value="Outreaches" pt="xs">
            <Gallery images={shuffledOutreachesImages} />
          </Tabs.Panel>

          {/* Panels for each event */}
          {gallery.length > 2 &&
            gallery.map((gallery, idx) => (
              <Tabs.Panel key={idx} value={gallery.name} pt="xs">
                <Gallery images={gallery.images} />
              </Tabs.Panel>
            ))}
        </Tabs>
      </div>
    </Container>
  );
};

export default GalleryTabs;
