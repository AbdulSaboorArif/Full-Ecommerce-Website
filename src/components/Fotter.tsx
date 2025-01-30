import Link from "next/link";


export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto px-8 py-12 md:py-16 border-2 border-green-500">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="space-y-12">
        <h2 className="text-2xl font-bold leading-9">Funiro.</h2>
        <address className="not-italic text-base font-normal leading-relaxed text-[#9F9F9F]">
          400 University Drive Suite 200 Coral
          <br />
          Gables,
          <br />
          FL 33134 USA
        </address>
      </div>
      {/* Links */}
      <div className="space-y-6">
          <h3 className="text-base font-medium leading-6 text-[#9F9F9F]">Links</h3>
          <nav className="flex flex-col space-y-8">
              <Link href="/" className="text-base hover:text-[#B88E2F] transition-colors">Home</Link>
              <Link href="/Shop" className="text-base hover:text-[#B88E2F] transition-colors">Shop</Link>
              <Link href="/Blog" className="text-base hover:text-[#B88E2F] transition-colors">Blog</Link>
              <Link href="/Contact" className="text-base hover:text-[#B88E2F] transition-colors">Contact</Link>
          </nav>
      </div>
      {/* Help */}
      <div className="space-y-6">
          <h3 className="text-base font-medium leading-6 text-[#9F9F9F]">Help</h3>
          <nav className="flex flex-col space-y-8">
              <Link href="/" className="text-base hover:text-[#B88E2F] transition-colors">Payment Options</Link>
              <Link href="/" className="text-base hover:text-[#B88E2F] transition-colors">Returns</Link>
              <Link href="/" className="text-base hover:text-[#B88E2F] transition-colors">Privacy Policies</Link>
          </nav>
      </div>
      {/*  */}
      <div className="space-y-6">
          <h2 className="text-base font-medium leading-6 text-[#9F9F9F]">Newsletter</h2>
          <div className="relative">
              <input type="email" placeholder="Enter Your Email Address" 
              className=" pb-2 text-sm focus:outline-none focus:border-[#B88E2F] transition-colors"
              />
              <button 
              type="submit"
               className="absolute right-0 bottom-2 text-sm font-medium hover:text-[#B88E2F] transition-colors">
              SUBSCRIBE
              </button>
          </div>
      </div>
    </div>
    {/* CopyRight */}
    <div className="mt-12 pt-8 border-t border-gray-200">
      <p className="text-sm text-gray-600">2023 furino. All rights reserved</p>
    </div>
  </footer>
  );
}
