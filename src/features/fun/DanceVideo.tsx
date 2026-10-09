import { lazy, Suspense, useEffect, useRef } from "react";
import type { DanceFeature } from "../../data/fun";

export type DanceVideoProps = NonNullable<DanceFeature["video"]>;

function NativeDanceVideo({ src, poster }: DanceVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = 0.2;
    return () => video.pause();
  }, [src]);

  return (
    <video
      ref={videoRef}
      aria-label="Dance performance"
      src={src}
      poster={poster}
      controls
      playsInline
      preload="none"
    />
  );
}

const DanceVideoPlayer = lazy(() =>
  import("./DanceVideoPlayer")
    .then((module) => ({ default: module.DanceVideoPlayer }))
    .catch(() => ({ default: NativeDanceVideo })),
);

export function DanceVideo(props: DanceVideoProps) {
  return (
    <Suspense
      fallback={
        <div className="dance-video-loading" aria-label="Loading dance player" aria-busy="true">
          {props.poster ? <img src={props.poster} alt="" /> : null}
        </div>
      }
    >
      <DanceVideoPlayer {...props} />
    </Suspense>
  );
}
