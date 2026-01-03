import "@/app/globals.css";
import {GoogleAnalytics} from "@/components/analytics/google-analytics";
import {Providers} from "@/components/providers";
import {Toaster} from "@/components/ui/toaster";
import {josefinSans, notoSansSC} from "./fonts";

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
        <head>
            <link rel="icon" href="/digimon/favicon.ico" sizes="any" />
            <link
                rel="icon"
                href="/digimon/favicon-16x16.png"
                type="image/png"
                sizes="16x16"
            />
            <link
                rel="icon"
                href="/digimon/favicon-32x32.png"
                type="image/png"
                sizes="32x32"
            />
            <link
                rel="apple-touch-icon"
                href="/digimon/apple-touch-icon.png"
                sizes="180x180"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6224617757558738"
                crossOrigin="anonymous"
            ></script>
        </head>
        <body
            className={`${josefinSans.variable} ${notoSansSC.variable} ltr font-josefin`}
        >
        <Providers
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </Providers>
        <Toaster/>
        </body>
        <GoogleAnalytics/>
        <script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="GOWJs3YAPdr5VT/kSBgjQg"
            async
        ></script>
        </html>
    );
}
