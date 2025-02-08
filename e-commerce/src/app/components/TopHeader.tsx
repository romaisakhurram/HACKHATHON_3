import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="w-full bg-violet-800 text-white p-2">
      <div className="flex flex-wrap justify-between items-center gap-6 md:gap-2 sm:gap-2 px-4">
        {/* Contact Info */}
        <div className="flex gap-6 text-lg md:gap-4 md:text-md sm:gap-2 sm:text-sm">
          <p className="flex items-center gap-2">
            <AiOutlineMail className="w-6 h-6" />
            mhhasanul@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneVolume className="w-6 h-6" />
            (12345)67890
          </p>
        </div>

        {/* Language and Currency Selectors */}
        <div className="flex gap-4 md:gap-2">
          <select
            name="language"
            className="bg-violet-800 text-white border-none outline-none hover:text-gray-300">
            <option value="Language">English</option>
            <option value="Language">Spanish</option>
            <option value="Language">Italian</option>
          </select>

          <select
            name="currency"
            className="bg-violet-800 text-white border-none outline-none hover:text-gray-300">
            <option value="Rupees">USD</option>
            <option value="Rupees">PKR</option>
            <option value="Rupees">INR</option>
          </select>

          {/* User Actions */}
        
          <ul className="flex gap-6 items-center md:gap-4 sm:gap-2">
            <li>
              <Link href="/Login" className="flex items-center gap-1">
                Login
                <FaRegUser className="w-4 h-4" />
              </Link>
            </li>
            <li  className="flex items-center gap-1">
                Wishlist
              <FaRegHeart  className="w-6 h-6" />
            </li>
            <li>
              <Link href="/ShoppingCart"><MdOutlineLocalGroceryStore className="w-6 h-6" /></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
