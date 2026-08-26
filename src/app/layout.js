import "../index.css";
import "../App.css";

const SITE_URL = "https://dylansmith.vercel.app";
const SITE_TITLE = "Creative Portfolio | Dylan Smith";
const SITE_DESCRIPTION =
  "This is a professional portfolio of my creative work and programming projects.";

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Creative Portfolio - Dylan Smith",
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: ["/resources/logos/logo-full.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/resources/logos/logo-full.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
