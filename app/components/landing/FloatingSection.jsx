import Image from "next/image";
import React from "react";

const FloatingSection = () => {
  return (
    <>
      <section className="relative w-full py-20 overflow-hidden">
        {/* left floating image */}
        <div className="floating-left">
          <Image
            src="/floating1.svg"
            alt="Honey Left"
            width={180}
            height={260}
            priority
          />
        </div>

        {/* right floating imag */}
        <div className="floating-right">
          <Image
            src="/floating1.svg"
            alt="Honey Right"
            width={180}
            height={260}
            priority
          />
        </div>

        {/* center content*/}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold px-10 py-4 rounded-full shadow-gray-950 shadow-2xl lg:text-2xl">
            অর্ডার করতে এখানে ক্লিক করুন
          </button>

          <p className="mt-10 text-xl md:text-2xl lg:text-3xl font-semibold text-[#0a2c1a]">
            আর নয় দুশ্চিন্তা, আপনার জন্য মধুময় বাদামই যথেষ্ট। ১০০% কার্যকরী ও <br />
            পরীক্ষিত পণ্য!
          </p>
        </div>
      </section>

      <section className="w-full py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Responsive Video */}
          <div className="relative w-full overflow-hidden shadow-2xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/uFjU5zFJx3E?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fpreview.funnelliner.xyz&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1&forigin=https%3A%2F%2Fpreview.funnelliner.xyz%2Flanding-10&aoriginsup=1&vf=1"
              title="Product Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FloatingSection;