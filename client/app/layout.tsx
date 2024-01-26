import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UserProfile from "./components/user profile/profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  title: "Descubriendo Juntxs",
  description: "ONG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
            <Navbar />
            <UserProfile />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
