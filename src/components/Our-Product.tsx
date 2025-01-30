import Image from "next/image"
export default function OurProduct(){
    return(

  
  
          <section className="w-full max-w-[1236px] mx-auto px-4 py-10 md:py-20 ">
          <div className="w-full max-w-[269px] mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-4xl font-bold text-[#3A3A3A] leading-[48px]">
              Our Products
            </h2>
          </div>
    
          <div className="grid grid-cls-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {/* Product 1 */}
          
            <div className="flex flex-col group">
              <div className="reloative w-full aspect-[285/301] mb-6 overflow-hidden">
                <Image
                  src="/image-4.png"
                  alt="Syltherine"
                  width={285}
                  height={301}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 bg-[#F4F5F7] p-4">
                <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
                  Syltherine
                </h3>
                <p className="text-base text-[#898989] mt-1">
                  Stylish cafe chair
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xl font-semibold text-[#3A3A3A]">
                    Rp 2.500.000
                  </span>
                  <span className="text-base text-[#B0B0B0] line-through">
                    Rp 3.500.000
                  </span>
                </div>
              </div>
            </div>
     
            {/* Product 2 */}
            <div className="flex flex-col group">
              <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
                <img
                  src="/image-4.png"
                  alt="Lolito"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#E97171]">
                  -50%
                </div>
              </div>
              <div className="flex-1 bg-[#F4F5F7] p-4">
                <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
                  Lolito
                </h3>
                <p className="text-base text-[#898989] mt-1">Luxury big sofa</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xl font-semibold text-[#3A3A3A]">
                    Rp 7.000.000
                  </span>
                  <span className="text-base text-[#B0B0B0] line-through">
                    Rp 14.000.000
                  </span>
                </div>
              </div>
            </div>
    
            {/* Product 3 */}
            <div className="flex flex-col group">
              <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
                <img
                  src="/image-5.png"
                  alt="Respira"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#2EC1AC]">
                  New
                </div>
              </div>
              <div className="flex-1 bg-[#F4F5F7] p-4">
                <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
                  Respira
                </h3>
                <p className="text-base text-[#898989] mt-1">
                  Outdoor bar table and stool
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xl font-semibold text-[#3A3A3A]">
                    Rp 500.000
                  </span>
                </div>
              </div>
            </div>
    
            {/* Product 4 */}
            <div className="flex flex-col group">
              <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
                <img
                  src="/image-6.jpg"
                  alt="Grifo"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 bg-[#F4F5F7] p-4">
                <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
                  Grifo
                </h3>
                <p className="text-base text-[#898989] mt-1">Night lamp</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xl font-semibold text-[#3A3A3A]">
                    Rp 1.500.000
                  </span>
                </div>
              </div>
            </div>
    
            {/* Product 5 */}
            <div className="flex flex-col group">
              <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
                <img
                  src="/image-7.png"
                  alt="Muggo"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#2EC1AC]">
                  New
                </div>
              </div>
              <div className="flex-1 bg-[#F4F5F7] p-4">
                <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
                  Muggo
                </h3>
                <p className="text-base text-[#898989] mt-1">Small mug</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xl font-semibold text-[#3A3A3A]">
                    Rp 150.000
                  </span>
                </div>
              </div>
            </div>
    
            {/* Product 6 */}
            <div className="flex flex-col group">
              <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
                <img
                  src="/image-8.png"
                  alt="Pingky"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#E97171]">
                  -50%
                </div>
              </div>
              <div className="flex-1 bg-[#F4F5F7] p-4">
                <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
                  Pingky
                </h3>
                <p className="text-base text-[#898989] mt-1">Cute bed set</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xl font-semibold text-[#3A3A3A]">
                    Rp 7.000.000
                  </span>
                  <span className="text-base text-[#B0B0B0] line-through">
                    Rp 14.000.000
                  </span>
                </div>
              </div>
            </div>
    
            {/* Product 7 */}
            <div className="flex flex-col group">
              <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
                <img
                  src="/image-9.jpg"
                  alt="Potty"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#2EC1AC]">
                  New
                </div>
              </div>
              <div className="flex-1 bg-[#F4F5F7] p-4">
                <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
                  Potty
                </h3>
                <p className="text-base text-[#898989] mt-1">
                  Minimalist flower pot
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xl font-semibold text-[#3A3A3A]">
                    Rp 500.000
                  </span>
                </div>
              </div>
            </div>
    
            {/* Product 8 */}
            <div className="flex flex-col group">
              <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
                <img
                  src="/image-10.jpg"
                  alt="Syltherine"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 bg-[#F4F5F7] p-4">
                <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
                  Syltherine
                </h3>
                <p className="text-base text-[#898989] mt-1">
                  Stylish cafe chair
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xl font-semibold text-[#3A3A3A]">
                    Rp 2.500.000
                  </span>
                  <span className="text-base text-[#B0B0B0] line-through">
                    Rp 3.500.000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[245px] h-[48px] flex justify-center mx-auto my-9 border-2 border-[#B88E2F]">
            <button className="text-base font-semibold leading-6 text-[#B88E2F]">Show More</button>
          </div>
        </section>
              
  
          
    )
}