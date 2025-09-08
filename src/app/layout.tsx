import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "성우연 | 풀스택 개발자 포트폴리오",
  description: "React, Next.js, TypeScript를 주로 사용하는 풀스택 개발자 성우연의 포트폴리오입니다. 사용자 중심의 웹 애플리케이션 개발에 열정을 가지고 있습니다.",
  keywords: ["성우연", "풀스택 개발자", "React", "Next.js", "TypeScript", "포트폴리오", "웹 개발"],
  authors: [{ name: "성우연" }],
  openGraph: {
    title: "성우연 | 풀스택 개발자 포트폴리오",
    description: "사용자 중심의 웹 애플리케이션을 만드는 풀스택 개발자",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
