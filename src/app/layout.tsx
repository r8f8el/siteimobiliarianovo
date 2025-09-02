import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seusite • Crie o site do corretor em minutos",
  description:
    "Plataforma SaaS para corretores criarem sites modernos com IA para descrições e posts.",
  metadataBase: new URL("https://seusite.com.br"),
  openGraph: {
    title: "Seusite • Sites para Corretores com IA",
    description:
      "Crie seu site de portfólio com templates modernos, CRM de leads e IA integrada.",
    url: "https://seusite.com.br",
    siteName: "Seusite",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seusite • Sites para Corretores com IA",
    description:
      "Crie seu site de portfólio com templates modernos, CRM de leads e IA integrada.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
