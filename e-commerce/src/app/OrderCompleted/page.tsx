import Image from "next/image"
import Link from "next/link"
import { TiTick } from "react-icons/ti"


export default function OrderCompleted () {
    return(
        <div className="w-full h-[800]">
            <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10 mb-5">
              <h1 className="text-4xl text-[#101750] mt-2 font-[JosefinSans] font-bold">Order Completed</h1>
            </div>
            <div className="m-20">
                <h1 className="text-xl text-[#101750] font-[JosefinSans] font-bold">Order Completed</h1>
                <ul className="flex gap-2">
                    <li className="text-gray-400">Home_</li>
                    <li className="text-gray-400">Pages_</li>
                    <li className="text-pink-600">Order Completed</li>
            </ul>
            </div>
            <div className="text-center items-start ">
                <div>
                    <Image
                    src="/images/clock 1.png"
                    alt="clock"
                    height={100}
                    width={100}
                    className="w-20 h-20 ml-[20%]"
                    ></Image>
                </div>
                <div>
                    <span><TiTick className="w-20 h-20 text-pink-600 ml-[45%] border-8 border-gray-300 rounded-full"/></span>
                    <h1 className="text-[#101750] font-[JosefinSans] font-bold text-4xl mb-5">Your Order is Completed</h1>
                    <p className="text-[#8D92A7] font-[Lato] text-md mb-5">
                        Thank you for your order! Your order is being processed and will be completed within 3-6 <br />
                        hours. You will receive an email confirmation when your order is completed.
                    </p>
                    <button className="bg-[#FF1788] w-208 h-59 p-2 text-white font-semibold text-[Lato] text-md">
                        <Link href="./"> Contine Shopping </Link>
                    </button>
                </div>
                <div>
                   <Image
                    src="/images/Group.png"
                    alt="Notebook"
                    height={100}
                    width={100}
                    className="w-20 h-20 ml-[80%]"
                    ></Image>
                </div>
            </div>
            <div>
                <Image
                    src="/images/Signatures.png"
                    alt="Signature"
                    height={600}
                    width={600}
                    className="ml-[28%] mt-5"
                ></Image>
            </div>
        </div>
    )
}