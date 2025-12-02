//hiển thị username + caption
import React from "react";

interface ReelCaptionProps {
  username: string;
  avatar: string;
  caption: string;
}

export default function ReelCaption({ username, avatar, caption }: ReelCaptionProps) {
  return (
    <div className="flex flex-col space-y-1 max-w-[250px]">
      <div className="flex items-center gap-2 font-bold">
        <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full" />
        <span>@{username}</span>
      </div>
      <p className="text-sm opacity-90 whitespace-pre-line">{caption}</p>
    </div>
  );
}
