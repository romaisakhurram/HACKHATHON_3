import Image from "next/image"
import Link from "next/link"
 
export default function LatestUpdate () {
    return (
        <div className="w-full h-full mt-20">
            <div className=" w-full h-[330px] p-2 bg-no-repeat bg-cover bg-[url('/images/Latest1.png')]">
                <div className="text-center">
                    <h1 className="text-4xl font-[Josefin Sans] font-bold text-[#151875] mt-20">Get Latest Update By Subscribe <br />Our News Letter</h1>
                    <button className="w-40 h-30 font-[Josefin Sans] bg-pink-600 text-white p-2 mt-5 "><Link href="/ShopGrid/page">Shop Now</Link></button>
                </div>
            </div>
            <div className="ml-[30%] mt-10">
                    <Image
                    src="/images/Signatures.png"
                    alt="Signature Image"
                    width={600}
                    height={400}
                    >
                    </Image>
            </div>
        </div>
        
    )
} 