"use client";
import { addToCart } from "@/app/actions/actions";
import Footer from "@/app/components/Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/product";
import { groq } from "next-sanity";
import Image from "next/image";
import TopHeader from "@/app/components/TopHeader";
import Header from "@/app/components/Header";
import { CiHeart, CiTwitter, CiInstagram, CiFacebook } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

async function fetchProduct(slug: string): Promise<Product | null> {
  const product = await client.fetch(
    groq`*[_type == "product" || slug.current == $slug][0]{
      _id,
      name,
      _type,
      price,
      description,
      image
    }`,
    { slug }
  );
  return product || null;
}

export default function ProductPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getProduct() {
      if (slug) {
        const fetchedProduct = await fetchProduct(slug);
        setProduct(fetchedProduct);
        setIsLoading(false);
      }
    }
    getProduct();
  }, [slug]);

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <TopHeader />
      <Header />
      <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10">
        <h1 className="text-[30px] font-serif font-bold">Product Details</h1>
        <ul className="flex gap-2">
          <li>Home_</li>
          <li>Pages_</li>
          <li className="text-pink-600">Product Details</li>
        </ul>
      </div>
      <div className="w-full h-[800]">
        <div className="flex justify-center items-center border border-white shadow-lg w-[60%] h-[300px] p-3 mt-10 ml-[20%] gap-5">
          <div key={product._id}>
            <div>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={80}
                  height={50}
                  className="mb-2 mt-2 bg-pink-300"
                />
              )}
            </div>
            <div>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={80}
                  height={50}
                  className="mb-2 mt-2 bg-blue-300"
                />
              )}
            </div>
            <div>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={80}
                  height={50}
                  className="mb-2 mt-2 bg-purple-400"
                />
              )}
            </div>
          </div>
          <div>
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={120}
                height={250}
                className="mb-2 mt-2 h-60 bg-slate-400"
              />
            )}
          </div>
          <div className="pt-10 pb-10">
            <h2 className="text-2xl font-serif">{product.name}</h2>
            <p className="text-gray-400 text-md">
              {product.price}
              <del className="text-pink-600 text-md">$1800</del>
            </p>
            <p className="font-bold">Color</p>
            <p className="text-gray-400 text-md font-semibold mb-2">
              {product.description}
            </p>
            <button
              className="w-40 h-8 p-1 border border-gray-100 text-sm mb-2 flex justify-center"
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add to cart <CiHeart className="w-8 h-6" />
            </button>
            <p className="font-bold font-serif mb-2">{product._type}</p>
            <p className="font-bold font-serif mb-2">Tags:</p>
            <p className="font-bold font-serif flex gap-2">
              Share:
              <CiTwitter className="w-8 h-6 text-blue-950" />
              <CiInstagram className="w-8 h-6 text-pink-600" />
              <CiFacebook className="w-8 h-6 text-blue-950" />
            </p>
          </div>
        </div>

        <div className="w-full h-[430px] bg-[#F2F0FF] px-20 pt-10 mt-10">
          <div>
            <ul className="flex text-[#151875] ml-10 font-serif text-lg gap-20">
              <li className="hover:underline hover:underline-offset-1">
                Description
              </li>
              <li className="hover:underline hover:underline-offset-1">
                Additional Info
              </li>
              <li className="hover:underline hover:underline-offset-1">
                Reviews
              </li>
              <li className="hover:underline hover:underline-offset-1">
                Video
              </li>
            </ul>
          </div>
          <div className="m-10">
            <h1 className="text-md text-[#151875] font-serif text-2xl font-semibold mb-2">
              Varius tempor.
            </h1>
            <p className="text-gray-400 font-serif text-sm">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
              justo, tortor sed donec tempus. Imperdiet consequat, quis diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr.
            </p>
          </div>
          <div className="m-10">
            <h1 className="text-[#151875] font-serif font-semibold text-2xl mb-2">
              More details
            </h1>
            <p className="flex text-gray-400 text-sm font-serif">
              <FaArrowRight className="w-8 h-6" /> Aliquam dis vulputate
              vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis
              justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa
              viverr.
            </p>
            <p className="flex text-gray-400 text-sm font-serif">
              <FaArrowRight className="w-8 h-6" /> Aliquam dis vulputate
              vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis
              justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa
              viverr.
            </p>
            <p className="flex text-gray-400 text-sm font-serif">
              <FaArrowRight className="w-8 h-6" /> Aliquam dis vulputate
              vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis
              justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa
              viverr.
            </p>
            <p className="flex text-gray-400 text-sm font-serif">
              <FaArrowRight className="w-8 h-6" /> Aliquam dis vulputate
              vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis
              justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa
              viverr.
            </p>
          </div>
        </div>

        <h1 className="text-md text-[#151875] font-serif text-3xl font-semibold mt-20 ml-20">
          Latest Product
        </h1>
        <ul className="w-full h-[500] flex justify-center gap-10 mt-5">
          {[ {name : "Men Shirt" , price :"$500" , Image: "/images/cartpic1"},
              {name : "Women Shirt" , price :"$500" , Image: "/images/cartpic2"},
              {name : "Girls Shirt" , price :"$500" , Image: "/images/cartpic3"},
              {name : "Girls Shirt" , price :"$500" , Image: "/images/cartpic4"},
          ]
          .map((item) => (
          <li key={product._id} className="mt-1 w-[500] h-[200]">
            <div className="flex w-[300] h-[300]">
              {product.image && (
                <Image
                  src={item.Image}
                  alt={item.name}
                  width={180}
                  height={180}
                  className="w-60 h-80"
                />
              )}
            </div>
            <div>
            <h2 className="text-md font-serif font-bold">{item.name}</h2>
            <p className="text-md font-serif font-bold">{item.price}</p>
            </div>
          </li>
          ))}
        </ul>
        <div>
      
          <Image
            src="/images/Signatures.png"
            alt="Signature"
            width={500}
            height={500}
            className="m-10 ml-[35%]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}