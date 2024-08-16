"use client"

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import NavItems from "./NavItems";
import { DotIcon } from "lucide-react";
import Profile from "@/app/(root)/profile/page";

const NavBar = () => (
  <header className='w-full z-50 bg-black border-b-2 border-theme-primary'>
    <nav className='max-w-[1440px] w-[80%] mx-auto flex justify-between items-center  py-4'>
      {/* logo */}
      <div className="w-[150px]">
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/mine/StarCarRental-logo.png'
          alt='logo'
          width={150}
          height={30}
          className='object-contain'
        />
      </Link>
      </div>

      {/* Navbar Links */}
      <NavItems isMobileScreen={false} />

      <div className="w-[150px] flex justify-end items-center">
        {/* <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-white rounded-full bg-theme-primary min-w-[130px]'
      /> */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <MobileNav />
        </SignedIn>

        <SignedOut>
          <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </SignedOut>
      </div>
    </nav>
  </header>
);

export default NavBar;