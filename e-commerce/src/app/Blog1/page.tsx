import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdOutlineAccountBox } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { HiOutlineMagnifyingGlass} from "react-icons/hi2";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Blog1 () {
    
  return (
    <>
    <TopHeader/>
    <Header/>
        <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10">
          <h1 className="text-[30px] font-serif font-bold">Single Blog</h1>
            <ul className="flex gap-2">
              <li>Home_</li>
              <li>Pages_</li>
              <li className="text-pink-600">Single Blog</li>
            </ul>
        </div>
      <div className="container mx-auto px-4 lg:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
              <div className="mb-10 bg-white">
                <Image
                  src="/images/blog1.png"
                  alt="blog image"
                  width={800}
                  height={300}
                  className="w-[60]% h-70  object-cover mb-5 "
                ></Image>
                <div>
                  <h2 className="text-xl font-semibold mb-3">Mauris at orci non vulputate diam tincidunt nec.</h2>
                  <p className="text-gray-400 mb-5">Praesent nonummy mi in odio. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum.</p>
                </div>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
              </div>
              <div className="bg-[#FAFAFB] p-2 mb-10 ">
                <p className="text-gray-400 font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat
                  toamk risusu.
                </p>
              </div>
              
                <div>
                  <div className="flex gap-5"> 
                    <div>
                     <Image
                      src="/images/Group1.png"
                      alt="blog image"
                      width={200}
                      height={200}
                      className="w-full h-60 mb-2"
                      ></Image>
                    </div>
                    <div>
                     <Image
                      src="/images/Group2.png"
                      alt="blog image"
                      width={200}
                      height={200}
                      className="w-full h-60 mb-2"
                      ></Image>
                    </div>
                  </div>
                    <div className="mt-5">
                      <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
                    </div>
                </div>

              
              <ul className="w-full h-[500] flex justify-center gap-5 mt-5">
                {[
                 {title: "Quam sed", price:"$32.00" , delPrice:"$56.00",  Image: "/images/Rectangle10.png" },
                 {title: "Tristique sed", price:"$32.00" , delPrice:"$56.00", Image: "/images/Rectangle9.png" },
                 {title: "A etiam", price:"$32.00" , delPrice:"$56.00", Image: "/images/Rectangle5.png" },
                 {title: "Mi nisi", price:"$32.00" , delPrice:"$56.00", Image: "/images/Rectangle11.png" },
                ].map((Idata , index) => (
                <li key={index} >
                  <div className="mt-1 w-[300] h-[200] ">
                    <div className="flex w-[200] h-[200]">
                     <Image
                      src={Idata.Image}
                      alt={Idata.title}
                      width={100}
                      height={100}
                      className="mb-2 w-80 h-60"
                      ></Image>
                    </div>
                    <div className="mt-1 mb-5 text-center">
                      <h1 className="text-md font-bold font-serif">{Idata.title}</h1>
                      <p className="text-gray-400 text-sm font-medium">{Idata.price} <del className="text-pink-600 text-sm font-medium">{Idata.delPrice}</del></p>
                    </div>
                </div>
              </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,</p> 
            <p className="text-gray-400 text-sm mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,</p> 
          <div>
            <ul className="flex justify-center mt-5 gap-5">
              <li className="text-blue-800 "><FaFacebook/></li>
              <li className="bg-pink-600 text-white"><SiInstagram/></li>
              <li className="bg-white text-blue-300"><AiFillTwitterCircle/></li>
            </ul>
          </div>
          
          <div className="w-[90%] h-50 mt-10 flex justify-center border border-gray-400 shadow-lg gap-5"> 
            <div>
              <Image
              src="/images/Rectangle8.png"
              alt="blog image"
              width={80}
              height={80}
              className="w-full h-20 m-2"
              ></Image>
            </div>
            <div className="mt-5 ">
              <h1 className="text-md font-bold font-serif">Sapien ac</h1>
              <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
            </div>
          </div>
          <div className="w-[90%] h-50 mt-10 flex justify-center border border-gray-400 shadow-lg gap-5"> 
            <div>
              <Image
              src="/images/Rectangle9.png"
              alt="blog image"
              width={120}
              height={80}
              className="w-full h-20 m-2"
              ></Image>
            </div>
            <div className="mt-5">
              <h1 className="text-md font-bold font-serif">Sapien ac</h1>
              <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
            </div>
          </div>

          <div className="container mx-auto px-2 mt-8 bg-white p-4 ">
             <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="flex border border-gray-300">
                    <MdOutlineAccountBox className="mt-3 ml-1"/><input
                    type="text"
                    placeholder="Your Name"
                    className="p-2 w-full"
                    />
                  </button>

                  <button className="flex border border-gray-300">
                   <MdOutlineMailOutline className="mt-3 ml-1"/><input
                    type="email"
                    placeholder="Write Your Email"
                    className=" p-2 w-full"
                    />
                  </button>
                </div>
                <button className="flex mt-5 w-full border border-gray-300">
                  <BiCommentDetail className="mt-5 ml-1"/>
                  <textarea
                    placeholder="Write your comment"
                    className=" p-2 w-full mt-4"
                  ></textarea>
                </button>
                
                <div className="flex items-center mt-2 space-x-2 mb-6">
                  <input type="checkbox" id="subscribe" />
                  <label htmlFor="subscribe" className="text-sm">
                    Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </div>

                <button className="w-full bg-pink-600 text-white py-2 px-4 mt-4">
                  Continue to shopping
                </button>
              </form>
            </div>
        </div>
  
          {/* Sidebar */}
           <aside>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Search  </h3>
              <button className="flex w-60 border border-gray-300">  
                <input 
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded p-2" 
                /><HiOutlineMagnifyingGlass className="w-20 h-30 ml-20 mt-3"/>
              </button>
            </div>
  
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <ul className="text-gray-600 space-y-2">
                {["Women(21)", "Women(10)", "Women(9)", "Women(5)"].map(
                  (category, index) => (
                    <li key={index}>
                     <span
                        className="text-blue-950 px-2 py-1 text-lg rounded cursor-pointer hover:text-pink-600">
                        {category}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold font-serif mb-3">Recent Post</h3>
              <ul className=" space-y-2">
                {[
                  {title:"It is long established fact" , Date:"Aug 09 2020" , Image:"/images/blog10.png"},
                  {title:"It is long established fact", Date:"Aug 09 2020" , Image:"/images/blog4.png"},
                  {title:"It is long established fact", Date:"Aug 09 2020" , Image:"/images/blog5.png"},
                  {title:"It is long established fact", Date:"Aug 09 2020" , Image:"/images/blog6.png"},
                ].map((post, index) => (
                  <li key={index} className="flex gap-5">
                   <Image
                   src={post.Image}
                   alt={post.title}
                   width={100}
                   height={100}
                   ></Image>
                  <div className="mt-2 font-serif">
                    <p className="text-blue-950">{post.title}</p>
                    <p className="text-gray-400">{post.Date}</p>
                  </div>
                </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold font-serif mb-3">Sale Product</h3>
              <ul className="space-y-2">
                {[
                  {title:"Elit ornare in enim mauris." , Date:"Aug 09 2020" , Image:"/images/blog7.png"},
                  {title:"Viverra pulvinar et enim.", Date:"Aug 09 2020" , Image:"/images/blog8.png"},
                  {title:"Mattis varius donec fdsfd", Date:"Aug 09 2020" , Image:"/images/blog9.png"},
                ].map((post, index) => (
                  <li key={index} className="flex gap-5">
                   <Image
                   src={post.Image}
                   alt={post.title}
                   width={100}
                   height={100}
                   ></Image>
                   <div className="mt-2 font-serif">
                      <p className="text-blue-950">{post.title}</p>
                      <p className="text-gray-400">{post.Date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="mb-8">
              <h3 className="text-lg font-semibold font-serif mb-3">Offer Product</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {title:"Duis lectus est.", price:"$12.00 - $15.00" , Image:"/images/blog13.png"}, 
                  {title:"Sed placerat." , price:"$12.00 - $15.00" , Image:"/images/product1.png"},
                  {title:"Netus Proin", price:"$12.00 - $15.00"  , Image:"/images/blog11.png"},
                  {title:"Platea in.", price:"$12.00 - $15.00" , Image:"/images/blog12.png"},
                ].map((src, index) => (
                   <div key={index}>
                      <Image
                      src={src.Image}
                      alt="Product"
                      width={80}
                      height={80}
                      className="w-40 h-20 object-cover rounded"
                      ></Image>
                      <p className="text-md text-blue-950 font-serif">{src.title}</p>
                      <p className="text-gray-400 text-sm font-serif">{src.price}</p>
                    </div>
                  ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["General", "Insas", "Atsanil", "Bibsaas", "Nulla"].map((tag,index) => (
                  <span
                    key={index}
                    className="text-blue-950 px-2 py-1 text-lg underline underline-offset-1 rounded cursor-pointer hover:text-pink-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
        <div>
          <Image
          src="/images/Signatures.png"
          alt="Signature"
          width={500}
          height={500}
          className="m-8 ml-[30%]"
          ></Image>
        </div>
      </div>
      <Footer/>
    </>  
  );
}
  