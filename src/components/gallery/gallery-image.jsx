import { Fragment } from "react";
import Lightbox from "react-awesome-lightbox";
import Image from "next/image";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "react-awesome-lightbox/build/style.css";

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
          image={images.length === 1 && image}
          images={images.length > 1 && images}
          onClose={close}
          startIndex={idx}
        />
      </Modal>
    </Fragment>
  );
};

export default GalleryImage;
