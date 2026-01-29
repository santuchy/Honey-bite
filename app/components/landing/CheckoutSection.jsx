import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

const CheckoutSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-16">
          <span className="bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent lg:text-5xl">
            তাই আর দেরি না করে আজই অর্ডার করুন
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Billing details</h3>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="আপনার নাম লিখুন *"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="text"
                placeholder="আপনার মোবাইল নাম্বার লিখুন *"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <textarea
                rows={3}
                placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন *"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="mt-10 max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white">
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-4">Payment</h4>

                <label className="flex items-center gap-3 text-gray-800">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 accent-yellow-400 cursor-pointer"
                  />
                  ক্যাশ অন ডেলিভারি
                </label>
              </div>

              <div
                className="
      relative bg-yellow-400 text-white text-center py-3 font-medium
      after:content-['']
      after:absolute
      after:-top-3.75
      after:left-[20%]
      after:w-0 after:h-0
      after:border-l-15 after:border-l-transparent
      after:border-r-15 after:border-r-transparent
      after:border-b-15 after:border-b-[#facc15]
    "
              >
                Pay with cash on delivery.
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Your order</h3>

            <div className="border border-gray-300 rounded-xl p-6 space-y-7">
              <div className="flex justify-between font-semibold border-b border-gray-300 pb-4">
                <span>Product</span>
                <span>Subtotal</span>
              </div>

              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-orange-100 rounded-md flex items-center justify-center text-xs">
                    <Image
                      src="/product.svg"
                      alt="Product"
                      width={47}
                      height={47}
                    />
                  </div>
                  <span>Flower Of Story Men’s Perfume Set Boss</span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    defaultValue={1}
                    className="w-16 border border-gray-300 rounded text-center"
                  />
                  <span>৳ 1,690</span>
                </div>
              </div>

              <div className="flex justify-between border-t border-gray-300 pt-4">
                <span>Subtotal</span>
                <span>1,690.00</span>
              </div>

              <div className="border-t border-gray-300 pt-4 space-y-2 flex justify-between">
                <p className="font-medium">Shipping</p>
                <div>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="shipping" />
                    Inside Dhaka : ৳ 00.00
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="radio" name="shipping" />
                    Outside Dhaka : ৳ 00.00
                  </label>
                </div>
              </div>

              <div className="flex border-gray-300 justify-between font-semibold border-t pt-4 text-lg">
                <span>Total</span>
                <span>1,690.00</span>
              </div>
            </div>

            <button className="mt-8 w-full bg-yellow-400 hover:bg-yellow-500 transition text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 text-lg">
              <ShoppingCart size={25} /> Place Order BDT 1,690.00
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
