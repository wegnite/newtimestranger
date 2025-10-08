import localFont from 'next/font/local'
import {Josefin_Sans} from "next/font/google";

export const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    variable: "--font-josefin-sans",
});

export const notoSansSC = localFont({
  src: [
    {
      path: '../public/fonts/noto-sans-sc-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/noto-sans-sc-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/noto-sans-sc-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-noto-sans-sc',
  display: 'swap',
})