import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R House - The World's First Premium Recovery Lounge",
  description: "Experience elite recovery and wellness at R House, featuring proven therapies in an upscale environment. Located in Toronto.",
  keywords: ["recovery", "wellness", "therapy", "Toronto", "premium", "fitness"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 bg-pattern opacity-5 pointer-events-none" />
        <main className="min-h-screen bg-black/95 relative">
          {children}
        </main>
      </body>
    </html>
  );
}
