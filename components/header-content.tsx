import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { Button } from "./ui/button";

export default function HeaderContent() {
  return (
    <div className="w-full min-h-screen wrapper">
      <Link className="uppercase text-primary font-bold text-[1rem]" href="/">
        ChowSwap
      </Link>

      <div className="flex flex-col pt-[50px] pb-[30px] items-start gap-4">
        {navLinks.map((item) => (
          <ul className="font-[500] text-[#000] " key={item.name}>
            <li className="uppercase">{item.name}</li>
          </ul>
        ))}
        <Button className="uppercase text-[#fff]">Add Recipe</Button>
      </div>
    </div>
  );
}
