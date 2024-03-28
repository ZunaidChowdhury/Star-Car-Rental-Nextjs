"use client"
import Link from 'next/link'
import React, { useState } from 'react'

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
                    <ul className="flex flex-col lg:hidden " >
                        <li className='nav-menu-item-mobile'>
                            <Link href="/" className="text-white">Home</Link>
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
                            <li>
                                {/* Car List Dropdown Menu */}
                                <ul className="flex flex-col lg:hidden ml-6">
                                    <li className='nav-menu-item-mobile'>
                                        <Link href='/'>One</Link>
                                    </li>
                                    <li className='nav-menu-item-mobile'>
                                        <Link href='/'>Two</Link>
                                    </li>
                                    <li className='nav-menu-item-mobile'>
                                        <Link href='/'>Three</Link>
                                    </li>
                                </ul>
                            </li>
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
                            <li>
                                {/* Car List Dropdown Menu */}
                                <ul className="flex flex-col lg:hidden ml-6">
                                    <li className='nav-menu-item-mobile'>
                                        <Link href='/'>One</Link>
                                    </li>
                                    <li className='nav-menu-item-mobile'>
                                        <Link href='/'>Two</Link>
                                    </li>
                                    <li className='nav-menu-item-mobile'>
                                        <Link href='/'>Three</Link>
                                    </li>
                                </ul>
                            </li>
                        }

                        <li className='nav-menu-item-mobile'>
                            <Link href="/contact" className="text-white">Contact Us</Link>
                        </li>
                        <li className='nav-menu-item-mobile'>
                            <Link href="/blogs" className="text-white">Blogs</Link>
                        </li>
                    </ul >
                ) : (
                    // desktop
                    <ul className="hidden lg:flex justify-center items-center lg:space-x-4 w-full max-w-[805px]">
                        <li>
                            <Link href="/" className="nav-menu-item">Home</Link>
                        </li >

                        <li className="group relative">
                            {/* Dropdown Trigger */}
                            <div className="group flex nav-menu-item">
                                <Link href='/'>Car List</Link>
                                <svg className="group-hover:fill-theme-primary stroke-white fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360 280-560h400L480-360Z" /></svg>
                            </div>
                            {/* Dropdown Menu */}
                            <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                                <li>
                                    <Link href='/' className="bg-gray-800 hover:bg-gray-700 px-3 py-2 block">Option 1</Link>
                                </li>
                                <li>
                                    <Link href='/' className="bg-gray-800 hover:bg-gray-700 px-3 py-2 block">Option 2</Link>
                                </li>
                                <li>
                                    <Link href='/' className="bg-gray-800 hover:bg-gray-700 px-3 py-2 block">Option 3</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="relative">
                            {/* Dropdown Trigger */}
                            <Link href='/' className="nav-menu-item">Category</Link>
                            {/* Dropdown Menu */}
                            <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                                <li>
                                    <Link href='/' className="bg-gray-800 hover:bg-gray-700 px-3 py-2 block">Option 1</Link>
                                </li>
                                <li>
                                    <Link href='/' className="bg-gray-800 hover:bg-gray-700 px-3 py-2 block">Option 2</Link>
                                </li>
                                <li>
                                    <Link href='/' className="bg-gray-800 hover:bg-gray-700 px-3 py-2 block">Option 3</Link>
                                </li>
                            </ul>
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