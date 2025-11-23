"use client";

import { useRef, useEffect } from "react";

export default function ReelItem({
  videoUrl,
  autoPlay = false,
}: {
  videoUrl: string;
  autoPlay?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Nếu autoPlay được bật → play ngay
    if (autoPlay) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Khi scroll tới video mới, play từ đầu
            video.currentTime = 0;
            video.play().catch(() => {});
          } else {
            // Khi video ra khỏi view, pause + reset
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.75 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [autoPlay]);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) video.play();
    else video.pause();
  };

  return (
    <div className="reel-item" ref={containerRef} onClick={handleClick}>
      <video
        ref={videoRef}
        src={videoUrl}
        loop
        playsInline
        
      />
      <div className="reel-actions">
        <button>❤️</button>
        <button>💬</button>
        <button>🔗</button>
      </div>
    </div>
  );
}
