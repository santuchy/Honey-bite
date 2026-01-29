import Image from "next/image";
import React from "react";

const CTASection = () => {
  return (
    <section className="relative w-full pb-20 bg-white overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
        <Image
          src="/flower.svg"
          alt="Right Decoration"
          width={100}
          height={100}
          priority
        />
      </div>

      <div className="bee-animate z-10">
        <Image src="/bee2.svg" alt="Bee" width={138} height={133} priority />
      </div>

      <div className="relative z-20 text-center max-w-xl mx-auto px-4">
        <button className="bg-yellow-400 lg:text-2xl text-black font-semibold px-10 py-4 rounded-full transition duration-500 cursor-pointer hover:scale-105 hover:text-white shadow-[0_67px_80px_#1E140A61,0_43.43px_46.85px_#1E140A31,0_25.81px_25.48px_#1E140A0B,0_13.4px_13px_#1E140A09,0_5.46px_6.52px_#1E140A07,0_1.24px_3.15px_#1E140A04]">
          অর্ডার করতে এখানে ক্লিক করুন
        </button>

        <p className="mt-6 lg:text-5xl font-bold text-red-500">মূল্য- ১০০০ টাকা</p>

        <p className="mt-4 lg:text-2xl text-[#0a2c1a]">
          সারা দেশে ফ্রি হোম ডেলিভারি
        </p>
      </div>
    </section>
  );
};

export default CTASection;