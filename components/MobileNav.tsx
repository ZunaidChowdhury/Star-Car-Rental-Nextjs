import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from './ui/separator'
import NavItems from './NavItems'


const MobileNav = () => {
  return (
    <div className='lg:hidden'>
      <Sheet >
        <SheetTrigger className='ml-4 align-middle '>
          <Image
            src="/jvm/icons/menu-gray.svg"
            alt='menu'
            width={24}
            height={24}
            className='cursor-pointer'
          />
          {/* <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 7.5C4.5 7.10218 4.65804 6.72064 4.93934 6.43934C5.22064 6.15804 5.60218 6 6 6H24C24.3978 6 24.7794 6.15804 25.0607 6.43934C25.342 6.72064 25.5 7.10218 25.5 7.5C25.5 7.89782 25.342 8.27936 25.0607 8.56066C24.7794 8.84196 24.3978 9 24 9H6C5.60218 9 5.22064 8.84196 4.93934 8.56066C4.65804 8.27936 4.5 7.89782 4.5 7.5ZM4.5 15C4.5 14.6022 4.65804 14.2206 4.93934 13.9393C5.22064 13.658 5.60218 13.5 6 13.5H24C24.3978 13.5 24.7794 13.658 25.0607 13.9393C25.342 14.2206 25.5 14.6022 25.5 15C25.5 15.3978 25.342 15.7794 25.0607 16.0607C24.7794 16.342 24.3978 16.5 24 16.5H6C5.60218 16.5 5.22064 16.342 4.93934 16.0607C4.65804 15.7794 4.5 15.3978 4.5 15ZM13.5 22.5C13.5 22.1022 13.658 21.7206 13.9393 21.4393C14.2206 21.158 14.6022 21 15 21H24C24.3978 21 24.7794 21.158 25.0607 21.4393C25.342 21.7206 25.5 22.1022 25.5 22.5C25.5 22.8978 25.342 23.2794 25.0607 23.5607C24.7794 23.842 24.3978 24 24 24H15C14.6022 24 14.2206 23.842 13.9393 23.5607C13.658 23.2794 13.5 22.8978 13.5 22.5Z" fill="white" />
          </svg> */}
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-black lg:hidden w-full'>
          <Image
            src='/mine/StarCarRental-logo.png'
            alt='logo'
            width={128}
            height={38}
          />
          <Separator className='w-full'/>
          {/* <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" /> */}
          <NavItems isMobileScreen={true} />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav