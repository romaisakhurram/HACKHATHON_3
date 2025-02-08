import Link from "next/link"
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

export default function Footer() {
    return (
      <footer className="bg-gray-100 text-gray-700 mt-10">
        <div className="container mx-auto px-5 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Branding Section */}
          <div>
            <h2 className="font-bold text-xl text-black mb-4">Hekto</h2>
            <div className="mb-4 flex">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="p-2 w-[65%] border border-gray-300 "
              />
              <button className="mr-3 bg-pink-500 text-white px-4 py-2 ">
                Sign Up
              </button>
            </div>
            <p className="text-sm">Contact Info</p>
            <p className="text-sm">17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
  
          {/* Categories Section */}
          <div>
            <h3 className="font-bold text-lg text-black mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
  
          {/* Customer Care Section */}
          <div>
            <h3 className="font-bold text-lg text-black mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
  
          {/* Pages Section */}
          <div>
            <h3 className="font-bold text-lg text-black mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="bg-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">©Webecy - All Rights Reserved.</p>
            <div className="flex space-x-4 ">
              <Link href="#" className=" hover:text-gray-800">
              <CiFacebook className="bg-[#1A0B5B] text-white" />
              </Link>
              <Link href="#" className=" hover:text-gray-800">
              <CiInstagram className="bg-[#1A0B5B] text-white" />
              </Link>
              <Link href="#" className=" hover:text-gray-800">
              <CiTwitter className="bg-[#1A0B5B] text-white" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  