import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // Import the client-side wrapper

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nooks",
  description: "Nooks Furniture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout> {/* Wrap children with ClientLayout */}
      </body>
    </html>
  );
}
