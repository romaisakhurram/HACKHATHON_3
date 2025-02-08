import Image from "next/image"

export default function Offer () {
    const data = [ 
    {
        id:1,
        title :"24/7 Support",
        desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
       Image:  "/images/offer2.png"
    },
    {
        id:2,
        title :"24/7 Support",
        desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
       Image :  "/images/offer3.png"
    },
    {
        id:3,
        title :"24/7 Support",
        desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
       Image :  "/images/offer4.png"
    },
    {
        id:4,
        title :"24/7 Support",
        desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
       Image : "/images/offer1.png"
    },
    ]

    return (
        <div className="w-full h-[800] mt-5 p-5">
          <h1 className="text-[40px] font-[JosefinSans] font-bold text-[#1A0B5B] text-center">What Shopex Offer!</h1>
          <div className="flex justify-center gap-10">
           {data.map ((Idata,index) => (
            <div key={index} className=" mt-10 bg-white w-[250px] h-[250px] shadow-xl rounded-md hover:scale-105 transition-transform duration-200">
                <div className="flex rounded-xl">
                  <Image src={Idata.Image} 
                  alt={Idata.title} 
                  width={100} 
                  height={100}
                  className="w-20 h-20 p-2 mt-2 ml-[30%]"
                   ></Image>
                </div>
                <div className="p-3 text-center">
                  <h2 className="text-[#1A0B5B] text-[22px] font-semibold font-serif">{Idata.title}</h2>
                  <p className="text-gray-300 text-md">{Idata.desc}</p>
                </div>
            </div>
            ))}
            </div>
  
        </div>
    )
}