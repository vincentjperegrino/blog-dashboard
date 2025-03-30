import type { Metadata } from "next";
import ClientProviders from "@/providers/client-providers";

export const metadata: Metadata = {
  title: "Blog Dashboard",
  icons: {
    icon: "/book.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
};

export default RootLayout;
