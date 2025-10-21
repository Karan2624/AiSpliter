'use client';
import Image from "next/image";
import { useStoreUser } from "@/hooks/use-store-user";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import React from "react";
import { BarLoader } from "react-spinners";
import { usePathname } from "next/navigation";
import { Authenticated, Unauthenticated } from "convex/react";
import { Button } from "./ui/button";
import { LayoutDashboard, User } from "lucide-react";

const Header =  () => {
  const {isLoading} = useStoreUser();
  const path = usePathname();
    return <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60" >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        
            <Link href='/' className="flex item items-center gap-2">
            <Image 
            src={"/logos/logo2.png"}
            alt = "splitr logo"
            width = {200}
            height = {60}
            className= "h-11 w-auto object-contain"
            />
            </Link>
            {
              path === "/" && (
                <div className="hidden md:flex items-center gap-6">
                  <Link href="#features" className="text-sm font-medium hover:text-green-600 transition">
                  Features</Link>
                   <Link href="#how-it-works" className="text-sm font-medium hover:text-green-600 transition">
                  How it works</Link>
                </div>
              )
            }
            <div className="flex items-center gap-4">
              <Authenticated>
                <Link href="/dashboard">
                  <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 hover:text-green-600 hover:border-green-600 transition">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
                </Link>
                <UserButton />
              </Authenticated>
              <Unauthenticated>
                <SignInButton>
                  <Button variant={"ghost"}>Sign In</Button>
                </SignInButton>
                <SignInButton>
                  <Button className="bg-green-600 hover:bg-green-700 border-none">Get Started</Button>
                </SignInButton>
              </Unauthenticated>
            </div>
      </nav>
      {isLoading && <BarLoader width={"100%"} color="#36d7b7" />}
    </header>
};
export default Header;