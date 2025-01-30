import Image from "next/image";



export default function Hero() {
  return (
    <>
    <div className="w-full max-w-[1440px] h-[500px] sm:h-[716px] relative mx-auto ">
      <div
        className="absolute inset-0 bg-[url('/Image.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div className="relative h-full flex items-center px-4">
        <div className="w-full max-w-[643px] p-6 sm:p-8 lg:p-16 bg-[#FFF3E3]/90 backdrop-blur-sm ml-auto sm:mr-16 ">
          <span className="text-lg font-medium">New Arrival</span>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#B88E2F] mt-4">
            Discover Our
            <br />
            New Collection
          </h1>
          
          <p className="mt-4 text-base text-gray-600 max-w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#B88E2F] text-white hover:bg-[#A67E2A] transition-colors">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
    {/* Broswe The Range */}
    <div className="w-full max-w-[1183px] py-8 sm:py-12 lg:py-16 mx-auto px-4">
      <div className="w-full max-w-[559px] mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-[32px] font-bold leading-tight text-[#333333]">
          Browse The Range
        </h2>
        <p className="text-base sm:text-[20px] leading-relaxed mt-2 sm:mt-[7px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[
          { title: "Dining", image: "/first-image.png" },
          { title: "Living", image: "/image-19.png" },
          { title: "Bedroom", image: "/third-image.png" },
        ].map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <div className="w-full aspect-[381/480] rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={`${item.title} room furniture showcase`}
                width={381}
                height={480}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-medium mt-4">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>



  </>
  );
}
