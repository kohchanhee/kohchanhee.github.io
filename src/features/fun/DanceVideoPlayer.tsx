import { LoaderCircle, Maximize, Minimize, Pause, Play, Volume1, Volume2, VolumeX } from "lucide-react";
import {
  MediaController,
  MediaControlBar,
  MediaFullscreenButton,
  MediaLoadingIndicator,
  MediaMuteButton,
  MediaPlayButton,
  MediaTimeDisplay,
  MediaTimeRange,
  MediaVolumeRange,
} from "media-chrome/react";
import { useEffect, useRef, useState } from "react";
import type { DanceVideoProps } from "./DanceVideo";

export function DanceVideoPlayer({ src, poster, duration }: DanceVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = 0.2;
    return () => video.pause();
  }, [src]);

  return (
    <div className="dance-video">
      <MediaController
        className="dance-video-player"
        aria-label="Dance video player"
        autohide="2"
        noVolumePref
        noMutedPref
        gesturesDisabled={hasError}
        defaultStreamType="on-demand"
        defaultDuration={duration}
      >
        <video
          slot="media"
          ref={videoRef}
          src={src}
          aria-label="Dance performance"
          poster={poster}
          playsInline
          preload="none"
          controls={hasError}
          onError={() => setHasError(true)}
        />
        {!hasError ? (
          <>
            <MediaPlayButton
              slot="centered-chrome"
              className="dance-video-start"
              title="Play dance performance"
            >
              <span slot="play">
                <Play size={28} fill="currentColor" aria-hidden="true" />
              </span>
              <span slot="pause">
                <Pause size={28} fill="currentColor" aria-hidden="true" />
              </span>
            </MediaPlayButton>
            <MediaLoadingIndicator slot="centered-chrome" noAutohide>
              <LoaderCircle slot="icon" className="music-buffering" size={36} aria-hidden="true" />
            </MediaLoadingIndicator>
            <div className="dance-video-controls">
              <MediaTimeRange className="dance-video-seek" />
              <MediaControlBar className="dance-video-toolbar">
                <MediaPlayButton className="dance-video-play">
                  <span slot="play">
                    <Play size={18} fill="currentColor" aria-hidden="true" />
                  </span>
                  <span slot="pause">
                    <Pause size={18} fill="currentColor" aria-hidden="true" />
                  </span>
                </MediaPlayButton>
                <MediaTimeDisplay showDuration />
                <span className="dance-video-spacer" aria-hidden="true" />
                <MediaMuteButton>
                  <span slot="off">
                    <VolumeX size={18} aria-hidden="true" />
                  </span>
                  <span slot="low">
                    <Volume1 size={18} aria-hidden="true" />
                  </span>
                  <span slot="medium">
                    <Volume2 size={18} aria-hidden="true" />
                  </span>
                  <span slot="high">
                    <Volume2 size={18} aria-hidden="true" />
                  </span>
                </MediaMuteButton>
                <MediaVolumeRange className="dance-video-volume" />
                <MediaFullscreenButton>
                  <span slot="enter">
                    <Maximize size={18} aria-hidden="true" />
                  </span>
                  <span slot="exit">
                    <Minimize size={18} aria-hidden="true" />
                  </span>
                </MediaFullscreenButton>
              </MediaControlBar>
            </div>
          </>
        ) : null}
      </MediaController>
      {hasError ? (
        <p className="dance-video-error" role="alert">
          The video couldn't load. <a href={src} download>Download the video</a> to watch it locally.
        </p>
      ) : null}
    </div>
  );
}
