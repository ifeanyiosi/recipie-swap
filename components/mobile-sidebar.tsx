import React from "react";

import { AiOutlineMenu } from "react-icons/ai";
import HeaderContent from "./header-content";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden  hover:opacity-75 transition">
        <AiOutlineMenu className="text-[20px] text-[#000] " />
      </SheetTrigger>

      <SheetContent side="left" className="p-0 z-[60000] w-full bg-white">
        <HeaderContent />
      </SheetContent>
    </Sheet>
  );
}
