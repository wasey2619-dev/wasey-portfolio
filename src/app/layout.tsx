import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wasey Iqbal — Graphics Designer",
  description:
    "Portfolio of Syed Abdul Wasey Iqbal, a graphics designer from Karachi crafting logos, flyers, posters and social media creatives that make brands unforgettable.",
  keywords: [
    "Wasey Iqbal",
    "Graphics Designer",
    "Logo Designer",
    "Flyer Design",
    "Social Media Creatives",
    "Karachi Designer",
    "Adobe Photoshop",
    "Illustrator",
    "Portfolio",
  ],
  authors: [{ name: "Syed Abdul Wasey Iqbal" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Wasey Iqbal — Graphics Designer",
    description:
      "Crafting bold, eye-catching visuals — logos, flyers and social media creatives from Karachi, Pakistan.",
    url: "https://chat.z.ai",
    siteName: "Wasey Iqbal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wasey Iqbal — Graphics Designer",
    description:
      "Crafting bold, eye-catching visuals — logos, flyers and social media creatives from Karachi, Pakistan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
