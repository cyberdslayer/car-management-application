import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



export const metadata: Metadata = {
  title: "Car Mangement Next app",
  description: "Car Management Application where users can create, view, edit, and delete cars. \n Each car can contain up to 10 images (specifically of a car), a title, a description and tags - car_type, company, dealer…etc .",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
