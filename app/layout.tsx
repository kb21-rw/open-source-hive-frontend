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
  description:
    "We are a network of Rwandan open source developers contributing to open technology projects globally.",
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
        <time dateTime="2016-10-25" suppressHydrationWarning />
        {data?.navbar && <Navbar {...data.navbar} />}
        <div className="container">{children}</div>
        {data?.footer && <Footer {...data.footer} />}
      </body>
    </html>
  );
}
