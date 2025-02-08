import Image from "next/image"
import Link from "next/link"
import { FaRegCircle } from "react-icons/fa";

export default function UniqueFeature () {
    return (
        <div className=" w-full h-[500px] bg-[#F2F0FF] items-center mt-10">
            <div className=" w-[70%] ml-[15%] flex justify-center">
                <div>
                  <Image
                  src="/images/blueSofa.png"
                  alt="blueSofa"
                  width={500}
                  height={500}
                  className="w-400 h-300 mt-20"
                  ></Image>
                </div>
                <div className="mt-20">
                    <span className="text-[40px] text-[#1A0B5B] font-bold font-[JosefinSans]">Unique Feature Of Leatest & Trending product</span><br />
                    <p className="text-xl text-gray-400 flex gap-1"><FaRegCircle className="w-4 h-4 mt-2 rounded-full bg-pink-600  text-pink-600"/>All frames constructed with hardwood solids and laminates</p><br />
                    <p className="text-xl text-gray-400 flex gap-1"><FaRegCircle className="w-5 h-4 mt-2 rounded-full bg-[#5E37FF]  text-[#5E37FF]"/>Reinforced with double wood dowels, glue, screw - nails corner 
                    blocks and machine nails</p><br />
                    <p className="text-xl text-gray-400 flex gap-1"><FaRegCircle className="w-4 h-4 mt-2 rounded-full bg-[#2BF5CC]  text-[#2BF5CC]"/>Arms, backs and seats are structurally reinforced</p><br />
                    <div>
                      <button className="w-40 h-[35px] bg-pink-600 text-white font-[JosefinSans] text-md"><Link href="/ShoppingCart">Add to Cart</Link></button>
                      <span className="text-md">B&B Italian Sofa</span>&nbsp;
                      <span className="text-md">$32.00</span>
                    </div>
                
                </div>
            </div>
        </div>
    )
}