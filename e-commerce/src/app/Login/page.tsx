import Link from "next/link"
import Image from "next/image"
import TopHeader from "../components/TopHeader"
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Login () {
    return(
        <>
        <TopHeader/>
        <Header/>
        <div className="w-full h-[800]">
            <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10">
               <h1 className="text-[30px] font-serif font-bold">My Account</h1>
               <ul className="flex gap-2">
                   <li>Home_</li>
                   <li>Pages_</li>
                   <li className="text-pink-600">MyAccount</li>
               </ul>
            </div>
            <div className="w-[28%] h-[350px] shadow-lg items-center ml-[38%] mt-10 p-5 bg-white border border-gray-200">
                <h1 className="text-center text-4xl font-sans font-bold">Login</h1>
                <p className="text-center text-sm text-gray-400 mb-4">Please login using account detail bellow.</p>
                <div>
                    <div className=" ml-3 mb-4">
                    <input type="email" name="email"
                    placeholder="Email Address"
                    className="p-2 w-[95%] border border-gray-300r"
                    />
                    </div>
                    <div className=" ml-3 mb-4">
                    <input type="password" name="password"
                    placeholder="Password"
                    className="p-2 w-[95%] border border-gray-300"
                    />
                    </div>

                    <p className="text-gray-400 text-sm mb-4 ml-3">Forgot Your password</p>
                    <button className="w-60 h-10 bg-pink-600 text-white text-md ml-12 mb-4">Sign In</button>
                    <p className="text-gray-400 text-sm ml-3">Don’t have an Account?<Link href="/">Create account</Link></p>

                </div>
            </div>    
                <div>
                    <Image
                    src="/images/Signatures.png"
                    alt="Signature"
                    width={500}
                    height={500}
                    className="m-10 ml-[35%]"
                    ></Image>
                </div>
        </div>
        <Footer/>
        </>
    )
}