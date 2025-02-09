"use client"
import Image from "next/image"
import Link from "next/link"

export default function Hero () {
    return (
        <div className="w-full h-[500px] bg-[#F2F0FF]">
            <div className="flex justify center">
                <div>
                    <Image
                      src="/images/Lamp.png"
                      alt="Lamp"
                      width={387}
                      height={387}
                    ></Image>
                </div>
                <div className=" mt-20">
                    <p className="text-pink-600">Best Furniture For Your Castle....</p>
                    <h1 className="text-5xl font-bold font-[Josefin Sans]">New Furniture Collection trend in 2024</h1><br />
                    <p className="text-[#8A8FB9] font-bold font-[Lato]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                    in phasellus non in justo.</p> <br />
                    <button className="w-40 h-10 bg-pink-600 text-white p-2"><Link href="/Products">Shop Now</Link></button>
                </div>
                <div className="mt-12 rounded-full">
                    <Image
                      src="/images/PinkSofa.png"
                      alt="Sofa"
                      width={500}
                      height={400}
                    ></Image>
                </div>
            </div>
        </div>
    )
}