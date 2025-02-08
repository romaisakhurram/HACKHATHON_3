"use client"
import {useState} from "react"
import Link from "next/link"
import { HiOutlineMagnifyingGlass} from "react-icons/hi2";

export default  function Header () {
    const [isDropdownOpen , setIsDropdownOpen] = useState(false)
    return (
        <div className="w-full h-20 items-center p-5">
            <div className="flex justify-center gap-10">
                <h1 className="text-black font-bold text-[30px]">Hekto</h1>
                <div>
                    <ul className="flex justify-center font-[Lato] text-md text-[#0D0E43] gap-8 mt-3">
                       <li className="text-pink-600"><Link href="/">Home</Link></li>
                       <li className="relative">
                            <button className="hover:text-pink-600 focus:outline-none"onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                              Pages
                            </button>
                            {isDropdownOpen && (
                            <div className="absolute bg-white shadow-md mt-2 w-40">
                                <ul>
                                    <li className="hover:bg-gray-100 hover:text-pink-600 px-4 py-2"><Link href="/ShopGrid">ShopGrid</Link></li>
                                    <li className="hover:bg-gray-100 hover:text-pink-600 px-4 py-2"><Link href="/ShoppingCart">ShoppingCart</Link></li>
                                    <li className="hover:bg-gray-100 hover:text-pink-600 px-4 py-2"><Link href="/ShopLeftSide">ShopLeftSide</Link></li>
                                    <li className="hover:bg-gray-100 hover:text-pink-600 px-4 py-2"><Link href="/About">About</Link></li>
                                    <li className="hover:bg-gray-100 hover:text-pink-600 px-4 py-2"><Link href="/FAQ">FAQ</Link></li>
                                </ul>
                            </div>
                            )}
                        </li>
                        <li className="hover:text-pink-600"><Link href="/Blog">Blog</Link></li>
                        <li className="hover:text-pink-600"><Link href="/Shop">Shop</Link></li>
                        <li className="hover:text-pink-600"><Link href="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                <button className="flex border border-gray-300 mt-3 hover:outline-none ml-5">
                  <input type="search" name="Search" /><HiOutlineMagnifyingGlass 
                  className="w-10 h-6 bg-pink-500 text-white" /></button>
                </div>
            </div>
           
            {/* Mobile Menu (Hamburger) */}
            <div className="flex md:hidden">
                <button className="text-black font-bold"onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isDropdownOpen && (
                <ul className="md:hidden bg-white shadow-md text-[#0D0E43] mt-2 w-full p-4">
                   <li className="py-2"><Link href="/">Home</Link></li>
                   <li className="py-2"><Link href="/Pages">Pages</Link></li>
                   <li className="py-2"><Link href="/Pages/About">About</Link></li>
                   <li className="py-2"><Link href="/Pages/FAQ">FAQ</Link></li>
                   <li className="py-2"><Link href="/Product">Product</Link></li>
                   <li className="py-2"><Link href="/Blog">Blog</Link></li>
                   <li className="py-2"><Link href="/Shop">Shop</Link></li>
                   <li className="py-2"><Link href="/Contact">Contact</Link></li>
                </ul>
            )}
        </div>
    )
}