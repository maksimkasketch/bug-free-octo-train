import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "@vityapump - Онлайн-тренер | Трансформация тела и жизни",
  description: "Персональный онлайн-тренинг от @vityapump. Более 5000 успешных трансформаций. Индивидуальные программы тренировок и питания. Европейское образование. Поддержка 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
