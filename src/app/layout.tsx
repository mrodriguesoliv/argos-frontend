import "@/css/satoshi.css";
import "@/css/style.css";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "./providers";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: {
    template: "Argos",
    default: "Argos",
  },
  description:
    "",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NextTopLoader showSpinner={false} />
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
