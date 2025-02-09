"use client"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { Product3, Product4} from "@/sanity/lib/queries"
import { Product } from "@/types/product"
import Image from "next/image"
import { useState, useEffect } from "react"
import Swal from "sweetalert2"
import { addToCart } from "../actions/actions"
import Link from "next/link"

export default function TrendingProduct () {
    const [product, setProduct] = useState<Product[]>([])
        
            useEffect(() => {
                async function fetchProduct() {
                   const fetchedProduct :Product[] = await client.fetch(Product3)
                   setProduct(fetchedProduct)
                }
             fetchProduct();
            }, [])
        
     const [IsProduct, IsSetProduct] = useState<Product[]>([])
                    
            useEffect(() => {
                async function fetchProduct() {
                    const fetchedProduct :Product[] = await client.fetch(Product4)
                    IsSetProduct(fetchedProduct)
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
        <div className="w-full h-[800] mt-20 p-5">
          <h1 className="text-[40px] font-serif font-bold text-[#1A0B5B] text-center">Trending Product</h1>
          <div className="flex justify-center gap-5">
           {product.map ((product) => (
            <div key={product._id} className=" mt-10 w-[300] h-[150] shadow-lg border border-gray-300 rounded-lg hover:scale-105 transition-transform duration-200 ">
                <Link href={`/product/${product.slug.current}`}>
                <div className="flex m-2 bg-[#F2F0FF] w-[218px] h-[182px] rounded-lg">
                {product.image &&  (
                  <Image src={urlFor(product.image).url()}  
                  alt={product.name} 
                  width={180} 
                  height={150}
                  className="w-30 h-30 ml-5 p-5"
                   ></Image>
                )} 
                </div>
                <div className="p-2 text-center">
                  <h2 className="text-[#1A0B5B] text-md font-bold text-[Lato]">{product.name}</h2>
                  <p className="text-[#1A0B5B] text-[JosefinSans] font-sm">{product.price}<del className="text-gray-400">$1400</del></p>
                  <button className="w-25 h-8 px-2 font-sm text-[JosefinSans] bg-[#1A0B5B] text-white hover:bg-blue-950 rounded-sm" onClick={(e) => handleAddToCart (e , product)}>Add To Cart</button>
                </div>
                </Link>
              
            </div>
            ))}
            </div>
            <div className="w-full h-[500] flex justify-center mt-5 gap-4">
                <div className="w-[200] h-[150] bg-pink-100 border border-gray-300 p-10 hover:scale-105 transition-transform duration-200">
                    <div>
                      <h1 className="text-[26px] font-bold font-[Josefin Sans] text-[#1A0B5B]">23% off in all Products</h1>
                      <span className="text-md text-pink-600 underline underline-offset-3"><Link href="/Products">Shop Now</Link></span>
                    </div>
                   <div>
                      <Image
                       src="/images/voucher1.png"
                       alt="voucher"
                       height={100}
                       width={100}
                       className="ml-40 w-[60] h-[60] "
                       ></Image>
                    </div>
                </div>
                <div className="w-[400] h-[200] bg-[#F2F0FF] border border-gray-300 p-10 hover:scale-105 transition-transform duration-200">
                    <div>
                        <h1 className="text-[26px] font-bold font-[JosefinSans] text-[#1A0B5B]">23% off in all Products</h1>
                        <span className="text-md text-pink-600 underline underline-offset-3"><Link href="/Products">Shop Now</Link></span>
                    </div>
                    <div>
                     <Image
                     src="/images/voucher2.png"
                     alt="voucher"
                     height={100}
                     width={100}
                     className="ml-40 mt-10 w-[60] h-[60] "
                     ></Image>
                    </div>
                </div>
            <div className="w-[100] h-[60]">
                {IsProduct.map ((IsProduct) => (
                    <Link key={IsProduct._id} href={`/product/${IsProduct.slug.current}`}>
                    <div className=" flex  mb-5 mt-2 border border-gray-400 rounded-lg hover:scale-105 transition-transform duration-200">
                        <div className="bg-[#F2F0FF] rounded-s-lg">
                        {IsProduct.image && (
                        <Image
                        src={urlFor(IsProduct.image).url()}
                        alt={IsProduct.name}
                        height={30}
                        width={40}
                        className=" w-41 h-16 mt-2 p-2"
                        ></Image>
                        )}
                        </div>
                        <div className="text-xs text-[#1A0B5B] px-2 pt-2">
                           <span>{IsProduct.name}</span> <br />
                           <span className="text-center">{IsProduct.price}</span> <br />
                           <button className="w-18 h-5 px-2 bg-[#1A0B5B] text-white" onClick={(e) => handleAddToCart (e , IsProduct)}> Add to Cart</button>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
         </div>
        </div>
    )
}