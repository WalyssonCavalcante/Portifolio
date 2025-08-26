import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "./components/ui/toaster";

export const metadata: Metadata = {
  title: "Wallysson Cavalcante",
  description: "Meu portifolio como desenvolvedor Front-End.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
