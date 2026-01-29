import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="relative w-full py-28 overflow-hidden bg-[url('/bgwhychooseus.png')] bg-contain bg-center mt-5">
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <Image
          src="/honeyspoon.svg"
          alt="Honey Spoon"
          width={180}
          height={300}
          priority
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#0a2c1a] mb-10">
          আমাদের থেকে কেন মধুময় বাদাম কিনবেন?
        </h2>

        <ul className="space-y-5 text-lg md:text-xl lg:text-4xl text-gray-700">
          <li className="flex items-center justify-center gap-3">
            ফ্রি হোম ডেলিভারি সুবিধা।
          </li>

          <li className="flex items-center justify-center gap-3">
            ১০০% অরিজিনাল মধু ক্যাশব্যাক গ্যারান্টি
          </li>

          <li className="flex items-center justify-center gap-3">
            প্রোডাক্ট হাতে পেয়ে কোয়ালিটি যাচাই করে পেমেন্ট করার সুবিধা ।
          </li>

          <li className="flex items-center justify-center gap-3">
            আমরা সুন্নত তরিকায় ব্যবসা করি
          </li>

          <li className="flex items-center justify-center gap-3">
            ফ্রি হেলথ টিপস ।
          </li>
        </ul>
      </div>
      <div className="absolute right-10 bottom-1/2 -translate-y-1/2 bee-float">
        <Image src="/bee3.svg" alt="Bee" width={120} height={120} priority />
      </div>
    </section>
  );
};

export default WhyChooseUs;