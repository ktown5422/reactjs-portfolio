import "@/../../node_modules/react-toastify/dist/ReactToastify.min.css";
import Bootstrap from "@/components/shared/Bootstrap";
import NextThemeProvider from "@/components/shared/NextThemeProvider";
import Theme from "@/components/shared/Theme";
import { kanit } from "@/utils/fonts";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Bootstrap>
        <body
          className={`${kanit.variable} position-relative overflow-x-hidden`}
        >
          <NextThemeProvider>
            {children}
            <Theme />
          </NextThemeProvider>
          <ToastContainer />
        </body>
      </Bootstrap>
    </html>
  );
}
