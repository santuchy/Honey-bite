import React from "react";

const BenefitsSection = () => {
  const items = [
    {
      title: "হজমে সহায়তা",
      desc: "এতে যে শর্করা থাকে, তা সহজেই হজম হয়। কারণ এতে যে ভিটামিন থাকে, তা সরাসরি রক্তে প্রবেশ করে।",
    },
    {
      title: "শক্তি প্রদান",
      desc: "মধু ভালো শক্তি প্রদায়ী খাদ্য। তাপ ও শক্তির ভালো উৎস। মধু দেহে তাপ ও শক্তি জুগিয়ে শরীরকে সুস্থ রাখে।",
    },
    {
      title: "কোষ্ঠকাঠিন্য দূর করে",
      desc: "মধুতে রয়েছে ভিটামিন বি-কমপ্লেক্স। খাঁটি মধু ভোরবেলা পান করলে এটি ডায়রিয়া ও কোষ্ঠকাঠিন্য দূর করে।",
    },
    {
      title: "রক্তশূন্যতায়",
      desc: "মধু রক্তের হিমোগ্লোবিন গঠন সহায়তা করে। এতে থাকে প্রচুর লৌহ ও ম্যাগনেসিয়াম।",
    },
    {
      title: "যৌন দুর্বলতায়",
      desc: "পুরুষদের মধ্যে যাদের যৌন দুর্বলতা রয়েছে, তারা নিয়মিত মধু ও দুধ মিশিয়ে খেলে উপকার পাবেন।",
    },
    {
      title: "পাকস্থলীর সুস্থতায়",
      desc: "মধু পাকস্থলীর কাজকে জোরালো করে এবং গ্যাস্ট্রিক সমস্যা কমাতে সাহায্য করে।",
    },
    {
      title: "পানিশূন্যতায়",
      desc: "ডায়রিয়া হলে এক লিটার পানিতে ৫০ মিলিলিটার মধু মিশিয়ে খেলে পানিশূন্যতা রোধ করা যায়।",
    },
    {
      title: "দৃষ্টিশক্তি বাড়াতে",
      desc: "চোখের জন্য ভালো। গাজরের রসের সাথে মধু মিশিয়ে খেলে দৃষ্টিশক্তি বাড়ে।",
    },
  ];

  return (
    <section className="w-full py-24 bg-[url('/bgbenifit.png')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a2c1a] mb-16">
          মধুময় বাদাম খাওয়া ফলে যে সকল সমস্যার <br />সমাধান করবে
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff9e8] border-2 border-[#fff9e8] rounded-[15px] outline-2 outline-[#f9be20] outline-offset-[-11px] p-4 text-center shadow-sm hover:shadow-md transition h-50"
            >
              <h3 className="text-2xl font-bold text-[#0a2c1a] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-lg  leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;