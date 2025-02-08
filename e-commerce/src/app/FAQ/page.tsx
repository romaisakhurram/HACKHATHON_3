import Image from "next/image"
import Header from "../components/Header"
import TopHeader from "../components/TopHeader"
import Footer from "../components/Footer"

export default function FAQ () {  
    return (
        <>
        <TopHeader/>
        <Header/>
            <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10">
               <h1 className="text-[30px] font-serif font-bold">FAQ</h1>
                <ul className="flex gap-2">
                   <li>Home_</li>
                   <li>Pages_</li>
                   <li className="text-pink-600">FAQ</li>
                </ul>
            </div>
            <div className="w-[90%] h-[800px] flex gap-10 mt-10">
                <div className="w-[50%] ml-[10%]">
                    <h1 className="text-4xl font-[Josefin Sans] font-bold  text-[#1D3178]">General Information</h1>
                    <ul>
                        {[
                            {
                                ques : "Eu dictumst cum at sed euismood condimentum?",
                                desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."
                            },
                            {
                                ques: "Magna bibendum est fermentum eros.",
                             desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
                            },
                            {
                                ques: "Odio muskana hak eris conseekin sceleton?",
                                desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
                            },
                            {
                                ques: "Elit id blandit sabara boi velit gua mara?",
                                desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
                            }
                            ]   .map((data , index) => (
                                <li key={index} className="mt-10">
                                    <p className="text-lg font-[Josefin Sans] font-bold text-[#1D3178] mb-2">{data.ques}</p>
                                    <p className="text-md font-[Josefin Sans] font-bold text-[#A1ABCC] mb-5">{data.desc}</p>
                                </li>
                            ))}
                    </ul>
                </div>
                <aside className="w-[35%] h-[600px] bg-[#F2F0FF] rounded-lg ">
                    <div className="p-10">
                        <form action="form" className="w-full">
                            <h1 className="text-2xl font-[Josefin Sans] font-bold text-[#1D3178]">Ask a Question</h1>
                            <input type="text" placeholder="Your Name*"className="w-[95%] h-10 p-2 border border-gray-300 rounded-md mt-20" />
                            <input type="email" placeholder="Subject*"className="w-[95%] h-10 p-2 border border-gray-300 rounded-md mt-10" />
                            <textarea placeholder="Type your message*" rows={5} className="w-[95%]  p-2 border border-gray-300 rounded-md mt-10">
                            </textarea>
                            <button className="w-40 h-10 mt-5 text-white bg-pink-600 rounded-sm">
                                Send Mail
                            </button>
                        </form>
                    </div>
                </aside>
                <div>
                    <Image
                    src="/images/Signatures.png"
                    alt="signature image"
                    width={200}
                    height={200}
                    className="w-40 h-20"
                    ></Image>
                </div>
            </div>
        <Footer/>
        </>
    )
}