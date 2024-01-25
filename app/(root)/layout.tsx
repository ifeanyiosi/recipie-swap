import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <Header />
      <div className="w-ful min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
