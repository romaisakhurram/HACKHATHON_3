"use client"
import Image from "next/image"
import TopHeader from "../components/TopHeader"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { client } from "@/sanity/lib/client"
import { allProduct} from "@/sanity/lib/queries"
import { Product } from "@/types/product"
import { useState, useEffect } from "react"
import Swal from "sweetalert2"
import { addToCart } from "../actions/actions"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"

export default function Products () {
    
      const [product, setProduct] = useState<Product[]>([])
    
      useEffect(() => {
        async function fetchProduct() {
         const fetchedProduct :Product[] = await client.fetch(allProduct)
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
        <>
         <TopHeader/>
         <Header/>
           <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10">
               <h1 className="text-[30px] font-serif font-bold">Shop Grid Default</h1>
                <ul className="flex gap-2">
                  <li>Home_</li>
                  <li>Pages_</li>
                  <li className="text-pink-600">ShopGridDefault</li>
                </ul>
            </div>
           <div className="w-full h-full flex justify-center flex-wrap mt-15 p-5">
                <div className="flex justify-center p-5">
                    <div>
                       <h1 className="text-3xl font-bold font-serif">Ecommerce Accessories & Fashion Item</h1>
                        <p className="text-sm text-gray-400">About 9,620 results(0.62 seconds)</p>
                    </div>

                    <div className="flex justify-center gap-5">
                       <label htmlFor="number">Per Page:</label>
                       <input type="number" name="number" 
                       className="w-[5%] h-8 border border-gray-400" />

                       <label htmlFor="text">Sort By:</label>
                       <input type="text" name="number" placeholder="Best Watch"
                       className=" w-[10%] h-8 border border-gray-400 text-md" />

                       <label htmlFor="number">Views:</label>
                       <input type="number" name="number" 
                        className="w-[20%] h-8 border border-gray-400" />
                    </div>
                </div>
                
                {product.map ((product) => (
                   <div key={product._id} className="w-[250px] h-[300px] m-[30px] p-[10px] gap-5">
                     <Link href={`/product/${product.slug.current}`}>
                       <div className=" bg-[#F2F0FF] items-center shadow-lg border border-gray-300 w-[500] h-[600]">
                        {product.image && (
                         <Image src={urlFor(product.image).url()} 
                         alt={product.name} 
                         width={250} 
                         height={200} 
                         className="w-75 h-60 p-3"
                         ></Image>
                        )}
                       </div>
                        <div className="p-2 font-[JosefinSans] text-center">
                           <h2 className="font-bold text-[#1A0B5B]text-sm">{product.name}</h2>
                           <p className="text-gray-400 text-sm">{product.price}<del className="text-pink-600">1700</del></p>
                           <button className="w-30 h-8 bg-[#1A0B5B] hover:bg-blue-900 text-white px-2" onClick={(e) => handleAddToCart(e, product)}>Add to Cart</button> 
                        </div>
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
        <Footer/>
        </>  
    )
}
