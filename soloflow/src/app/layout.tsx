import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SoloFlow — One link. Every client. Zero chaos.",
  description:
    "SoloFlow replaces the six tools you stitch together every project. Client portals, project tracking, invoicing, payments — one workspace, one link, zero chaos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexMono.variable} antialiased`}
      style={{ background: "var(--sf-bg)" }}
    >
      <body style={{ background: "var(--sf-bg)", color: "var(--sf-ink)", overflowX: "hidden" }}>
        {children}
      </body>
    </html>
  );
}
