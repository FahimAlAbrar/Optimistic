import React from "react";
import {
  FaUsers,
  FaHandshake,
  FaHeart,
  FaUniversalAccess,
  FaHandsHelping,
  FaLightbulb,
} from "react-icons/fa";

const values = [
  {
    icon: <FaUsers size={26} />,
    title: "Inclusion",
    description:
      "We believe everyone deserves equal opportunities and meaningful participation in society.",
  },
  {
    icon: <FaHandshake size={26} />,
    title: "Respect",
    description:
      "Every individual is treated with dignity, respect, and compassion regardless of ability.",
  },
  {
    icon: <FaLightbulb size={26} />,
    title: "Empowerment",
    description:
      "We encourage independence, confidence, and lifelong personal growth.",
  },
  {
    icon: <FaHeart size={26} />,
    title: "Compassion",
    description:
      "Our services are delivered with empathy, kindness, and genuine care for every individual.",
  },
  {
    icon: <FaUniversalAccess size={26} />,
    title: "Accessibility",
    description:
      "We promote accessible environments where everyone can participate equally.",
  },
  {
    icon: <FaHandsHelping size={26} />,
    title: "Collaboration",
    description:
      "Together with families, communities, and partners, we create lasting positive change.",
  },
];

const AboutCoreValues = () => {
  return (
    <section className="py-24 bg-[#fffaf7]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-[#f37421]" />
            <p className="uppercase tracking-[4px] text-[#f37421] font-bold text-xs">
              Our Core Values
            </p>
            <span className="w-8 h-0.5 bg-[#f37421]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#1e2d4d] mt-2 tracking-tight">
            The Principles That Guide Everything We Do
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
            Our values shape our decisions, inspire our actions, and strengthen
            our commitment to empowering individuals with disabilities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-orange-100/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-[#f37421] hover:border-t-[#fdcb11]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-[#f37421] group-hover:bg-[#f37421] group-hover:text-white transition-all duration-300 shadow-inner">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-[#1e2d4d] mt-6">
                {value.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-[#f37421] rounded-full mt-3 mb-4 group-hover:w-16 transition-all duration-300" />

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 bg-white rounded-3xl shadow-md p-8 sm:p-10 text-center border border-orange-100/60 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#f37421]" />
          <h3 className="text-xl font-bold text-[#1e2d4d] mb-3">
            Our Promise
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed italic text-sm sm:text-base">
            "We are committed to building a society where every individual is
            valued, empowered, and provided with equal opportunities to achieve
            their full potential."
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutCoreValues;