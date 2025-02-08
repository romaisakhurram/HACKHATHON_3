import Image from "next/image";
import Link from "next/link"
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Pages () {
    return (
        <>
        <TopHeader/>
        <Header/>
        <div className="w-full h-[800]">
            <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10 mb-5">
              <h1 className="text-[30px] font-serif font-bold">Hekto Demo</h1>
            </div>
            <div className="m-20">
                <h1 className="text-lg font-serif font-bold">Hekto Demo</h1>
                <p className="text-sm text-gray-400">Cart/Information/Shopping/payment</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {/* Left Section */}
                <div className=" w-[90%] h-full ml-20 lg:col-span-2 bg-[#F2F0FF]  p-6 rounded-lg">
                  <h2 className="text-lg font-semibold mb-6">Contact Information</h2>
                  <input
                   className="w-full bg-[#F2F0FF] p-3 mb-4 rounded-md"
                   placeholder="Email or mobile phone number"
                    />
                    <div className="flex bg-[#F2F0FF] items-center space-x-2 mb-6">
                      <input type="checkbox" id="subscribe" />
                       <label htmlFor="subscribe" className="text-sm">
                         Keep me up to date on news and exclusive offers
                       </label>
                    </div>

                    <h2 className="text-lg  font-semibold mb-4">Shipping address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b-2 mb-2">
                       <input className=" p-3 rounded-md bg-[#F2F0FF]" placeholder="First name (optional)" />
                       <input className=" p-3 rounded-md bg-[#F2F0FF]" placeholder="Last name" />
                    </div>
                    <div className="border-b-2">
                        <input
                        className="w-full p-2 mb-2  bg-[#F2F0FF] rounded-md "
                        placeholder="Address"
                        />
                    </div>
                    <div className="border-b-2">
                       <input
                       className="w-full p-3 mb-2 bg-[#F2F0FF] rounded-md"
                       placeholder="Apartment, suite, etc. (optional)"
                       />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 mt-2 gap-4 ">
                       <input className=" p-3 rounded-md bg-[#F2F0FF]" placeholder="City" />
                       <input className=" p-3 rounded-md bg-[#F2F0FF]" placeholder="Postal Code" />
                    </div>

                    <button className="bg-pink-500 text-white px-6 py-2 mt-20 rounded-md hover:bg-pink-600">
                        <Link href="/">Continue Shipping</Link>
                    </button>
                </div>

                {/* Right Section */}
                <div className="bg-white p-6 mr-20">
                   <ul>
                     {[
                     {title: "Ul diam consequat", color:"brown" , price: "$120.00" , Image: "/images/Rectangle1.png" },
                     {title: "Ul diam consequat", color:"brown" , price: "$35.00"  , Image: "/images/Rectangle2.png"  },
                     {title: "Ul diam consequat", color:"brown" , price: "$32.00"  , Image: "/images/Rectangle3.png"  },
                     {title: "Ul diam consequat", color:"brown" , price: "$120.00" , Image: "/images/Rectangle5.png" },
                     {title: "Ul diam consequat", color:"brown" , price: "$120.00" , Image: "/images/Rectangle6.png" },
                      ].map((Idata , index) => (
                      <li key={index} className="flex justify-between border-b-2 mb-4">
                        <div className="flex justify-center gap-5">
                           <div>
                               <Image
                               src={Idata.Image}
                               alt={Idata.title}
                               width={80}
                               height={80}
                               className="mb-2"
                               ></Image>
                            </div>
                            <div className="mt-1">
                                <p className="text-sm font-medium">{Idata.title}</p>
                                <p className="text-sm text-gray-400">{Idata.color}</p>
                                <p className="text-sm text-gray-400">Size: XL</p>
                            </div>
                        </div>
                        <p className="text-sm font-semibold mt-3">{Idata.price}</p>
                        </li>
                        ))}
                    </ul>
                

                    <div className="border-t w-full h-[200px] bg-[#F2F0FF] px-5 mt-5 pt-2 rounded-md">
                        <div className="flex justify-between p-2 border-b-2">
                           <span className="text-lg">Subtotal:</span>
                           <span className="text-lg font-semibold">£219.00</span>
                        </div>
                        <div className="flex justify-between p-2 border-b-2">
                           <span className="text-lg">Totals:</span>
                           <span className="text-lg font-semibold">£225.00</span>
                        </div>
                        <div className="flex bg-[#F2F0FF] items-center mt-2 space-x-2 mb-6">
                           <input type="checkbox" id="subscribe" />
                            <label htmlFor="subscribe" className="text-sm">
                               Shipping & taxes calculated at checkout
                            </label>
                        </div>
                        <button className="w-[85%] h-10 bg-green-500 ml-5 mb-3 text-white py-2 rounded-md hover:bg-green-600">
                          <Link href="/OrderCompleted">Proceed To Checkout</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}