import { FC } from "react";
import Container from "../container";
import { Title } from "@/components";
import { body } from "@/lib/fonts";
import Members from "./members";
import GrayText from "../gray-text";

// import { members } from "@/lib/data/council-members";

type Member = {
  name: string;
  title: string;
  image: string;
};

type CouncilMembersProps = {
  members: Member[];
};

const CouncilMembers: FC<CouncilMembersProps> = ({ members }) => {
  return (
    <Container>
      <div className={`space-y-5 section-p ${body.className}`}>
        <div className="space-y-3">
          <Title text="council members" />

          <GrayText text="Breast Society Of Ghana Senior Leadership" />
        </div>

        <div className="h-6 lg:h-10" />

        <Members members={members} />
      </div>
    </Container>
  );
};

export default CouncilMembers;
