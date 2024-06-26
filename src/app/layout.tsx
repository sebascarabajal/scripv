import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import NavBar from "@/components/NavBar";
import GlobalContext from "@/context/GlobalContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CENSO 2024 | IPV",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="es">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
          <GlobalContext>
            <Theme appearance="dark">
              <NavBar></NavBar>
              <main>{children}</main>
            </Theme>
          </GlobalContext>
      </body>
    </html>
  );
}
