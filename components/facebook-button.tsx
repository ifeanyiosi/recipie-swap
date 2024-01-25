import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { Button } from "./ui/button";

export default function FacebookButton() {
  return (
    <Button className="w-full flex gap-2" variant="outline">
      <FaFacebookF className="text-[#316FF6]" />
      <p>Log in with Facebook</p>
    </Button>
  );
}
