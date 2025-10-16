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
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="GOWJs3YAPdr5VT/kSBgjQg" async></script>
        </html>
    );
}