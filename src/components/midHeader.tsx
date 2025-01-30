import Link from "next/link";

export default function MidHeader(){
    return(
        <div className="w-full max-w-[1440px] mx-auto bg-[url('/BackgroundImage.jpg')] py-8 sm:py-12 md:py-16 bg-cover bg-center bg-no-repeat opacity-90">
        <div className="text-center space-y-3 sm:space-y-5 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
            Product Details
          </h1>
          <div className="text-base sm:text-lg flex items-center justify-center gap-2">
            <Link
              href="/"
              className="hover:text-amber-800 transition-colors font-semibold"
            >
              Home
            </Link>
            <span className="text-sm">{">"}</span>
            <Link
              href="/shop"
              className="hover:text-amber-800 transition-colors font-semibold"
            >
              Shop
            </Link>
            <span className="text-sm">{">"}</span>

          </div>
        </div>
      </div>
    )
}