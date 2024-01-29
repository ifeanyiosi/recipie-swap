"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import MobileSideBar from "../mobile-sidebar";
import { Button } from "../ui/button";
import { IoMdClose } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import SearchBox from "./search-box";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const handleSearch = (query: string) => {
    console.log(`Searching for: ${query}`);
    // Implement your search logic here.
  };

  return (
    <nav className="w-full sticky bg-[#fff] top-0 border-b">
      <div className="wrapper relative flex items-center justify-between">
        <div className="flex items-center gap-16">
          {" "}
          <Link
            className="uppercase text-primary font-bold text-[1rem]"
            href="/"
          >
            ChowSwap
          </Link>
          <div className=" hidden lg:flex items-center gap-4">
            {navLinks.map((items) => (
              <ul className="uppercase text-[0.875rem]" key={items.name}>
                <li className="hover:border-b cursor-pointer border-primary-foreground">
                  {items.name}
                </li>
              </ul>
            ))}
            <Button className="uppercase text-[#fff]">Add Recipe</Button>
          </div>
        </div>
        <div className="flex text-[20px] items-center gap-4">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="flex gap-2 items-center"
          >
            {" "}
            {showSearch ? (
              <IoMdClose />
            ) : (
              <span className="flex items-center gap-2">
                <CiSearch className="text-[25px]" />
              </span>
            )}
          </button>
          <FaHeart className="hidden lg:flex" />

          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton />
          </SignedOut>

          <MobileSideBar />
        </div>

        {showSearch && (
          <div className="bg-[#fff] shadow-lg p-4 z-10 top-[50px] w-[350px] lg:w-full absolute lg:top-[70px] ">
            <SearchBox onSearch={handleSearch} />
          </div>
        )}
      </div>
    </nav>
  );
}
