"use client"
import Link from 'next/link'
import React, { useState } from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import { carCategories, manufacturers } from "@/constants";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from './ui/separator';

interface INavItemsProps {
    isMobileScreen: boolean;
}

const NavItems = ({ isMobileScreen }: INavItemsProps) => {

    const [isCarListEnabled, setIsCarListEnabled] = useState<boolean>(false);
    const [isCategoryEnabled, setIsCategoryEnabled] = useState<boolean>(false);

    const handleCarListClick = () => {
        // Toggle the isEnabled state when the button is clicked
        setIsCarListEnabled(!isCarListEnabled);
    };

    const handleCategoryClick = () => {
        // Toggle the isEnabled state when the button is clicked
        setIsCategoryEnabled(!isCategoryEnabled);
    };

    return (
        <div>
            {
                isMobileScreen ? (
                    // Mobile
                    <ul className="flex flex-col lg:hidden w-full" >
                        <li className='nav-menu-item-mobile w-full'>
                            <Link href="/" className="text-gray-300">Home</Link>
                        </li >

                        <li className='nav-menu-item-mobile'>
                            <button onClick={handleCarListClick}>
                                <div className="group flex">
                                    <Link href='/'>Car List</Link>
                                    <svg className=" stroke-white fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360 280-560h400L480-360Z" /></svg>
                                    {/* <svg className="group-hover:fill-theme-primary stroke-white fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360 280-560h400L480-360Z" /></svg> */}
                                </div>
                            </button>
                        </li >

                        {isCarListEnabled &&
                            // <li>
                            //     {/* Car List Dropdown Menu */}
                            //     <ul className="flex flex-col lg:hidden ml-6">
                            //         <li className='nav-menu-item-mobile'>
                            //             <Link href='/'>One</Link>
                            //         </li>
                            //         <li className='nav-menu-item-mobile'>
                            //             <Link href='/'>Two</Link>
                            //         </li>
                            //         <li className='nav-menu-item-mobile'>
                            //             <Link href='/'>Three</Link>
                            //         </li>
                            //     </ul>
                            // </li>
                            <li>
                                {/* Car List Dropdown Menu */}
                                <ul className="flex flex-col lg:hidden ml-6 max-h-[200px] overflow-auto bg-[#0d0d0d] border-2 mt-1 mb-2">
                                    {manufacturers.map((manufacturer, index) => (<Link href={`/brand/${manufacturer.modelUrl}`} key={manufacturer.modelUrl} >
                                        <li className='nav-menu-item-mobile'>{manufacturer.name}</li>
                                        {index != manufacturers.length - 1 ? <Separator className='w-full'/> : null}
                                    </Link>))}
                                </ul>
                            </li>






                            // <li>
                            //     <Select>
                            //         <SelectTrigger className="text-gray-300 hover:text-theme-primary border-0 rounded-none border-transparent border-b-4  hover:border-theme-primary transition duration-300 px-4 py-2 bg-black focus:ring-0 focus:ring-offset-0">
                            //             <SelectValue placeholder="Car List" />
                            //         </SelectTrigger>
                            //         <SelectContent className='p-0'>
                            //             {manufacturers.map(manufacturer => (<SelectItem value="est" className='ml-0 mr-6 pl-4 focus:bg-theme-primary focus:text-white'>{manufacturer}</SelectItem>))}
                            //         </SelectContent>
                            //     </Select>
                            // </li>




                        }



                        <li className='nav-menu-item-mobile'>
                            <button onClick={handleCategoryClick}>
                                <div className="group flex">
                                    <Link href='/'>Category</Link>
                                    <svg className=" stroke-white fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360 280-560h400L480-360Z" /></svg>
                                    {/* <svg className="group-hover:fill-theme-primary stroke-white fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360 280-560h400L480-360Z" /></svg> */}
                                </div>
                            </button>
                        </li >

                        {isCategoryEnabled &&
                            // <li>
                            //     {/* Category Dropdown Menu */}
                            //     <ul className="flex flex-col lg:hidden ml-6">
                            //         <li className='nav-menu-item-mobile'>
                            //             <Link href='/'>One</Link>
                            //         </li>
                            //         <li className='nav-menu-item-mobile'>
                            //             <Link href='/'>Two</Link>
                            //         </li>
                            //         <li className='nav-menu-item-mobile'>
                            //             <Link href='/'>Three</Link>
                            //         </li>
                            //     </ul>
                            // </li>


                            <li>
                                {/* Category Dropdown Menu */}
                                <ul className="flex flex-col lg:hidden ml-6 max-h-[200px] overflow-auto bg-[#0d0d0d] border-2 mt-1 mb-2">
                                    {carCategories.map((carCategory, index) => (<Link href={`/category/${carCategory.categoryNameUrl}`} key={carCategory.categoryNameUrl} >
                                        <li className='nav-menu-item-mobile'>{carCategory.name}</li>
                                        {index != carCategories.length - 1 ? <Separator className='w-full'/> : null}
                                    </Link>))}
                                </ul>
                            </li>



                        }

                        <li className='nav-menu-item-mobile'>
                            <Link href="/contact" className="text-gray-300">Contact Us</Link>
                        </li>
                        <li className='nav-menu-item-mobile'>
                            <Link href="/blogs" className="text-gray-300">Blogs</Link>
                        </li>
                    </ul >
                ) : (
                    // desktop
                    <ul className="hidden lg:flex flex-wrap justify-center items-center lg:space-x-4 w-full max-w-[805px]">
                        <li>
                            <Link href="/" className="nav-menu-item">Home</Link>
                        </li >

                        {/* Car List */}
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="dropdown-trigger group">

                                    <div className='flex'>
                                        <p>
                                            Car List
                                        </p>
                                        {/* hover:text-theme-primary border-b-4 border-transparent hover:border-theme-primary transition duration-300  */}
                                        <svg className="fill-[#D1D5DB] group-hover:fill-[#705CF6] transition duration-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360 280-560h400L480-360Z" /></svg>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='max-h-[500px] overflow-y-auto'>
                                    {manufacturers.map((manufacturer, index) => (<Link href={`/brand/${manufacturer.modelUrl}`} key={manufacturer.modelUrl} >
                                        <DropdownMenuItem className='pl-4 focus:bg-theme-primary focus:text-white cursor-pointer'>{manufacturer.name}</DropdownMenuItem>
                                        {index != manufacturers.length - 1 ? <Separator className='w-full'/> : null}
                                        
                                    </Link>))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>




                        {/* Car Category */}
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="group text-gray-300 hover:text-theme-primary border-0 rounded-none border-transparent border-b-4  hover:border-theme-primary transition duration-300 px-4 py-2 bg-black  outline-none focus:theme-primary data-[state=open]:theme-primary">

                                    <div className='flex'>
                                        <p>
                                            Category
                                        </p>
                                        <svg className="fill-[#D1D5DB] group-hover:fill-[#705CF6] transition duration-300" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360 280-560h400L480-360Z" /></svg>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='max-h-[500px] overflow-auto'>
                                    {carCategories.map((carCategory, index) => (<Link href={`/category/${carCategory.categoryNameUrl}`} key={carCategory.categoryNameUrl} >
                                        <DropdownMenuItem className='pl-4 focus:bg-theme-primary focus:text-white cursor-pointer'>{carCategory.name}</DropdownMenuItem>
                                        {index != carCategories.length - 1 ? <Separator className='w-full'/> : null}
                                    </Link>))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>

                        <li>
                            <Link href="/profile" className="nav-menu-item">My Profile</Link>
                        </li>

                        <li>
                            <Link href="/contact" className="nav-menu-item">Contact Us</Link>
                        </li>

                        <li>
                            <Link href="/blogs" className="nav-menu-item">Blogs</Link>
                        </li>
                    </ul >
                )}
        </div>

    )
}

export default NavItems