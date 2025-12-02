// src/components/layout/Sidebar.tsx
"use client";

import { useRouter } from "next/navigation";
import { Home, User, MessageSquare } from "lucide-react";
import "../../app/globals.css"
export default function Sidebar() {
  
    const router = useRouter(); // tương đương với navigate

    const handleHomeClick = () => {
      router.push("/home"); // điều hướng về trang Home

      // Sau khi navigate, scroll container về đầu
      setTimeout(() => {
        const container = document.querySelector<HTMLDivElement>(".reels-container");
        if (container) container.scrollTop = 0;
      }, 100); // delay nhỏ để trang render xong
    };
  
  return (
    <aside>
      <div className="sidebar-icon"><button onClick={handleHomeClick}><Home size={24} /></button></div>
      <div className="sidebar-icon"><User size={24} /></div>
      <div className="sidebar-icon"><MessageSquare size={24} /></div>
    </aside>
  )
}
