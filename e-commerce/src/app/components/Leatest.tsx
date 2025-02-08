"use client";
import { CiHeart } from "react-icons/ci";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { ProductSix } from "@/sanity/lib/queries";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToCart } from "../actions/actions";
import Link from "next/link";

export default function Leatest() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(ProductSix);
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
    <div className="w-full h-full flex justify-center flex-wrap mt-5 p-5">
      <h1 className="text-[40px] font-[Josefin Sans] ml-[20%] mr-[20%] mt-[5%] font-bold text-[#1A0B5B] text-center">
        Leatest Product
      </h1>
      <ul className="flex justify-center text-[#1A0B5B] text-lg gap-10 ml-[20%] mr-[20%] mt-[2%] ">
        <li className="hover:text-pink-600 hover:underline hover:hover:underline-offset-2">
          New Arrival
        </li>
        <li className="hover:text-pink-600 hover:underline hover:hover:underline-offset-2">
          Best Seller
        </li>
        <li className="hover:text-pink-600 hover:underline hover:hover:underline-offset-2">
          Featured
        </li>
        <li className="hover:text-pink-600 hover:underline hover:hover:underline-offset-2">
          Special Offer
        </li>
      </ul>

      {product.map((product) => (
        <div
          key={product._id}
          className="w-[330px] h-[300px] relative group overflow-hidden m-[8px] p-[5px] gap-5 hover:scale-105 transition-transform duration-200">
          <Link href={`/product/${product.slug.current}`}>
            <div className="bg-[#F2F0FF] items-center shadow-lg w-[300] h-[300] ">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={150}
                  height={100}
                  className="w-60 h-60 ml-10 p-10"
                ></Image>
              )}
            </div>
            <div className="p-2 flex justify-between font-[JosefinSans] text-center">
              <h2 className="text-[#1A0B5B] text-lg">{product.name}</h2>
              <p className="text-[#1A0B5B] text-lg">
                {product.price}
                <del className="text-pink-600">$1800</del>
              </p>
            </div>
            <div className="mr-60 absolute inset-2 bg-opacity-100 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="px-2 py-2 mt-2 ml-2 bg-[#1A0B5B] text-white text-sm font-medium hover:bg-[#1A0B5B] rounded-sm">
                Sale
              </button>
            </div>
          </Link>
          <div className="absolute inset-5 bg-opacity-100 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="mr-20 text-[#1A0B5B]">
                <CiHeart className="w-8 h-6 mb-1 text-[#1A0B5B]" />
                <MdOutlineLocalGroceryStore
                  className="w-8 h-6 mb-1 text-[#1A0B5B]"
                  onClick={(e) => handleAddToCart(e, product)}
                />
                <FaSearchPlus className="w-8 h-4 text-[#1A0B5B]" />
              </div>
            </div>
        </div>
      ))}
    </div>
  );
}