'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import createClient from "@sanity/client";
import Link from "next/link";


const sanity = createClient({
  projectId: "5qp3kdvb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
});

interface ProductDataType {
  _id: number;
  title: string;
  price: number;
  description: string;
  imageurl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
}
const HomeProduct =  () => {
  const [products, setProducts] = useState<ProductDataType[]>([]);
  const [cart, setCart] = useState<ProductDataType[]>([]);
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
      const data = await sanity.fetch<ProductDataType[]>(quary);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const addToCart = (product: ProductDataType) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} added to your cart`);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold mx-auto py-8 text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-4">
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
                  onClick={() => addToCart(product)}
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
    </>
  );
}


export default HomeProduct;

