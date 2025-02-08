import Image from "next/image"
import { FaSearchPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { HiOutlineMagnifyingGlass} from "react-icons/hi2";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ShopLeftSide () {
    const data = [ 
    {
        id:1,
        title :"Dictum morbi",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image: "/images/Rectangle 38.png"
    },
    {
        id:2,
        title :"Sodales sit",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/Rectangle 32.png"
    },
    {
        id:3,
        title :"Nibh varius",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/Rectangle 33.png"
    },
    {
        id:4,
        title :"Mauris quis",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/Rectangle 36.png"
    },
    {
        id:5,
        title :"Morbi sagittis",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/Rectangle 37.png"
    },
    {
        id:6,
        title :"Ultricies venenatis",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/Rectangle 34.png"
    },
    {
        id:7,
        title :"Scelerisque dignissim",
        price:"$26.00",
        delPrice:"$52.00",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        Image : "/images/Rectangle 35.png"
    },
    ]

    return (
        <>
        <TopHeader/>
        <Header/>
           <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10">
               <h1 className="text-[30px] text-[#101750] font-[JosefinSans] font-bold">Shop Left Side</h1>
                <ul className="flex gap-2">
                  <li>Home_</li>
                  <li>Pages_</li>
                  <li className="text-pink-600">Shop Left Side</li>
                </ul>
            </div>
           <div className="w-full h-[800] flex justify-evenly flex-wrap mt-15 p-5">
                {/*headings */}
                <div className="flex justify-center p-5">
                    <div>
                       <h1 className="text-3xl text-[#151875] font-bold font-serif">Ecommerce Accessories & Fashion Item</h1>
                        <p className="text-sm text-[#8A8FB9]">About 9,620 results(0.62 seconds)</p>
                    </div>

                    <div className="flex justify-center text-[#3F509E] gap-5">
                       <label htmlFor="number">Per Page:</label>
                       <input type="number" name="number" 
                       className="w-[5%] h-8 border border-gray-400" />

                       <label htmlFor="text">Sort By:</label>
                       <input type="text" name="text" placeholder="Best Watch"
                       className=" w-[12%] h-8 border border-gray-400  text-sm" />

                       <label htmlFor="number">Views:</label>
                       <input type="number" name="number" 
                        className="w-[20%] h-8 border border-gray-400" />
                    </div>
                </div>
                {/* Left Side */}
                <div className="mt-20">
                   <div className="mb-10">
                       <h2 className="font-bold text-lg text-[#151875] text-[JosefinSans] underline underline-offset-1">Product Brand</h2>
                       <input type="checkbox" name="subscribe" className=""/>
                       <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           Coaster Furniture
                        </label>
                        <br/>

                        <input type="checkbox" name="subscribe" />
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           Fusion Dot High Fashion
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe" />
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           Unique Furnitture Restor
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe" />
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                          Dream Furnitture Flipping
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe" />
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           Young Repurposed
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe" />
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           Green DIY furniture
                        </label>                
                    </div>
                    <div className="mb-10">
                        <h2 className="font-bold text-lg text-[#151875] text-[JosefinSans] underline underline-offset-1">Discount Offer</h2>
                        <input type="checkbox" name="subscribe" className="accent-pink-500"/>
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                          20% Cashback
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe" className="accent-pink-500" />
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           5% Cashback Offer
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe" className="accent-pink-500"/>
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                          25% Discount Offer
                        </label>
                    </div>
                    <div className="mb-10">
                        <h2 className="font-bold text-lg text-[#151875] text-[JosefinSans] underline underline-offset-1">Categories</h2>
                        <input type="checkbox" name="subscribe"  className="accent-pink-500"/>
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           Prestashop
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe"  className="accent-pink-500"/>
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           Magento
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe"  className="accent-pink-500"/>
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           Bigcommerce
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe"  className="accent-pink-500"/>
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           OsCommerce
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe"  className="accent-pink-500"/>
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                        3dcart
                       </label>
                        <br />

                        <input type="checkbox" name="subscribe"  className="accent-pink-500"/>
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           Bags
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe"  className="accent-pink-500"/>
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           Accessories
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe"  className="accent-pink-500"/>
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           Jewellery
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe"  className="accent-pink-500"/>
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           Watches
                        </label>
                    </div>

                    <div className="mb-10">
                       <h2 className="font-bold text-lg text-[#151875] text-[JosefinSans] underline underline-offset-1">Price Filter</h2>
                        <input type="checkbox" name="subscribe"  className="accent-pink-500" />
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                          $0.00 - $150.00
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe" className="accent-pink-500" />
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           $150.00 - $350.00
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe"  className="accent-pink-500" />
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                        $150.00 - $504.00
                        </label>
                        <br />

                        <input type="checkbox" name="subscribe"  className="accent-pink-500" />
                        <label htmlFor="subscribe" className="text-sm text-[#7E81A2] text-[Lato]">
                           $450.000 +
                        </label>
                        <br />
                        
                        <button className="flex justify-center mt-2 w-40 h-8 p-2 rounded-md border border-gray-400 text-gray-300 outline outline-none">
                          <input type="search" name="subscribe" placeholder="$10.0+$20" className="w-full rounded text-sm  text-gray-300 outline outline-none" />
                          <HiOutlineMagnifyingGlass className="w-4 h-4 ml-12 text-gray-400" />
                        </button>
                    </div>

                    <div className="mb-10">
                       <h2 className="font-bold text-lg text-[#151875] text-[JosefinSans] underline underline-offset-1">Filter By Color</h2>
                       <div className="flex text-sm gap-1 mt-2">
                            <ul>
                              <li className="mb-2 flex gap-1"> <FaRegCircle className="w-4 h-4  rounded-full bg-[#5E37FF]  text-[#5E37FF]"/>Blue</li>
                              <li className="mb-2 flex gap-1"> <FaRegCircle className="w-4 h-4  rounded-full bg-[#33D221]  text-[#33D221] "/>Green</li>
                            </ul>
                            <ul>
                                <li className="mb-2 flex gap-1"> <FaRegCircle className="w-4 h-4  rounded-full bg-[#FF9437]  text-[#FF9437] "/>Orange</li>
                                <li className="mb-2 flex gap-1"> <FaRegCircle className="w-4 h-4  rounded-full bg-[#E248FF]  text-[#E248FF] "/>Purple</li>
                            </ul>
                            <ul>
                                <li className="mb-2 flex gap-1"> <FaRegCircle className="w-4 h-4  rounded-full bg-[#FFBF95] text-[#FFBF95] "/>Brown</li>
                                <li className="mb-2 flex gap-1"> <FaRegCircle className="w-4 h-4  rounded-full bg-[#26CBFF] text-[#26CBFF]"/>Sky</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Right Side */}
                <aside>
                  {data.map ((Idata,index) => (
                     <div key={index} className=" mt-10 w-[150] h-[150] p-2 flex justify-center gap-5 shadow-lg ">
                        <div className="w-[80] h-[150]">
                            <Image src={Idata.Image} 
                            alt={Idata.title} 
                            width={80} 
                            height={80}
                            className="w-60 h-40 "
                            ></Image>
                        </div>
                        <div className="font-bold  p-2">
                           <h2 className="text-[#111C85] font-[JosefinSans] text-lg">{Idata.title}</h2>
                           <p className="text-[#111C85] text-md">{Idata.price} <del className="text-[#FF2AAA]">{Idata.delPrice}</del></p>
                           <p className="text-[#9295AA] font[Lato] text-sm">{Idata.desc}</p>
                            <ul className="flex ">
                                <li><FaSearchPlus className="w-6 h-5"/></li>
                                <li><CiHeart className="w-8 h-6 "/></li>
                                <li><MdOutlineLocalGroceryStore className="w-8 h-6"/></li>
                            </ul>
                        </div>
                    </div>
                    ))}
                </aside>
                <div>
                    <Image
                       src="/images/Signatures.png"
                       alt="Signature"
                       width={500}
                       height={500}
                       className=" ml-[10%] mt-10"
                    ></Image>
                </div>
            </div>    
        <Footer/>
        </>  
    )
}
