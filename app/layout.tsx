import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Header";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { Inter, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "HalalElites – Halal Web Development for Muslim Businesses",
  description: "Custom-coded, mobile-first, SEO-friendly websites built for Muslim-owned businesses. Fast, ethical, and value-aligned.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <Navbar />
             {children}
             <Footer />
  
          </ThemeProvider>
      </body>
    </html>
  );
}
