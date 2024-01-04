import Link from "next/link";
import Image from "next/image";

import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href={"/"} className="flex items-center space-x-2">
        <div>
          <Image
            src={"dropbox.svg"}
            alt={"Dropbox Logo"}
            height={50}
            width={50}
            className=""
          />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
