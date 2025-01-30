'use client'

import Image from "next/image"
import { useState } from "react"
import { Star } from 'lucide-react'
import { addToCart } from "@/app/addtocart/action"
import Swal from "sweetalert2"


export default function ProductInfo({ data }: { data: ProductTypeGloble}) {
  
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("Purple")
  const [selectedSize, setSelectedSize] = useState("L")

  const handleIncrement = () => {
    setQuantity(prev => prev + 1)
  }

  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1))
  }
  const handleAddToCart = (e : React.MouseEvent, product:ProductTypeGloble)=>{
    e.preventDefault()
    Swal.fire({
      title: "Added To Cart",
      text: `${product.title} added to your cart`,
      icon: "success",
   confirmButtonText: "Ok",
      timer: 15000,
      showConfirmButton: true,
    })
    addToCart(product)

  }
  return (
    <section className="py-12 bg-[#FAF4F4]">
      <div className="container px-4 mx-auto">
    

        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Image Section */}
          <div className="lg:w-3/5 w-full lg:pr-10">
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <button key={i} className="w-24 h-24 border rounded-lg overflow-hidden">
                    <Image
                      src={data.imageurl || "/placeholder.jpg"}
                      alt={`${data.title} thumbnail ${i + 1}`}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full hover:opacity-75 transition-opacity"
                    />
                  </button>
                ))}
              </div>
              {/* Main Image */}
              <div className="flex-1 relative aspect-square">
                <Image
                  src={data.imageurl || "/placeholder.jpg"}
                  alt={data.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-2/5 w-full lg:pl-10 mt-6 lg:mt-0">
            <h1 className="text-4xl font-medium mb-4 text-gray-900">
              {data.title}
            </h1>
            
            {/* Rating */}
            <div className="flex mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-current"
                  />
                ))}
                <span className="ml-2 text-gray-600">(5 Customer Review)</span>
              </div>
            </div>

            {/* Price */}
            <span className="title-font font-medium text-2xl text-gray-900 block mb-6">
              Rs. {data.price.toLocaleString()}
            </span>

            <p className="leading-relaxed mb-8 text-gray-700">
              {data.description}
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-base font-medium mb-3">Size</h3>
              <div className="flex gap-4">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-colors
                      ${selectedSize === size 
                        ? 'border-amber-400 bg-amber-50' 
                        : 'border-gray-300 hover:border-amber-400'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="text-base font-medium mb-3">Color</h3>
              <div className="flex gap-4">
                {[
                  { name: "Purple", class: "bg-purple-600" },
                  { name: "Black", class: "bg-black" },
                  { name: "Gold", class: "bg-amber-600" },
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full ${color.class} transition-all
                      ${selectedColor === color.name 
                        ? 'ring-2 ring-offset-2 ring-amber-400' 
                        : 'hover:ring-2 ring-offset-2 ring-gray-400'
                      }`}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity and Buttons */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-lg bg-white">
                <button 
                  onClick={handleDecrement}
                  className="px-4 py-2 text-xl border-r hover:bg-gray-50 transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-16 text-center py-2 bg-transparent"
                  value={quantity}
                  min="1"
                  readOnly
                />
                <button 
                  onClick={handleIncrement}
                  className="px-4 py-2 text-xl border-l hover:bg-gray-50 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                 onClick={(e) => handleAddToCart(e, data)}
              className="flex-1 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
                Add To Cart
              </button>
              <button className="flex-1 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
                + Compare
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

