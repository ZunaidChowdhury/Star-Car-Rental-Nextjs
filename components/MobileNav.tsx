import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from './ui/separator'
import NavItems from './NavItems'


const MobileNav = () => {
  return (
    <div className='lg:hidden'>
      <Sheet>
        <SheetTrigger className='ml-4 align-middle'>
          <Image
            src="/jvm/icons/menu.svg"
            alt='menu'
            width={24}
            height={24}
            className='cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-grey-500 lg:hidden'>
          <Image
            src='/mine/StarCarRental-logo.png'
            alt='logo'
            width={128}
            height={38}
          />
          <Separator />
          <NavItems isMobileScreen={true}/>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav