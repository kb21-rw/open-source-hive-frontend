import type { Metadata } from "next";
import { Arima } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import getGlobals from "./api/globals";
import Navbar from "@/components/Navbar";

const arimaSans = Arima({
  variable: "--font-arima-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Source Hive",
  description: "Generated by TheGym Rwanda",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await getGlobals();

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={data?.favicon?.url}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={data?.favicon?.url}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={data?.favicon?.url}
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${arimaSans.variable} antialiased`}>
        {data?.navbar && <Navbar {...data.navbar} />}
        <div className="container">{children}</div>
        {data?.footer && <Footer {...data.footer} />}
      </body>
    </html>
  );
}
