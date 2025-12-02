//nút like / comment / share
import React from "react";

interface ReelActionsProps {
  likes: number;
  comments: number;
}

export default function ReelActions({ likes, comments }: ReelActionsProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <button className="flex flex-col items-center">
        ❤️
        <span className="text-xs">{likes}</span>
      </button>
      <button className="flex flex-col items-center">
        💬
        <span className="text-xs">{comments}</span>
      </button>
      <button className="flex flex-col items-center">🔗</button>
    </div>
  );
}
