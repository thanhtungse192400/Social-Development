// src/app/layout.tsx
import "./globals.css"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Header />
          <main className="reels-container">{children}</main>
        </div>
      </body>
    </html>
  )
}
// toi là mrbeast