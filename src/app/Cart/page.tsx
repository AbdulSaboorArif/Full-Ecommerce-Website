"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import Swal from "sweetalert2";
// import type { ProductTypeGlobal } from "../ProductType/producttypes"
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../addtocart/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Features from "@/components/Feature";
import Footer from "@/components/Fotter";
import Header from "@/components/Header";


export const Cart = () => {
  const [cartItems, setCartItems] = useState<ProductTypeGloble[]>([]);
  const [isloading, setIsloading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const cart = getCartItems();
    setCartItems(cart);
    setIsloading(false); // Mark loading as complete
  }, []);

  const handleRemove = (productId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(productId);
        setCartItems(getCartItems());
        Swal.fire(
          "Deleted!",
          "Your item has been removed from the cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string, quantity: number) => {
    handleQuantityChange(id, quantity + 1);
  };

  const handleDecrement = (id: string, quantity: number) => {
    if (quantity > 1) {
      handleQuantityChange(id, quantity - 1);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your products before checkout",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success",
          "Your order has been placed successfully.",
          "success"
        ).then(() => {
          router.push("/CheckOut");
        });
      }
    });
  };
  if (isloading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <Header/>
     {/* Hero Section with background image */}
     <div className="w-full max-w-[1440px] mx-auto bg-[url('/BackgroundImage.jpg')] py-12 md:py-16 bg-cover bg-center bg-no-repeat opacity-90">
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-bold leading-8 text-black">Cart</h1>
          <div className="text-lg">
            <Link
              href="/"
              className="hover:text-amber-800 transition-colors font-semibold"
            >
              Home
            </Link>
            <span> {">"} </span>
            <span className="text-black">Cart</span>
          </div>
        </div>
      </div>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link
            href="/"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center border-b pb-4">
                <Image
                  src={item.imageurl || "/placeholder.svg"}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-lg mr-4" />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-lg font-bold mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecrement(item._id, item.quantity)}
                    className="bg-gray-200 p-2 rounded-l"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 bg-gray-100">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item._id, item.quantity)}
                    className="bg-gray-200 p-2 rounded-r"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-2xl font-bold">
              Total: ${calculateTotalPrice().toFixed(2)}
            </p>
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div><Features /><Footer /></>
  );
};

export default Cart;

