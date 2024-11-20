import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sindhi Zaika Restaurant",
  description: "Welcome to our Sindhi Zaika restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
      <Navbar />
        {children}
      
      <Footer /> 
      </body>

    </html>
  );
}
