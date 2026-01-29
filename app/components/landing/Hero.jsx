import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/banner.png"
          alt="Honey banner background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:py-14 lg:py-16">
        {/* Logo */}
        <div className="flex items-center gap-3 ">
          <div className="relative sm:h-12 sm:w-44">
            <Image
              src="/logo.svg"
              alt="Honey Logo"
              width={240}
              height={78}
              className="object-contain "
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-8">
          <div className="max-w-2xl text-white">
            {/* Heading */}
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl lg:pt-5">
              <span className="block whitespace-nowrap">
                <span className="text-[#F5C400]">পুষ্টিগুণ বৃদ্ধি</span> মধুময় বাদাম
              </span>

              <span className="block whitespace-nowrap">
                সেবনে অসংখ্য রোগবালাই
              </span>

              <span className="block whitespace-nowrap">
                থেকে পরিত্রাণ পাওয়া যায়
              </span>
            </h1>

            {/* Price */}
            <div className="mt-7 space-y-3">
              <p className="text-lg font-semibold text-lime-200 line-through decoration-2 lg:text-3xl">
                পূর্বের মূল্য: ১০৫০ টাকা
              </p>

              <p className="text-3xl font-extrabold text-red-500 sm:text-4xl lg:text-5xl lg:pt-5">
                মূল্য: ১০০০ টাকা
              </p>
            </div>

            <div className="mt-8 lg:pt-5">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5C400] px-8 py-3 text-base font-bold text-black shadow-lg transition hover:brightness-95 active:scale-[0.99] lg:text-2xl "
              >
                <ShoppingCart className="h-10 w-10" />
                অর্ডার করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
