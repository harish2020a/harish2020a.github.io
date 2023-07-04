import Head from "next/head";
import "./globals.css";

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
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chilanka&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <body>{children}</body>
    </html>
  );
}
