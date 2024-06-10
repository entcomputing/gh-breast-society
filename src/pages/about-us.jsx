import {
  AboutHero,
  AboutText,
  Mission,
  ExecutiveMembers,
  CouncilMemebers,
  Banner,
} from "@/components";
import { client } from "@/lib/contentful";

const AboutUs = ({ executiveMembers, councilMembers }) => {
  return (
    <>
      <AboutHero />
      <AboutText />
      <Mission />
      <ExecutiveMembers members={executiveMembers} />
      <CouncilMemebers members={councilMembers} />
      <Banner />
    </>
  );
};

export default AboutUs;

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "member",
  });

  const res2 = await client.getEntries({
    content_type: "councilMember",
  });

  const executiveMembers = res.items
    .map((item) => {
      return {
        name: item.fields.name,
        title: item.fields.title ? item.fields.title : "",
        slug: item.fields.slug,
        bio: item.fields.bio ? item.fields.bio : "",
        image: `https:${item.fields.image.fields.file.url}`,
      };
    })
    .reverse();

  const councilMembers = res2.items
    .map((item) => {
      return {
        name: item.fields.name,
        title: item.fields.title ? item.fields.title : "",
        slug: item.fields.slug,
        bio: item.fields.bio ? item.fields.bio : "",
        image: `https:${item.fields.image.fields.file.url}`,
      };
    })
    .reverse();

  return {
    props: {
      executiveMembers,
      councilMembers,
    },
  };
}
