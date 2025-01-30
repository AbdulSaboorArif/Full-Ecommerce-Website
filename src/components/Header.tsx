'use client';
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, ShoppingCart, User, Menu, X, Router } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [addtocart, setaddToCart] = useState<any[]>([]);
  const router = useRouter();

  let addtoCart = (product: ProductTypeGloble) => {
    setaddToCart((prevCart) => [...prevCart, product]);
    setProductCount((prevCount) => prevCount + 1);
  };

  return (
    
    <header className="w-full max-w-[1440px] h-auto sm:h-[100px] mx-auto borde-2 border-red-700">
      <div className="w-full max-w-[1286px] min-h-[41px] mx-auto my-4 md:my-[25px] flex flex-wrap justify-between items-center px-2 lg:px-[20px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/Image 2.jpg"
            alt="Furniro Logo"
            width={50}
            height={95}
            className="w-auto h-16 sm:h-24"
          />
          <span className="text-2xl sm:text-[34px] font-bold leading-8">
            Furniro
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Navigation */}
        <nav
          className={`${isMenuOpen ? "flex" : "hidden"} md:flex w-full md:w-auto order-3 md:order-none`}
        >
          <ul className="">
            <li className="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-auto mt-4 md:mt-0">
              <Link
                href="/"
                className="text-base block py-2 md:py-0 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="./Shop"
                className="text-base block py-2 md:py-0 hover:text-primary transition-colors"
              >
                Shop
              </Link>
              <Link
                href="./Blog"
                className="text-base block py-2 md:py-0 hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                href="./Contact"
                className="text-base block py-2 md:py-0 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* User Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-full">
            <User className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-full">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-full">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
       
          <button 
           onClick={() => router.push("/Cart")}
          className="p-1 sm:p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart 
        
              className="w-5 h-5 sm:w-6 sm:h-6" />
            {addtocart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {addtocart.length}
              </span>
            )}
          </button>
        
        </div>
      </div>
    </header>
  );
}
