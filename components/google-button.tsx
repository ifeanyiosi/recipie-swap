import React from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton() {
  return (
    <Button className="w-full flex gap-2" variant="outline">
      <FcGoogle />
      <p>Log in with Google</p>
    </Button>
  );
}
