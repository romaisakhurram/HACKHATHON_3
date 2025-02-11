"use client";
import { Product } from "@/types/product";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import { urlFor } from "@/sanity/lib/image";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      text: "You would not be able to recover this item!",
      icon: "warning",
      title: "Are you Sure?",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
    }
  };

  const calculateProductTotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      text: "Proceed to checkout!",
      icon: "question",
      title: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Proceed!",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been successfully proceed.", "success");
        setCartItems([]);
      }
    });
  };

  const handleUpdateCart = () => {
    setCartItems(getCartItems());
    Swal.fire("Updated!", "Your cart has been updated.", "success");
  };

  return (
    <>
      <TopHeader />
      <Header />
      <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10">
        <h1 className="text-[30px] text-[#101750] font-[JosefinSans] font-bold">Shopping Cart</h1>
        <ul className="flex gap-2">
          <li>Home_</li>
          <li>Pages_</li>
          <li className="text-pink-600">ShoppingCart</li>
        </ul>
      </div>
      <div className="min-h-screen py-10 px-6">
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <table className="w-full text-left font-bold border-collapse">
              <thead>
                <tr>
                  <th className="border-b-2 py-4">Product</th>
                  <th className="border-b-2 py-4">Price</th>
                  <th className="border-b-2 py-4">Quantity</th>
                  <th className="border-b-2 py-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length === 0 ? (
                  <tr>
                    <td className="py-4 text-center" colSpan={4}>
                      Your cart is empty
                    </td>
                  </tr>
                ) : (
                  cartItems.map((item) => (
                    <tr key={item._id}>
                      <td className="py-4">
                        <div className="flex items-center gap-4">
                          {item.image && (
                            <Image
                              src={urlFor(item.image).url()}
                              alt={item.name}
                              width={100}
                              height={100}
                              className="w-16 h-16 rounded-md object-cover"
                            />
                          )}
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray-500">{item._type}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">{item.price}</td>
                      <td>
                        <button
                          onClick={() => handleIncrement(item._id)}
                          className="w-5 border border-gray-400 rounded-md text-center"
                        >
                          +
                        </button>{" "}
                        &nbsp;
                        {item.stockLevel} &nbsp;
                        <button
                          onClick={() => handleDecrement(item._id)}
                          className="w-5 border border-gray-400 rounded-md text-center"
                        >
                          -
                        </button>
                      </td>
                      <td className="py-5">{calculateProductTotal(item.price, item.stockLevel).toFixed(2)}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleUpdateCart}
                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-500"
              >
                Update Cart
              </button>
              <button
                onClick={() => cartItems.forEach((item) => handleRemove(item._id))}
                className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-500"
              >
                Clear Cart
              </button>
            </div>
            </div>

          {/* Cart Totals */}
          <div className="p-6">
            <h2 className="text-lg text-[#101750] font-bold mb-4">Cart Totals</h2>
            <div className="border-b border bg-[#F2F0FF] rounded-md border-gray-400 p-10">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Subtotal:</span>
                <span className="font-semibold">${calculatedTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total:</span>
                <span className="font-semibold">${calculatedTotal().toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Shipping & taxes calculated at checkout
              </p>
              <button
                onClick={handleProceed}
                className="bg-green-500 text-white w-full py-2 rounded-md mt-4 hover:bg-green-600"
              >
                Proceed to Checkout
              </button>
            </div>
        
        {/* Calculator Section */}
        <div className="mt-6">
          <h2 className="text-lg text-[#101750] font-bold mb-4">Calculate Shopping</h2>
          <form className="space-y-4 bg-[#F2F0FF] rounded-md p-10 border border-gray-400">
            <input
              type="text"
              placeholder="Bangladesh"
              className="w-full border border-gray-400 rounded-md px-4 py-2"
            />

            <input
              type="text"
              placeholder="Mirpur Dhaka - 1000"
              className="w-full border border-gray-400 rounded-md px-4 py-2"
            />

            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border border-gray-400 rounded-md px-4 py-2"
            />

            <button
              type="submit"
              className="bg-pink-600 text-white w-full py-2 rounded-md hover:bg-pink-500"
            >
              <Link href="/Pages">Calculate Shipping</Link>
            </button>
          </form>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}