import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Harish",
  description:
    "Hello, I'm Harish, a Full-stack Developer and Machine Learning Enthusiast with expertise in designing and developing exceptional websites using the latest technologies for optimal performance and aesthetics.",
  authors: [
    {
      name: "Harish B",
      url: "https://www.linkedin.com/in/harishb2020/",
    },
  ],
  keywords:
    "Next.js 13, UI/UX portfolio, Harish B, portfolio website, web development, front-end development, back-end development, full-stack developer, responsive design, modern UI/UX, showcase projects, web developer, software engineer, JavaScript, React, server-side rendering, dynamic routing, API integration, code optimization, SEO-friendly website, high-performance websites, creative portfolio, professional portfolio, personal brand, online presence, showcase skills, digital portfolio",
  applicationName: "Harish B Portfolio",
  category: "Portfolio",
  creator: "Harish B",
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
