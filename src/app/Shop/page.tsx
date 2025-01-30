"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import createClient from "@sanity/client";
import Link from "next/link";
import Header from "@/components/Header";
import Swal from "sweetalert2";
import { addToCart } from "@/app/addtocart/action";
import Feature from "@/components/Feature";
import Fotter from "@/components/Fotter"

const sanity = createClient({
  projectId: "5qp3kdvb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
});

const Shop = () => {
  const [products, setProducts] = useState<ProductTypeGloble[]>([]);
  const [cart, setCart] = useState<ProductTypeGloble[]>([]);
  const [storeProduct, setstoreProduct] = useState()
  const fetchProducts = async () => {
    try {
      const quary = `*[_type == "product"]{
        _id,
           title,
           price,
          description,
          "imageurl": productImage.asset->url,
          productImage,
          tags
            }`;
      const data = await sanity.fetch<ProductTypeGloble[]>(quary);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const addToCart = (product: ProductTypeGloble) => {
    setCart((prevCart) => [...prevCart, product]);

    // alert(`${product.title} added to your cart`);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const handleAddToCart = (e : React.MouseEvent, product:ProductTypeGloble)=>{
    e.preventDefault()
    Swal.fire({
      title: "Added To Cart",
      text: `${product.title} added to your cart`,
      icon: "success",
      timer: 15000,
      showConfirmButton: false,
    })
    addToCart(product)

  }
  
  return (
    <>
      <Header />
      {/* Hero Section with background image */}
      <div className="w-full max-w-[1440px] mx-auto bg-[url('/BackgroundImage.jpg')] py-12 md:py-16 bg-cover bg-center bg-no-repeat opacity-90">
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-bold leading-8 text-black">Shop</h1>
          <div className="text-lg">
            <Link
              href="/"
              className="hover:text-amber-800 transition-colors font-semibold"
            >
              Home
            </Link>
            <span> {">"} </span>
            <span className="text-black">Shop</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mx-auto py-8 text-center pb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <Link key={product._id} href={`/Shop/${product._id}`}>
            <div className="flex flex-col group">
              <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
                <Image
                  src={product.imageurl || "/placeholder.jpg"}
                  alt={product.title}
                  width={285}
                  height={301}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 bg-[#F4F5F7] p-4">
                <h3 className="text-xl font-bold text-[#3A3A3A] leading-7 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-base text-[#898989] mt-1 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xl font-semibold text-[#3A3A3A]">
                    ${product.price}
                  </span>
                  <span className="text-base text-[#B0B0B0] line-through">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap">
                {product.tags.map((tag, index) => (
                  <span
                    key={` ${product._id}-${tag}-${index} `}
                    className="text-xs bg-[#F4F5F7] text-[#3A3A3A] px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/*Add To Cart */}
              <div>
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="bg-[#B88E2F] text-white px-4 py-2 rounded mt-4"
                >
                  Add To Cart
                </button>
              </div>

            </div>
          </Link>
        ))}
    </div>

      </div>
      <Feature/>
      <Fotter/>
    </>
  );
}

export default Shop;

// import Image from "next/image";
// import Link from "next/link";
// import Header from "@/components/Header";
// import Footer from "@/components/Fotter";
// import { Trophy, Shield, Truck, HeadphonesIcon } from 'lucide-react';
// // import { useState, useEffect } from "react";
// // import {add} from "../redux/CartSlice";
// // import { useDispatch } from "react-redux";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
// }

// const Shop = async () => {
//   // const [product, setProduct] = useState<Product[]>([]);
//   // const Dispatch = useDispatch();

//   // const getProducts = async () => {
//   //   const fetchData = await fetch("https://677ebc1f94bde1c1252d4a04.mockapi.io/Testing");
//   //   const data: Product[] = await fetchData.json();
//   //   setProduct(data);
//   // };

//   // const handleAdd = (product: Product) => {
//   //   Dispatch(add(product));
//   // };

//   // useEffect(() => {
//   //   getProducts();
//   // }, []);

//   const fetchData = await fetch("https://677ebc1f94bde1c1252d4a04.mockapi.io/Testing");
//   const data: Product[] = await fetchData.json();

//   return (
//     <main className="min-h-screen">
//       <Header />
//       {/* Hero Section with background image */}
//       <div className="w-full max-w-[1440px] mx-auto bg-[url('/BackgroundImage.jpg')] py-12 md:py-16 bg-cover bg-center bg-no-repeat opacity-90">
//         <div className="text-center space-y-5">
//           <h1 className="text-5xl font-bold leading-8 text-black">Shop</h1>
//           <div className="text-lg">
//             <Link
//               href="/"
//               className="hover:text-amber-800 transition-colors font-semibold"
//             >
//               Home
//             </Link>
//             <span> {">"} </span>
//             <span className="text-black">Shop</span>
//           </div>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {data.map((product) => (
//             <Link key={product.id} href={`/Shop/${product.id}`}>
//               <div className="flex flex-col group">
//                 <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
//                   <Image
//                     src={product.image}
//                     alt="datatitle"
//                     width={285}
//                     height={301}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="flex-1 bg-[#F4F5F7] p-4">
//                   <h3 className="text-xl font-bold text-[#3A3A3A] leading-7 line-clamp-1">
//                     {product.title}
//                   </h3>
//                   <p className="text-base text-[#898989] mt-1 line-clamp-2">
//                     {product.description}
//                   </p>
//                   <div className="flex items-center gap-3 mt-2">
//                     <span className="text-xl font-semibold text-[#3A3A3A]">
//                       ${product.price}
//                     </span>
//                     <span className="text-base text-[#B0B0B0] line-through">
//                       ${(product.price * 1.2).toFixed(2)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
// {/* Pagination */}
// <div className="flex justify-center gap-2 mt-8 mb-12">
//           <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded bg-[#B88E2F] text-white text-sm md:text-base">
//             1
//           </button>
//           <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded hover:bg-[#B88E2F] hover:text-white transition-colors text-sm md:text-base">
//             2
//           </button>
//           <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded hover:bg-[#B88E2F] hover:text-white transition-colors text-sm md:text-base">
//             3
//           </button>
//           <button className="px-3 md:px-4 h-8 md:h-10 flex items-center justify-center rounded hover:bg-[#B88E2F] hover:text-white transition-colors text-sm md:text-base">
//             Next
//           </button>
//         </div>
//       {/* Features Section */}
//       <div className="bg-[#FAF3EA] py-12 md:py-16 -mx-4 px-4">
//         <div className="max-w-[1230px] mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//             <div className="flex flex-col items-center text-center">
//               <Trophy className="w-6 h-6 md:w-8 md:h-8 mb-2" />
//               <div>
//                 <h3 className="font-bold mb-1 text-sm md:text-base">
//                   High Quality
//                 </h3>
//                 <p className="text-xs md:text-sm text-[#898989]">
//                   crafted from top materials
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <Shield className="w-6 h-6 md:w-8 md:h-8 mb-2" />
//               <h3 className="font-bold mb-1 text-sm md:text-base">
//                 Warranty Protection
//               </h3>
//               <p className="text-xs md:text-sm text-[#898989]">Over 2 years</p>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <Truck className="w-6 h-6 md:w-8 md:h-8 mb-2" />
//               <h3 className="font-bold mb-1 text-sm md:text-base">
//                 Free Shipping
//               </h3>
//               <p className="text-xs md:text-sm text-[#898989]">
//                 Order over 150 $
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <HeadphonesIcon className="w-6 h-6 md:w-8 md:h-8 mb-2" />
//               <h3 className="font-bold mb-1 text-sm md:text-base">
//                 24 / 7 Support
//               </h3>
//               <p className="text-xs md:text-sm text-[#898989]">
//                 Dedicated support
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// };

// export default Shop;
