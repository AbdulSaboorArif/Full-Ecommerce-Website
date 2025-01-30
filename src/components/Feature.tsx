import { Trophy, Shield, Truck, HeadphonesIcon } from "lucide-react"

export default function Features(){
    return(
        <>
{/* Features Section */}
<div className="bg-[#FAF3EA] py-12 md:py-16 -mx-4 px-4">
<div className="max-w-[1230px] mx-auto">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
    <div className="flex flex-col items-center text-center">
      <Trophy className="w-6 h-6 md:w-8 md:h-8 mb-2" />
      <div>
        <h3 className="font-bold mb-1 text-sm md:text-base">
          High Quality
        </h3>
        <p className="text-xs md:text-sm text-[#898989]">
          crafted from top materials
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center text-center">
      <Shield className="w-6 h-6 md:w-8 md:h-8 mb-2" />
      <h3 className="font-bold mb-1 text-sm md:text-base">
        Warranty Protection
      </h3>
      <p className="text-xs md:text-sm text-[#898989]">Over 2 years</p>
    </div>
    <div className="flex flex-col items-center text-center">
      <Truck className="w-6 h-6 md:w-8 md:h-8 mb-2" />
      <h3 className="font-bold mb-1 text-sm md:text-base">
        Free Shipping
      </h3>
      <p className="text-xs md:text-sm text-[#898989]">
        Order over 150 $
      </p>
    </div>
    <div className="flex flex-col items-center text-center">
      <HeadphonesIcon className="w-6 h-6 md:w-8 md:h-8 mb-2" />
      <h3 className="font-bold mb-1 text-sm md:text-base">
        24 / 7 Support
      </h3>
      <p className="text-xs md:text-sm text-[#898989]">
        Dedicated support
      </p>
    </div>
  </div>
</div>
</div>
</>
    );
}


