import type { PointerEvent } from "react";
import { useRef, useState } from "react";
import { GalleryControls } from "../../components/GalleryControls";
import { ResponsiveImage } from "../../components/ResponsiveImage";
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
    if (!event.isPrimary || event.button !== 0) return;
    galleryDragStart.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
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

  const updatePortraitLight = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType !== "mouse" ||
      !window.matchMedia(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      ).matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    const { style, dataset } = event.currentTarget;
    style.setProperty("--portrait-tilt-x", `${(0.5 - y) * 5}deg`);
    style.setProperty("--portrait-tilt-y", `${(x - 0.5) * 5}deg`);
    style.setProperty("--portrait-shine-x", `${x * 100}%`);
    style.setProperty("--portrait-shine-y", `${y * 100}%`);
    dataset.lit = "true";
  };

  const resetPortraitLight = (event: PointerEvent<HTMLDivElement>) => {
    delete event.currentTarget.dataset.lit;
    event.currentTarget.style.removeProperty("--portrait-tilt-x");
    event.currentTarget.style.removeProperty("--portrait-tilt-y");
  };

  return (
    <aside className="portrait-panel" aria-label="Portrait gallery" aria-roledescription="carousel">
      <div className="portrait-gallery-shell">
        <div
          className="portrait-stack"
          onPointerMove={updatePortraitLight}
          onPointerLeave={resetPortraitLight}
        >
          <div className="portrait-card-scene">
            <ResponsiveImage
              alt=""
              aria-hidden="true"
              className="gallery-card-back back-one"
              src={previousPortrait.src}
              sizes="(max-width: 520px) 320px, (max-width: 860px) 380px, 420px"
              style={{ objectPosition: previousPortrait.objectPosition }}
            />
            <ResponsiveImage
              alt=""
              aria-hidden="true"
              className="gallery-card-back back-two"
              src={nextPortrait.src}
              sizes="(max-width: 520px) 320px, (max-width: 860px) 380px, 420px"
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
              <ResponsiveImage
                src={activePortrait.src}
                alt={activePortrait.alt}
                className="portrait-slide"
                draggable={false}
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 520px) 320px, (max-width: 860px) 380px, 420px"
                style={{ objectPosition: activePortrait.objectPosition }}
              />
            </div>
          </div>
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Portrait {activeImage + 1} of {profileImages.length}: {activePortrait.alt}
        </p>
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
