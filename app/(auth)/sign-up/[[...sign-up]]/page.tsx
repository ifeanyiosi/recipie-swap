import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-start lg:mt-[50px] lg:ml-[50px] justify-center">
      <Link
        className="uppercase lg:pl-16 mb-5 px-8 py-4 text-primary font-bold text-[1rem]"
        href="/"
      >
        ChowSwap
      </Link>
      <SignUp />
    </div>
  );
}
