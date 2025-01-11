import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
 title: "911 Coffee",
 description: "Good Coffee Start From Here",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={`antialiased`}>
    <Navbar />
    {children}
   </body>
  </html>
 );
}
