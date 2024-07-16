"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isStudioRoute = pathname.startsWith('/studio');

  return (
    <>
      {!isStudioRoute && <NavBar />}
      {children}
      {!isStudioRoute && <Footer />}
    </>
  );
}
