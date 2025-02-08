"use client"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage () {
    const data = [ 
    {
        id:1,
        title :"Top essential Trend in 2021",
        desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        button:"ReadMore",
       Image:  "/images/cart1.png"
    },
    {
        id:2,
        title :"Top essential Trend in 2021",
        desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        button:"ReadMore",
       Image :  "/images/cart2.png"
    },
    {
        id:3,
        title :"Top essential Trend in 2021",
        desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
        button:"ReadMore",
       Image :  "/images/cart3.png"
    },
    ]

    return (
        <div className="w-full h-[800] mt-20 p-5">
          <h1 className="text-[40px] font-[JosefinSans] font-bold text-[#1A0B5B] text-center">Latest Blog</h1>
          <div className="flex justify-center gap-10 ">
           {data.map ((Idata,index) => (
            <div key={index} className="mt-20 bg-white w-[600] h-[500] hover:scale-105 transition-transform duration-200 shadow-lg border border-gray-300 rounded-xl">
                <div className="flex  w-[330px] h-[200px]">
                  <Image src={Idata.Image} 
                  alt={Idata.title} 
                  width={220} 
                  height={180}
                  className="w-[98%] h-[98%] m-2 rounded-lg"
                   ></Image>
                </div>
                <div className="w-[300px] h-[160px] p-5">
                  <span className="text-[#1A0B5B] hover:text-pink-600 font-[Josefin Sans] text-xl">{Idata.title}</span><br />
                  <span className="text-[#72718F] font-[Lato] text-md">{Idata.desc}</span><br />
                  <button className="text-[#1A0B5B] font-[Lato] font-md underline underline-offset-1 hover:text-pink-600"><Link href="/Blog1">{Idata.button}</Link></button>
                </div>
            </div>
            ))}
            </div>
  
        </div>
    )
}