"use client"
import Image from "next/image"
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";
import { Product7} from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { addToCart } from "../actions/actions";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function Shop () {
     const [product, setProduct] = useState<Product[]>([]);
   
     useEffect(() => {
       async function fetchProduct() {
         const fetchedProduct: Product[] = await client.fetch(Product7);
         setProduct(fetchedProduct);
       }
       fetchProduct();
     }, []);
   
     const handleAddToCart = (e: React.MouseEvent, product: Product) => {
       e.preventDefault();
   
       Swal.fire({
         position: "top-right",
         icon: "success",
         title: `${product.name} added to cart`,
         showConfirmButton: false,
         timer: 1200,
       });
       addToCart(product);
     };

    return (
        <>
           <TopHeader/>
           <Header/>
           <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10">
               <h1 className="text-[30px] text-[#101750] font-[JosefinSans] font-bold">Shop Lists</h1>
                <ul className="flex gap-2">
                  <li>Home_</li>
                  <li>Pages_</li>
                  <li className="text-pink-600">Shop List</li>
                </ul>
            </div>
           <div className="w-full h-[800] justify-center mt-15 p-5">
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
                
                {product.map ((product) => (
                    <div key={product._id} className="mt-10 w-[300] h-[200] flex justify-center gap-5 shadow-lg ">
                      <Link href={`/product/${product.slug.current}`}>
                        <div className="w-[200] h-[250]">
                         {product.image && (
                            <Image src={urlFor(product.image).url()} 
                            alt={product.name} 
                            width={100} 
                            height={100}
                            className="w-40 h-40 "
                            ></Image>
                            )}
                        </div>
                           <h2 className="text-[#111C85] font-[JosefinSans] text-lg">{product.name}</h2>
                           <p className="text-[#111C85] text-md">{product.price} <del className="text-[#FF2AAA]">1800</del></p>
                           <p className="text-[#9295AA] font[Lato] text-sm">{product.description}</p>
                           <ul className="flex mt-2">
                                <li><FaSearchPlus className="w-6 h-5"/></li>
                                <li><FaRegHeart className="w-8 h-6 "/></li>
                                <li><MdOutlineLocalGroceryStore className="w-8 h-6" onClick={(e) => handleAddToCart (e , product)}/></li>
                            </ul>
                        </Link>
                    </div>
                ))}

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
        <Footer />   
        </>  
    )
}
