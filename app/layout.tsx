import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

import { UserProvider } from "./context/UserContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "Saveta",
    default: "Saveta | Repair Vehicle",
  },
  description: "Saveta will help you to repair your vehicle",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-customBg antialiased text-slate-50`}
      >
        <div>
          <Header />
          <UserProvider>
            <main className="max-w-7xl mx-auto">{children}</main>
          </UserProvider>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
