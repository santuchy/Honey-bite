import Image from "next/image";

export default function HotlineProducts() {
  const products = [
    { src: "/p1.png", alt: "Honey 1" },
    { src: "/p2.png", alt: "Honey 2" },
    { src: "/p3.png", alt: "Honey 3" },
    { src: "/p4.png", alt: "Honey 4" },
  ];

  return (
    <section className="bg-white py-10 w-full">
      <div className="mx-auto max-w-6xl px-4 w-full">
        {/* Hotline Banner */}
        <div className="relative overflow-hidden">
          <div className="relative ">
            <Image
              src="/bghotline.png"
              alt="Hotline background"
              width={1200}
              height={300}
              className="object-cover"
            />
          </div>

          {/* Text on top */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center lg:text-3xl">
            <p className="text-xl font-extrabold text-red-600 sm:text-3xl lg:text-4xl">
              যে কোন প্রয়োজনে কল করুন
            </p>
            <p className="mt-1 text-2xl font-extrabold text-red-600 sm:text-3xl lg:text-4xl">
              হটলাইন: 01600-324567
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <div key={idx} className="bg-[#f4f1ef] p-10">
              <div className="relative mx-auto h-[220px] w-full">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={250}
                  height={350}
                  className="mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
