import Image from 'next/image';
import { FaRegCircle } from "react-icons/fa";
import Header from '../components/Header';
import TopHeader from '../components/TopHeader';
import Footer from '../components/Footer';

export default function Contact () {
  return (
    <>
    <TopHeader/>
    <Header/>
    <div className="w-full h-[800]">
        <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10">
            <h1 className="text-[30px] font-serif font-bold">My Contact</h1>
            <ul className="flex gap-2">
                <li>Home_</li>
                <li>Pages_</li>
                <li className="text-pink-600">My Contact</li>
            </ul>
        </div>
        <div className="flex flex-col md:flex-row m-10 px-50 ">
          <div className="md:w-1/2 p-4">
            <h2 className="text-xl text-[#151875] font-bold mb-4">Information About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
            <div className="flex items-center mt-4">
              <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
            </div>
          </div>

          <div className="md:w-1/2 p-4 ml-20">
            <h2 className="text-xl text-[#151875] font-bold mb-4">Contact Way</h2>
            <div className="list-none flex justify-between">
              <div>
                   <span className="mb-2 flex gap-2"> <FaRegCircle className="w-8 h-8 mt-2 rounded-full bg-blue-500  text-blue-500 "/>Tel: 877-67-88-99 <br/> E-Mail: shop@store.com</span>
                <div>
                   <span className="mb-2 flex gap-2"><FaRegCircle className="w-8 h-8 rounded-full bg-yellow-500  text-yellow-500 "/>20 Margaret st. London</span>
                </div>
              </div>
              <div className='mr-20'>
                <span className="mb-2 flex gap-2"><FaRegCircle className="w-8 h-8 mt-2 rounded-full bg-pink-500  text-pink-500 "/>Great britain, <br /> 3NM98-LK</span>
                <span className="mb-2 flex gap-2"><FaRegCircle className="w-8 h-8 mt-2 rounded-full bg-green-500  text-green-500 "/>Free standard shipping <br />on all orders.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-8 ml-10">
          <div className="md:w-1/2 p-4">
            <h2 className="text-xl text-[#151875] font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-md mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
            <form>
              <div className="mb-4 flex gap-5">
                <input type="text" placeholder="Your Name" className="mt-1 p-2 w-[80%] border rounded-md" />
                <input type="email"  placeholder="Your Email" className="mt-1 p-2 w-[80%] border rounded-md" />
              </div>
              <div className="mb-4">
                <input type="text"   placeholder="Subject" className="mt-1 p-2 w-full border rounded-md" />
              </div>
              <div className="mb-4">
                <textarea   placeholder="Type your message" rows={4} className="mt-1 p-2 w-full border rounded-md"></textarea>
              </div>
              <button type="submit" className="bg-pink-600 hover:bg-pink-800 text-white py-2 px-4 round-md">Send Mail</button>
            </form>
          </div>

          <div className="md:w-1/2 p-4">
            <Image src="/images/contact-image.png" alt="Contact Us" width={500} height={300} ></Image>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  );
}