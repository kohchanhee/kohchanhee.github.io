import type { PointerEvent } from "react";
import { useRef, useState } from "react";
import { GalleryControls } from "../../components/GalleryControls";
import { profileImages } from "../../data/profile";
import { getNextIndex, getPreviousIndex } from "../../lib/carousel";
import type { GalleryDirection } from "../../types";

export function PortraitGallery() {
  const [activeImage, setActiveImage] = useState(0);
  const [galleryDirection, setGalleryDirection] =
    useState<GalleryDirection>("next");
  const galleryDragStart = useRef<number | null>(null);
  const activePortrait = profileImages[activeImage];
  const previousPortrait =
    profileImages[getPreviousIndex(activeImage, profileImages.length)];
  const nextPortrait =
    profileImages[getNextIndex(activeImage, profileImages.length)];

  const showPreviousImage = () => {
    setGalleryDirection("previous");
    setActiveImage((current) => getPreviousIndex(current, profileImages.length));
  };

  const showNextImage = () => {
    setGalleryDirection("next");
    setActiveImage((current) => getNextIndex(current, profileImages.length));
  };

  const selectPortrait = (index: number) => {
    if (index === activeImage) {
      return;
    }

    setGalleryDirection(index > activeImage ? "next" : "previous");
    setActiveImage(index);
  };

  const handleGalleryPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    galleryDragStart.current = event.clientX;
  };

  const handleGalleryPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (galleryDragStart.current === null) {
      return;
    }

    const distance = event.clientX - galleryDragStart.current;
    galleryDragStart.current = null;

    if (Math.abs(distance) < 42) {
      return;
    }

    if (distance < 0) {
      showNextImage();
    } else {
      showPreviousImage();
    }
  };

  return (
    <aside className="portrait-panel" aria-label="Portrait gallery">
      <div className="portrait-gallery-shell">
        <img
          alt=""
          aria-hidden="true"
          className="gallery-card-back back-one"
          src={previousPortrait.src}
          style={{ objectPosition: previousPortrait.objectPosition }}
        />
        <img
          alt=""
          aria-hidden="true"
          className="gallery-card-back back-two"
          src={nextPortrait.src}
          style={{ objectPosition: nextPortrait.objectPosition }}
        />
        <div
          aria-label="Portrait gallery"
          className="portrait-gallery"
          data-direction={galleryDirection}
          key={activePortrait.src}
          onPointerCancel={() => {
            galleryDragStart.current = null;
          }}
          onPointerDown={handleGalleryPointerDown}
          onPointerUp={handleGalleryPointerUp}
        >
          <img
            src={activePortrait.src}
            alt={activePortrait.alt}
            className="portrait-slide"
            style={{ objectPosition: activePortrait.objectPosition }}
          />
        </div>
        <GalleryControls
          activeIndex={activeImage}
          ariaLabel="Portrait controls"
          className="gallery-controls"
          dots={profileImages.map((image, index) => ({
            key: image.src,
            label: `Show portrait ${index + 1}`,
          }))}
          nextLabel="Show next portrait"
          onNext={showNextImage}
          onPrevious={showPreviousImage}
          onSelectDot={selectPortrait}
          previousLabel="Show previous portrait"
        />
      </div>
    </aside>
  );
}
