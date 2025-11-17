import { Fragment } from "react";
import Lightbox from "yet-another-react-lightbox";
import Image from "next/image";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "yet-another-react-lightbox/styles.css";

const GalleryImage = ({ images, image, idx }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Fragment key={idx}>
      <div
        className="relative h-[300px] cursor-pointer bg-black/20"
        onClick={open}
      >
        <Image
          src={image}
          alt=""
          // placeholder="blur"
          className="object-cover"
          fill
        />
      </div>

      <Modal opened={opened} fullScreen>
        <Lightbox
          open={opened}
          index={idx}
          close={close}
          slides={Array.isArray(images) ? images.map((src) => ({ src })) : [{ src: image }]}
        />
      </Modal>
    </Fragment>
  );
};

export default GalleryImage;
