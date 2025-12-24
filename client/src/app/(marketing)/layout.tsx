import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { title, description, defaultUrl, twitterHandle } from "@/siteConfig";
import { NavBar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const websiteUrl = new URL(defaultUrl);

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: websiteUrl,
  title,
  description,
  manifest: `${websiteUrl}/manifest.json`,
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: twitterHandle,
    images: [`${websiteUrl}/og-jpg.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon=16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </head>
      <body className="bg-zinc-50 font-sans dark:bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="selection:bg-[hsl(320,65%, 52%, 20%]">
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
