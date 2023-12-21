import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const myFont = localFont({
	src: "./clash-display.ttf",
	display: "swap",
});

export const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});
