import Image from "next/image"
import Link from "next/link"
import TopHeader from "../components/TopHeader"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function About () {
        const data = [ 
    {
        id:1,
        title :"Free Delivery",
        desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
       Image:  "/images/offer2.png"
    },
    {
        id:2,
        title :"100% Cash Back",
        desc :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
       Image :  "/images/offer3.png"
    },
    {
        id:3,
        title :"Quality Product",
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

        <>
        <TopHeader/>
        <Header/>
            <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10">
               <h1 className="text-[30px] font-serif font-bold">About</h1>
                <ul className="flex gap-2">
                   <li>Home_</li>
                   <li>Pages_</li>
                   <li className="text-pink-600">About</li>
                </ul>
            </div>
            <div className="w-full h-[800] mt-10 p-5">
                <div className="flex justify-center items-center gap-2">
                    <div>
                      <Image
                      src="/images/AboutImage.png"
                      alt="About image"
                      width={850}
                      height={650}
                      className="w-120 h-80 ml-20 mt-5"
                      ></Image>
                    </div>
                    <div className="ml-20">
                        <h1 className="font-[JosefinSans] text-5xl text-[#1A0B5B] mb-5">Know About Our Ecomerce Business, History</h1>
                        <p className="font-[Lato text-gray-500 text-md mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                        <button className="w-40 h-10 text-white bg-pink-600 rounded-sm"><Link href="/FAQ">Contact Us</Link></button>
                    </div>
                </div>
                <h1 className="text-[40px] mt-20 font-serif font-bold text-[#1A0B5B] text-center">Our Feature</h1>
                <div className="flex justify-center gap-10">
                    {data.map ((Idata,index) => (
                        <div key={index} className=" mt-10 bg-white w-[250px] h-[250px] border border-gray-300 shadow-xl">
                            <div className="flex">
                                <Image src={Idata.Image} 
                                  alt={Idata.title} 
                                  width={100} 
                                  height={100}
                                  className="w-20 h-20 p-2 mt-2 ml-[30%]"
                                ></Image>
                            </div>
                            <div className="p-3 text-center">
                                <h2 className="text-[#1A0B5B] text-xl font-bold font-serif">{Idata.title}</h2>
                                <p className="text-gray-300 text-lg">{Idata.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#FBFBFF] w-full h-[400px] mt-10">
                <div className="p-10 text-center">
                    <h1 className="text-4xl font-[Josefin Sans] font-bold text-center mb-10">Our Client Say!</h1>
                    <Image
                        src="/images/Group 200.png"
                        alt="client images"
                        height={80}
                        width={150}
                        className="w-40 h-15 ml-[44%] rounded-sm"
                    ></Image>
                    <h4 className="mt-5 font-[Lato] text-2xl ">Selina Gomez</h4>
                    <p className="text-[10px] text-[#8A8FB9]">Ceo At Webecy Digital</p>
                    <p className="mt-5 text-md text-[#8A8FB9] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin <br />
                       aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor <br />
                       aliquam lacus volutpat praesent.
                    </p>
                    <ul className="flex justify-center mt-5 gap-1">
                        <li className="bg-pink-400 w-6 h-1 rounded-md"></li>
                        <li className="bg-pink-600 w-8 h-1 rounded-md"></li>
                        <li className="bg-pink-400 w-6 h-1 rounded-md"></li>
                    </ul>
                </div>

            </div>
            <Footer/>
        </>
    
    )
}