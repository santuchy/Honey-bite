import Image from "next/image";
import React from "react";

const CustomerReview = () => {
  return (
    <>
      <section className="w-full py-15">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-center text-3xl lg:text-[44px] text-black font-bold mb-7">
            আমাদের কাস্টমার রিভিউ
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
            <Image
              src="/customer-review1.png"
              alt="Customer Review 1"
              width={560}
              height={230}
              className="object-contain"
            />

            <Image
              src="/customer-review2.png"
              alt="Customer Review 2"
              width={560}
              height={230}
              className="object-contain"
            />

            <Image
              src="/customer-review3.png"
              alt="Customer Review 3"
              width={560}
              height={230}
              className="object-contain"
            />

            <Image
              src="/customer-review1.png"
              alt="Customer Review 4"
              width={560}
              height={230}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerReview;