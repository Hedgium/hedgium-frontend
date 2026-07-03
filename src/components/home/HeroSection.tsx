'use client';

import { useRef, useState } from 'react';
import { ChevronDown, Play, Pause } from 'lucide-react';

/** Full text transcript for the hero video (WCAG + `aria-describedby`). */
const HERO_VIDEO_TRANSCRIPT =
  'This hero clip plays on a loop, muted, with no spoken dialogue; it provides atmospheric visuals only. The main message is given in text on this screen: the headline "Ambition Guided by Intelligence. Defined by Performance" and the banner paragraph about market experience, opportunities, and risk-aware capital performance. English captions for the clip are supplied via a WebVTT track on the video element.';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative h-[96vh] w-full overflow-hidden flex items-center justify-center text-white">
      
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        aria-label="Muted hero background video"
        aria-describedby="hero-video-transcript"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        <track
          kind="captions"
          srcLang="en"
          label="English captions"
          src="/videos/hero_video_captions.vtt"
        />
      </video>

      {/* Screen-reader transcript + audit tools; not shown visually */}
      <div id="hero-video-transcript" className="sr-only">
        <p>{HERO_VIDEO_TRANSCRIPT}</p>
      </div>

      {/* Play / Pause button - top right. Persistent dark backdrop (not just on hover)
          guarantees the icon meets 3:1 non-text contrast regardless of the video frame behind it. */}
      <button
        type="button"
        onClick={togglePlay}
        className="absolute cursor-pointer top-4 right-4 md:top-6 md:right-6 z-20 touch-target inline-flex items-center justify-center rounded-full bg-black/75 backdrop-blur-sm hover:bg-black/85 transition-colors"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" strokeWidth={2} aria-hidden="true" />
        ) : (
          <Play className="w-5 h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" strokeWidth={2} aria-hidden="true" />
        )}
      </button>

      {/* Container */}
      <div className="absolute top-36 right-4 left-4 lg:top-24 lg:right-8 lg:left-8 z-10 flex items-center justify-center">
        
        <div
          className="max-w-8xl w-full px-4 lg:px-8"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          <div className="w-full md:w-8/12 lg:w-6/12 bg-primary/20 p-4 lg:p-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium leading-tight">
              Ambition Guided by Intelligence. Defined by Performance
            </h1>
          </div>
        </div>

      </div>

      {/* Optional readable transcript — small chip, keeps trapezium clean */}
      <details className="absolute top-[4.75rem] right-4 z-40 max-w-xs rounded-lg border-2 border-white/55 bg-black/35 text-left text-white shadow-lg backdrop-blur-md open:max-w-sm open:bg-black/50 md:top-[5.25rem] md:right-6">
        <summary className="flex cursor-pointer list-none items-center gap-1.5 px-3 py-2 text-xs font-medium uppercase tracking-wider text-white outline-none transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 [&::-webkit-details-marker]:hidden">
          Transcript
          <ChevronDown className="size-3.5 shrink-0 opacity-80" aria-hidden />
        </summary>
        <div
          className="max-h-36 overflow-y-auto border-t-2 border-white/45 px-3 py-2 text-xs leading-relaxed text-white outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
          tabIndex={0}
          role="region"
          aria-label="Hero video transcript text"
        >
          {HERO_VIDEO_TRANSCRIPT}
        </div>
      </details>

      {/* Bottom trapezium */}
      <div className="trapezium-wrap absolute bottom-0 left-1/2 -translate-x-1/2 px-4 md:px-8 w-full max-w-8xl z-30">
        <div className="trapezium-reverse mx-auto">
          <div className="trapezium-inner">
            <p className="text-base text-center md:text-lg lg:text-xl text-white leading-relaxed">
              <span className="text-center">
              Leveraging two decades of market experience, we identify real-time market opportunities and manage risk dynamically to deliver consistent, exceptional capital performance.

              </span>
             
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}