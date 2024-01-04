import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import toast, { Toaster } from "react-hot-toast";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dropbox",
  description:
    "Personal project for portfolio - Dropbox clone - React, Clerk, Shadcn, Firebase, Drag/Drop, CRUD, TS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
