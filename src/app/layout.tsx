import Head from "next/head";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "/public/fonts/myFont.woff" });

export const metadata = {
  title: "Harish B",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chilanka&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className={myFont.className}>{children}</body>
    </html>
  );
}
