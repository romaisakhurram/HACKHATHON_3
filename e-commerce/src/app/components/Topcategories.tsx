"use client"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { Product5 } from "@/sanity/lib/queries"
import { Product } from "@/types/product"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FaSearchPlus } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa6"
import { MdOutlineLocalGroceryStore } from "react-icons/md"
import Swal from "sweetalert2"
import { addToCart } from "../actions/actions"

export default function TopCategories () {
       const [product, setProduct] = useState<Product[]>([])
           
        useEffect(() => {
          async function fetchProduct() {
            const fetchedProduct :Product[] = await client.fetch(Product5)
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
          <h1 className="text-[40px] font-[Josefin Sans] font-bold text-[#1A0B5B] text-center">Top Categories</h1>
          <div className="flex justify-center gap-10">
           {product.map ((product) => (
            <div key={product._id} className="mt-20 bg-white w-[500] h-[200] relative group overflow-hidden">
                <div className="flex bg-[#F2F0FF] w-[250px] h-[250px] rounded-full  hover:border-s-4 hover:border-[#1A0B5B] hover:border-spacing-1.5">
                  {product.image &&  (
                    <Image src={urlFor(product.image).url()} 
                     alt={product.name} 
                     width={100} 
                     height={80}
                     className="w-40 h-40 m-12"
                    ></Image>
                  )}
                </div>
                <div className="p-2 font-[Josefin Sans] text-center">
                  <h2 className="text-[#1A0B5B] text-xl">{product.name}</h2>
                  <p className="text-[#1A0B5B] text-md">{product.price}</p>
                </div>
                  <div className="absolute inset-2 bg-opacity-100 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-x-2 flex">
                    <FaRegHeart className="w-5 h-6 mb-1 text-[#1A0B5B]"/>
                    <MdOutlineLocalGroceryStore className="w-8 h-6 mb-1 text-[#1A0B5B]" onClick={(e) => handleAddToCart(e, product)}/> 
                    <FaSearchPlus className="w-8 h-4 mt-1 text-[#1A0B5B]"/>
                  </div> 
                <div className="absolute inset-20 bg-opacity-100 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/product/${product.slug.current}`}>
                    <button className=" w-32 h-10 px-1 py-1 mt-[90px] bg-green-400 text-white text-sm font-medium hover:bg-green-600 rounded-sm">
                      View details 
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}    
        </div>
      </div>
    )
}