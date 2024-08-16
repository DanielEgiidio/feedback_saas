import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "./ui/button";
import HeaderMenu from "./header-menu";
import Link from "next/link";
import { MessageSquareMore } from "lucide-react";

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all backdrop-blur-md">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center">
            <MessageSquareMore className="h-6 w-6" />
            <h1 className="text-2xl">Feedback</h1>
          </Link>
          <div>
            <SignedOut>
              <SignInButton>
                <Button className="">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className=" ml-2">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <HeaderMenu />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
