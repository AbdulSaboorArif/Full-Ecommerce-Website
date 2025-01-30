import Image from "next/image"




export default function BeautifullRoom(){
    return(
        <>
        
          {/* Best Room  */}
          <section className="w-full max-w-[1440px] mx-auto bg-[#FCF8F3] overflow-hidden border-2 border-red-700">
        <div className="relative min-h-[670px] flex flex-col lg:flex-row">
        {/* Left Portion */}
          <div className="w-full lg:w-[40%] p-8  flex items-center z-10">
            <div className="w-full max-w-[422px] mx-auto lg:ml-[100px] ">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight lg:leading-[48px] text-[#3A3A3A]">50+ Beautiful rooms inspiration</h2>
              <p className="mt-4 text-base font-medium leading-6 text-[#616161]">  Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
              <button className="mt-8 px-8 py-3 bg-[#B88E2F] text-white text-base font-semibold hover:bg-[#A67E2A] transition-colors"> Explore More</button>
            </div>
          </div>
          {/* Right-Portion */}
          <div className="relative flex flex-col lg:flex-row mx-auto py-10 lg:py-8 gap-3">
            {/* First Image */}
            <Image src="/image-17.png" alt={"This is first image "}
            width={404}
            height={582}
            className="w-[404px] h-[582px] object-cover z-10"
            
            />
           <div className="absolute bottom-[76px] left-8 bg-white p-6 max-w-[230px] z-30">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[#616161] text-sm">01</span>
              <span className="h-[1px] w-8 bg-[#616161]"></span>
              <span className="text-[#616161] text-sm">Bed Room</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#3A3A3A]">Inner Peace</h3>
          </div>

            {/* Second Image */}
            <Image 
            src="/image-15.png" 
            alt={"This is second image "}
            width={372}
            height={486}
            className="w-[372px] h-[486px] object-cover z-10"
            />

          </div>
          <div className="absolute bottom-8 right-8 flex gap-2 z-30">
            <div className="w-[11px] h-[11px] rounded-full bg-[#B88E2F]"></div>
            <div className="w-[11px] h-[11px] rounded-full bg-white opacity-50"></div>
            <div className="w-[11px] h-[11px] rounded-full bg-white opacity-50"></div>
            <div className="w-[11px] h-[11px] rounded-full bg-white opacity-50"></div>
          </div>
        </div>
    </section> 

    </>
    )
}