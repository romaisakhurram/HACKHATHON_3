"use client"
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import Image from "next/image"
import { useState , useEffect } from "react";
import { Product } from "@/types/product";
import { ProductFour } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { addToCart } from "../actions/actions";

export default function Feature () {

  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProduct() {
     const fetchedProduct :Product[] = await client.fetch(ProductFour)
     setProduct(fetchedProduct)
    }
     fetchProduct();
  }, [])

  const handleAddToCart = ( e:React.MouseEvent , product:Product) => {
    e.preventDefault()

    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1200
    })
    addToCart(product)
  }

    return (
        <div className="w-full h-[800] mt-10 p-5">
          <h1 className="text-[40px] font-[Josefin Sans] font-bold text-[#1A0B5B] text-center">Feature Product</h1>
          <div className="flex justify-center gap-10">
           {product.map ((product) => (
              <div key={product._id} className="mt-20 bg-white w-[300] h-[300] relative group overflow-hidden shadow-xl rounded-md hover:scale-105 transition-transform duration-200">
                <div className="flex bg-[#F2F0FF] w-[250] h-[400] rounded-t-sm">
                  {product.image &&  (
                    <Image src={urlFor(product.image).url()} 
                      alt={product.name}
                      width={220} 
                      height={220}
                      className="w-60 h-60 p-10"
                    ></Image>
                  )}
                  <div className="absolute inset-2 bg-opacity-100 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="space-x-2 flex">
                      <FaRegHeart className="w-5 h-6 mb-1 text-[#1A0B5B]"/>
                      <MdOutlineLocalGroceryStore className="w-8 h-6 mb-1 text-[#1A0B5B]" onClick={(e) => handleAddToCart (e , product)}/> 
                      <FaSearchPlus className="w-8 h-4 mt-1 text-[#1A0B5B]"/>
                    </div> 
                  </div>
                  <div className="absolute inset-20 bg-opacity-100 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href={`/product/${product.slug.current}`}>
                        <button className=" w-32 h-10 px-1 py-1 mt-[90px] bg-green-400 text-white text-sm font-medium hover:bg-green-600 rounded-sm">
                          View details 
                        </button>
                    </Link>
                  </div>
                </div>
                <div className="p-5 text-center hover:bg-blue-600 hover:text-white">
                  <h2 className="text-pink-600 text-lg font-[Lato]">{product.name}</h2>
                  <p className="text-sm text-[#151875] font-[JosefinSans]">Code-Y252301</p>
                  <p className="text-sm text-[#151875] font-[Lato]">{product.price}</p>
                 </div>
              </div>
            ))}
          </div>
          <ul className="flex justify-center mt-10 gap-1">
            <li className="bg-pink-600 w-4 h-1 rounded-md"></li>
            <li className="bg-pink-400 w-4 h-1 rounded-md"></li>
            <li className="bg-pink-400 w-4 h-1 rounded-md"></li>
            <li className="bg-pink-400 w-4 h-1 rounded-md"></li>
          </ul>
        </div>
    )
}