import Footer from "@/components/Fotter";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { Clock, HeadphonesIcon, MapPin, Phone, Shield, Trophy, Truck } from 'lucide-react';
export default function Contact() {
  return (
    <>
      <Header />
      <div className="w-full max-w-[1440px] ">
        {/* Contact Section With Background Image*/}
        <div className="w-full  max-w-[1440px] h-auto sm:h-[316] mx-auto bg-[url('/BackgroundImage.jpg')] py-12 md:py-16  bg-cover bg-center bg-no-repeat opacity-90">
          {/* Center Logo */}
          <div className="text-center ">
            <div className="flex justify-center ">
              <Image
                src="/Image 2.jpg"
                alt="Furniro Logo"
                width={50}
                height={95}
                className="w-auto h-77 sm:h-24"
              />
            </div>
            <h1 className="text-5xl font-bold leading-8 text-black">Contact</h1>

            <div className="text-lg pt-4">
              <Link
                href="/"
                className="hover:text-amber-800 transition-colors font-semibold"
              >
                Home
              </Link>
              <span> {">"} </span>
              <span className="text-black">Contact</span>
            </div>
          </div>
        </div>
        {/* Top Heading*/}
        <div className="text-center py-20 space-y-5">
          <h1 className="text-4xl font-bold text-[#000000] leading-tight">Get In Touch With Us</h1>
          <p className="text-base font-normal leading-6 text-[#9F9F9F] flex justify-center ">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. <br />Our Staff 
            Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-[1058px] mx-auto pb-20">
          {/* Left Section - Contact Information */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-amber-100">
                <MapPin className="w-5 h-5 text-amber-800" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Address</h3>
                <p className="text-[#9F9F9F]">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-amber-100">
                <Phone className="w-5 h-5 text-amber-800" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-[#9F9F9F]">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-amber-100">
                <Clock className="w-5 h-5 text-amber-800" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Working Time</h3>
                <p className="text-[#9F9F9F]">
                  Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Abc"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Abc@def.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  placeholder="This is an optional"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Hi! I'd like to ask about"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-3 px-6 rounded-lg hover:bg-amber-900 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
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
        </div>
 
      <Footer />
    </>
  );
}
