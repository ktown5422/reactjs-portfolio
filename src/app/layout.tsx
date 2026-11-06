import "@/../../node_modules/react-toastify/dist/ReactToastify.min.css";
import NextThemeProvider from "@/components/shared/NextThemeProvider";
import { inter, spaceGrotesk } from "@/utils/fonts";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kevin Townson | Software Engineering to Data Center Operations",
    template: "%s | Kevin Townson",
  },
  description:
    "Kevin Townson is a Houston-based software engineer pursuing a Data Center Technician role and documenting hands-on Linux and networking labs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <NextThemeProvider>{children}</NextThemeProvider>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
