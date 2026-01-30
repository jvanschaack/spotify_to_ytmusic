import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spotify to YT Music",
  description: "Web UI for migrating Spotify playlists to YouTube Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <div className="logo">Spotify → YT Music</div>
            <nav className="nav">
              <a href="#overview">Overview</a>
              <a href="#actions">Actions</a>
              <a href="#status">Status</a>
              <a href="#settings">Settings</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container">
            <span>Open-source migration helper</span>
            <span className="dim">Powered by Next.js</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
