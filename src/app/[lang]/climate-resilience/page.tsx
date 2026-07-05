import React from "react";
import Image from "next/image";
import { Leaf, Sun, CloudRain, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Climate Resilience | ABSIIDP",
  description: "Integrating green, sustainable practices into urban planning across Abia State.",
};

export default function ClimateResiliencePage() {
  const strategies = [
    {
      title: "Flood Mitigation & Drainage",
      description: "Construction of deep-channel drainage systems capable of handling extreme weather events, significantly reducing urban flooding.",
      icon: <CloudRain size={32} className="text-blue-500" />
    },
    {
      title: "Green Infrastructure",
      description: "Extensive tree planting initiatives and development of urban green spaces to improve air quality and reduce the urban heat island effect.",
      icon: <Leaf size={32} className="text-green-500" />
    },
    {
      title: "Renewable Energy",
      description: "Installation of solar-powered street lighting across newly rehabilitated roads to reduce carbon footprint and ensure continuous safety.",
      icon: <Sun size={32} className="text-yellow-500" />
    },
    {
      title: "Sustainable Urban Planning",
      description: "Enforcing building codes and land-use policies that prioritize environmental sustainability and long-term climate adaptability.",
      icon: <ShieldCheck size={32} className="text-purple-500" />
    }
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col font-sans">

      {/* Hero Section */}
      <section className="relative w-full  h-[50vh] md:h-[60vh] bg-gray-900 flex items-center justify-center">
        <Image
          src="/aba-city.jpeg"
          alt="Climate Resilience"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 to-transparent" />

        <div className="relative z-10 text-center max-w-4xl px-4 mt-16">
          {/* <div className="inline-flex items-center justify-center p-3 bg-white/20 backdrop-blur-md rounded-full mb-6">
            <Leaf size={32} className="text-green-400" />
          </div> */}
          <h1 className="text-4xl md:text-5xl font-semibold font-heading text-white mb-6 tracking-tight leading-tight">
            Climate Resilience
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Building a sustainable future by integrating robust climate adaptation and mitigation strategies into every layer of Abia State's infrastructure.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            {/* <h2 className="text-sm font-semibold tracking-tight text-green-600 uppercase mb-4">
              Our Commitment
            </h2> */}
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight font-heading text-gray-900 mb-6 leading-snug">
              Future-Proofing Our Cities Against Climate Change
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Climate change poses a significant threat to infrastructure longevity and public safety. ABSIIDP's approach is not just about building roads; it is about ensuring those roads, and the communities around them, can withstand the environmental challenges of the next century.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are moving beyond traditional engineering by embedding ecological considerations into our core designs. This holistic model guarantees that economic development does not come at the expense of our environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strategies.map((strategy, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="mb-4">
                  {strategy.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{strategy.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
