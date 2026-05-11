'use client';

import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

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
        aria-label="Background video introducing Hedgium and systematic investing"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
      </video>

      {/* Play / Pause button - top right */}
      <button
        type="button"
        onClick={togglePlay}
        className="absolute cursor-pointer top-4 right-4 md:top-6 md:right-6 z-20 p-2 lg:p-3 rounded-full hover:bg-white/30 hover:backdrop-blur-sm transition-colors"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" strokeWidth={2} />
        ) : (
          <Play className="w-5 h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" strokeWidth={2} />
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

      {/* <div className="relative z-40 mx-auto w-full max-w-4xl px-4 pb-6 pt-2">
        <details className="rounded-lg border border-white/30 bg-base-100/95 text-base-content shadow-lg backdrop-blur-sm">
          <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary">
            Hero video transcript
          </summary>
          <div className="border-t border-base-300 px-4 py-3 text-sm leading-relaxed">
            <p>
              This hero video presents Hedgium as a quant-based investment platform: ambition guided by
              intelligence and defined by performance. The narrative highlights two decades of market
              experience, identifying real-time opportunities and managing risk dynamically to pursue
              consistent, risk-aware capital outcomes.
            </p>
            <p className="mt-2">
              Synchronized captions are not yet available for this clip; when a caption file is provided,
              it will be linked here for full WCAG conformance.
            </p>
          </div>
        </details>
      </div> */}

    </section>
  );
}