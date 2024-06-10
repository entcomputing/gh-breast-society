import { FC, useState } from "react";
import { Fade } from "react-awesome-reveal";
import GalleryImage from "./gallery-image";
import GradientOutlineButton from "../buttons/gradient-outline-button";

type GalleryProps = {
  images: any[];
};

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [limit, setLimit] = useState(6);
  const length = images.length;

  const showMore = () => {
    if (limit < length) {
      setLimit(limit + 3);
    }
  };

  return (
    <div className="space-y-10">
      <Fade duration={1500} triggerOnce>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {images.slice(0, limit).map((img, idx) => {
            return (
              <GalleryImage
                image={img}
                images={images.slice(0, limit)}
                idx={idx}
                key={idx}
              />
            );
          })}
        </div>
      </Fade>

      {limit < length && (
        <div className="flex justify-center">
          <GradientOutlineButton
            text="load more"
            classNames="py-2 px-6 rounded-[6px]"
            onClick={showMore}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
