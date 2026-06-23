import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/Components/Layout/LayoutShell";
import { getDb } from "@/lib/mongodb";
import CustomScripts from "@/Components/Layout/CustomScripts";
import { Suspense } from "react";
import AnalyticsTracker from "@/Components/Layout/AnalyticsTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Crown Excel | IT Hardware and Solutions in Dubai",
    template: "%s | Crown Excel",
  },
  description:
    "Crown Excel provides IT hardware, infrastructure, networking, and managed technology solutions for businesses in Dubai and the UAE.",
};

export default async function RootLayout({ children }) {
  let settings = null;
  try {
    const db = await getDb();
    settings = await db.collection("settings").findOne({ _id: "website_settings" });
  } catch (err) {
    console.error("Failed to load settings in RootLayout:", err);
  }

  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RCYPD107FE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-RCYPD107FE');
            `,
          }}
        />
      </head>
      <body
        style={{ backgroundColor: "white" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        {settings?.googleTagManagerId && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=${settings.googleTagManagerId}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `
            }}
          />
        )}

        {/* Facebook Pixel (noscript) */}
        {settings?.facebookPixelId && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${settings.facebookPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}

        {/* Dynamic tracking pixel script loader and transition tracker */}
        <Suspense fallback={null}>
          <AnalyticsTracker settings={settings} />
        </Suspense>

        {/* Client side custom head & body scripts injector */}
        <CustomScripts settings={settings} />

        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
