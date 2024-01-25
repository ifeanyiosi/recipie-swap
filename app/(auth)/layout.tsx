import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-screen">
      <div className="relative flex w-full lg:w-[50%] h-[200px] md:h-screen">
        <Image
          priority
          fill
          className=" flex object-cover -z-10"
          src="/authImage.jpg"
          alt="background image"
        />
      </div>
      <div className="lg:w-[50%]">{children}</div>
    </div>
  );
}
