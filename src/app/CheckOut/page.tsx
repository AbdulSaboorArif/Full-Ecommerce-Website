"use client";

import { useState, useEffect } from "react";
import { getCartItems } from "../addtocart/action";
import Header from "@/components/Header";
import Footer from "@/components/Fotter";
import Features from "@/components/Feature";
import Image from "next/image";
import Link from "next/link";
function CheckOut() {
  const [cartitems, setCartitems] = useState<ProductTypeGloble[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [isloading, setIsloading] = useState(true);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    paymentMethod: "",
    cartNumber: "",
  });
  const [formError, setformError] = useState({
    firstName: false,
    lastName: false,
    address: false,
    phone: false,
    email: false,
    city: false,
    state: false,
    zip: false,
    country: false,
    paymentMethod: false,
    cartNumber: false,
  });

  useEffect(() => {
    const fetchCart = getCartItems();
    setCartitems(fetchCart);
    // fetchCart.then((data) => {
    //   setCartitems(data);
    //   setIsloading(false)
    // });

    const appliedDiscount = localStorage.getItem("applyDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
    setIsloading(false);
  }, []);

  const SubTotal = cartitems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.id]: e.target.value,
    });
  };
  if (isloading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">
          Locading....
        </div>
      </div>
    );
  }
  const ValidateForm = () => {
    const error = {
      firstName: !formValue.firstName,
      lastName: !formValue.lastName,
      address: !formValue.address,
      phone: !formValue.phone,
      email: !formValue.email,
      city: !formValue.city,
      state: !formValue.state,
      zip: !formValue.zip,
      country: !formValue.country,
      paymentMethod: !formValue.paymentMethod,
      cartNumber: !formValue.cartNumber,
    };
    setformError(error);
    return Object.values(error).every((error) => !error);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ValidateForm()) {
      localStorage.removeItem("applyDiscount");
      console.log("Form Submitted", formValue);
    }
  };

  return (
    <>
      <Header />
       {/* Hero Section with background image */}
       <div className="w-full max-w-[1440px] mx-auto bg-[url('/BackgroundImage.jpg')] py-12 md:py-16 bg-cover bg-center bg-no-repeat opacity-90">
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-bold leading-8 text-black">CheckOut</h1>
          <div className="text-lg">
            <Link
              href="/"
              className="hover:text-amber-800 transition-colors font-semibold"
            >
              Home
            </Link>
            <span> {">"} </span>
            <span className="text-black">CheckOut</span>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold mb-8">Billing details</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Billing Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      id="firstName"
                      value={formValue.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${formError.firstName ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="lastName"
                      value={formValue.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${formError.lastName ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                </div>

                <div>
                  <select
                    id="country"
                    value={formValue.country}
                    onChange={(e) =>
                      setFormValue({ ...formValue, country: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-lg border ${formError.country ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Select Country/Region</option>
                    <option value="LK">Sri Lanka</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Street address"
                    id="address"
                    value={formValue.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${formError.address ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Town / City"
                    id="city"
                    value={formValue.city}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${formError.city ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="State / Province"
                    id="state"
                    value={formValue.state}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${formError.state ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    id="phone"
                    value={formValue.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${formError.phone ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={formValue.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${formError.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
              </form>
            </div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <div className="mb-6">
          <div className="flex justify-between border-b pb-4 mb-4">
            <h2 className="text-lg font-bold">Product</h2>
            <h2 className="text-lg font-bold">Subtotal</h2>
          </div>
          {cartitems.length > 0 ? (
            cartitems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageurl}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">
                  Rs. {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items in cart</p>
          )}
        </div>

        <div className="text-sm space-y-2 border-t pt-4">
          <p className="flex justify-between">
            <span className="font-medium">Subtotal:</span>
            <span>Rs. {SubTotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">Discount:</span>
            <span>Rs. {discount.toFixed(2)}</span>
          </p>
          <p className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>Rs. {(SubTotal - discount).toFixed(2)}</span>
          </p>
        </div>

        <div className="mt-6">
          <div className="space-y-2">
            <div>
              <input
                type="radio"
                id="bank-transfer"
                name="payment"
                className="mr-2"
                defaultChecked
              />
              <label htmlFor="bank-transfer" className="text-sm font-medium">
                Direct Bank Transfer
              </label>
              <p className="text-xs text-gray-500 ml-6">
                Make your payment directly into our bank account. Your order
                will not be shipped until the funds have cleared in our account.
              </p>
            </div>
            <div>
              <input
                type="radio"
                id="cash-on-delivery"
                name="payment"
                className="mr-2"
              />
              <label htmlFor="cash-on-delivery" className="text-sm font-medium">
                Cash on Delivery
              </label>
            </div>
          </div>

          <button
            type="button"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
            
          </div>
        </div>
      </div>

      <Features />
      <Footer />
    </>
  );
}

export default CheckOut;
