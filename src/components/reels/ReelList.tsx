"use client";
import { useState, useEffect, useRef } from "react";
import ReelItem from "./ReelItem";


const reels = [
  { id: 1, url: "/VideoTest.mp4" },
  { id: 2, url: "/VideoTest2.mp4" },
  { id: 3, url: "/VideoTest3.mp4" },
];
interface ReelListProps {
  shuffleKey?: number; // Khi thay đổi, sẽ shuffle
}


export default function ReelList() {
  const [shuffledReels, setShuffledReels] = useState(reels);
  const [containerKey, setContainerKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Shuffle video toàn bộ mảng khi load
    const shuffled = [...reels].sort(() => Math.random() - 0.5);
    setShuffledReels(shuffled);
    

    // Force re-render container
    setContainerKey((prev) => prev + 1);
  }, []);

  return (
    <div
      key={containerKey} // force re-render
      ref={containerRef}
    >
      {shuffledReels.map((reel) => (
        <ReelItem key={reel.id} videoUrl={reel.url} />
      ))}
    </div>
  );
}
