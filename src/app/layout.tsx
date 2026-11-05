import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import { experience, profile, SITE_URL } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const title = `${profile.name} · ${profile.role}`;
const description =
  "Senior Frontend Engineer with 4+ years building fast React.js, Next.js and React Native products for 10K+ monthly users. Core Web Vitals, frontend architecture, TypeScript and AI tooling.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.github }],
  keywords: [
    "Shivam Shukla",
    "Senior Frontend Engineer",
    "React developer",
    "Next.js developer",
    "React Native developer",
    "TypeScript",
    "Core Web Vitals",
    "Frontend architecture",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title,
    description,
    siteName: profile.name,
    firstName: "Shivam",
    lastName: "Shukla",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${profile.name}, ${profile.role}` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  icons: {
    // favicon.ico is added by the file convention; this adds the crisper SVG for modern browsers.
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0c" },
  ],
};

/** Applies a saved theme before first paint so there is no flash. */
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: profile.name,
      jobTitle: profile.role,
      description,
      url: SITE_URL,
      image: `${SITE_URL}/images/shivam-720.jpg`,
      email: `mailto:${profile.email}`,
      worksFor: { "@type": "Organization", name: experience[0].company, url: experience[0].url },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Poornima College of Engineering" },
      sameAs: [profile.github, profile.linkedin],
      knowsLanguage: ["en", "hi"],
      knowsAbout: ["React", "Next.js", "React Native", "TypeScript", "Web performance", "Core Web Vitals"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: profile.name,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${display.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
