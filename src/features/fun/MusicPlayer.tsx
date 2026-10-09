import { Download, LoaderCircle, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import type { MusicTrack } from "../../data/fun";
import musicWaveforms from "../../data/musicWaveforms.json";

type Waveform = { duration: number; peaks: number[][] };
const waveforms: Record<string, Waveform> = musicWaveforms;
const DEFAULT_VOLUME = 20;

function formatTime(seconds: number) {
  const time = Math.max(0, Math.floor(seconds));
  return `${Math.floor(time / 60)}:${String(time % 60).padStart(2, "0")}`;
}

type MusicPlayerProps = {
  track: MusicTrack;
  onPlay: (audio: HTMLAudioElement) => void;
};

export function MusicPlayer({ track, onPlay }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const waveformRef = useRef<WaveSurfer | null>(null);
  const waveform = waveforms[track.src];
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(waveform?.duration ?? 0);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [isMuted, setIsMuted] = useState(false);
  const [hasPlaybackError, setHasPlaybackError] = useState(false);
  const [hasWaveformError, setHasWaveformError] = useState(false);
  const useNativeControls = !waveform || hasWaveformError;

  useEffect(() => {
    const audio = audioRef.current;
    const container = containerRef.current;
    if (!audio) return;
    audio.volume = DEFAULT_VOLUME / 100;
    if (!container || !waveform) return () => audio.pause();

    const wave = WaveSurfer.create({
      container,
      media: audio,
      url: track.src,
      peaks: waveform.peaks,
      duration: waveform.duration,
      height: 64,
      barWidth: 3,
      barGap: 2,
      barRadius: 2,
      barMinHeight: 2,
      normalize: true,
      waveColor: "#53618b",
      progressColor: "#a9c9ff",
      cursorColor: "#dbe6ff",
      cursorWidth: 1,
      interact: false,
    });
    waveformRef.current = wave;
    wave.on("error", () => setHasWaveformError(true));

    return () => {
      audio.pause();
      wave.destroy();
      waveformRef.current = null;
    };
  }, [track.src, waveform]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }

    if (hasPlaybackError) audio.load();
    setHasPlaybackError(false);
    try {
      await audio.play();
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError")) {
        setHasPlaybackError(true);
        setIsPlaying(false);
        setIsBuffering(false);
      }
    }
  };

  const seek = (time: number) => {
    waveformRef.current?.setTime(time);
    setCurrentTime(time);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (volume === 0) {
      audio.volume = DEFAULT_VOLUME / 100;
      audio.muted = false;
    } else {
      audio.muted = !audio.muted;
    }
  };

  const playbackLabel = `${isPlaying ? "Pause" : "Play"} ${track.title}`;
  const muteLabel = `${isMuted || volume === 0 ? "Unmute" : "Mute"} ${track.title}`;

  return (
    <div className="music-player" data-playing={isPlaying}>
      <audio
        aria-label={`${track.title} audio track`}
        ref={audioRef}
        src={track.src}
        controls={useNativeControls}
        preload="none"
        onPlay={(event) => {
          onPlay(event.currentTarget);
          setIsPlaying(true);
        }}
        onPause={() => {
          setIsPlaying(false);
          setIsBuffering(false);
        }}
        onEnded={() => {
          setIsPlaying(false);
          setIsBuffering(false);
        }}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => {
          if (Number.isFinite(event.currentTarget.duration)) {
            setDuration(event.currentTarget.duration);
          }
        }}
        onVolumeChange={(event) => {
          setVolume(Math.round(event.currentTarget.volume * 100));
          setIsMuted(event.currentTarget.muted);
        }}
        onError={() => {
          setHasPlaybackError(true);
          setIsPlaying(false);
          setIsBuffering(false);
        }}
      />
      <div className="music-waveform" hidden={useNativeControls}>
        <div ref={containerRef} aria-hidden="true" />
        <input
          className="music-seek"
          type="range"
          aria-label={`Seek ${track.title}`}
          aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
          min={0}
          max={duration}
          step={0.1}
          value={Math.min(currentTime, duration)}
          onChange={(event) => seek(Number(event.currentTarget.value))}
        />
      </div>
      <div className="music-player-controls" hidden={useNativeControls}>
        <div className="music-transport">
          <button
            className="music-play"
            type="button"
            onClick={togglePlayback}
            aria-label={playbackLabel}
            title={playbackLabel}
          >
            {isBuffering && isPlaying ? (
              <LoaderCircle className="music-buffering" size={20} aria-hidden="true" />
            ) : isPlaying ? (
              <Pause size={18} fill="currentColor" aria-hidden="true" />
            ) : (
              <Play size={18} fill="currentColor" aria-hidden="true" />
            )}
          </button>
          <div className="music-time" aria-hidden="true">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        <div className="music-volume">
          <button
            type="button"
            className="music-mute"
            onClick={toggleMute}
            aria-label={muteLabel}
            title={muteLabel}
            aria-pressed={isMuted || volume === 0}
          >
            {isMuted || volume === 0 ? (
              <VolumeX size={18} aria-hidden="true" />
            ) : (
              <Volume2 size={18} aria-hidden="true" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            value={isMuted ? 0 : volume}
            aria-label={`Volume for ${track.title}`}
            aria-valuetext={`${isMuted ? 0 : volume} percent`}
            onChange={(event) => {
              if (audioRef.current) {
                audioRef.current.volume = Number(event.currentTarget.value) / 100;
                audioRef.current.muted = false;
              }
            }}
          />
        </div>
      </div>
      {hasPlaybackError ? (
        <p className="music-error" role="alert">
          This track couldn't load. Try again or <a href={track.src} download>
            download it <Download size={14} aria-hidden="true" />
          </a>.
        </p>
      ) : null}
    </div>
  );
}
