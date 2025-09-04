import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Suspense } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var theme = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'dark';
                  if (theme === 'dark' || theme === 'system') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) { 
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            {/* Cabeçalho simples com botões */}
            <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-end gap-2">
                <Suspense fallback={<div className="w-10 h-10" />}> 
                  <ThemeToggle />
                </Suspense>
                <a href="/login" className="px-3 py-2 rounded-md text-sm border border-border hover:bg-accent text-foreground">Entrar</a>
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
