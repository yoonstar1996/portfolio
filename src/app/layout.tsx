import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Yoonstar's portfolio",
  description: "윤경민의 포트폴리오입니다.",
};

const roboto = Roboto({
  subsets: ["latin"], // 사용할 문자셋 (한국어는 "latin-ext" 추가 가능)
  weight: ["100", "300", "400", "500", "700", "900"], //
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body id="root">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
