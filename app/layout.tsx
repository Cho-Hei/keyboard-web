import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppProvider } from "@/components/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeekKeys",
  description: "Shop keyboards with GeekKeys",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <AppProvider>
          <Navbar />
          <main className={inter.className}>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
