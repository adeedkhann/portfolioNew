import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ClientWrapper from "@/components/clientWrapper/ClientWrapper";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Adeed Khan | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer Portfolio — React, Next.js, Node.js, MongoDB",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrollProvider>
          <ClientWrapper>
            <Navbar />
            {children}
          </ClientWrapper>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
