import DesktopNav from "@/components/Navbar/DesktopNav";
import "./globals.css";
import type { Metadata } from "next";
import { Sansita_Swashed, Roboto } from "next/font/google";
import { ThemeProvider } from "@/utility/ThemeProvider";
import HeroSection from "@/components/HeroSection/HeroSection";

const Robot = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Robot.className}>
        <ThemeProvider>
          <DesktopNav />
          <HeroSection />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
