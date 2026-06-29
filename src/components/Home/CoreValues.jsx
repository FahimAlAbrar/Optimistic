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
    icon: <FaUsers size={28} />,
    title: "Inclusion",
    description:
      "We believe everyone deserves equal opportunities and meaningful participation in society.",
  },
  {
    icon: <FaHandshake size={28} />,
    title: "Respect",
    description:
      "Every individual is treated with dignity, respect, and compassion regardless of ability.",
  },
  {
    icon: <FaLightbulb size={28} />,
    title: "Empowerment",
    description:
      "We encourage independence, confidence, and lifelong personal growth.",
  },
  {
    icon: <FaHeart size={28} />,
    title: "Compassion",
    description:
      "Our services are delivered with empathy, kindness, and genuine care for every individual.",
  },
  {
    icon: <FaUniversalAccess size={28} />,
    title: "Accessibility",
    description:
      "We promote accessible environments where everyone can participate equally.",
  },
  {
    icon: <FaHandsHelping size={28} />,
    title: "Collaboration",
    description:
      "Together with families, communities, and partners, we create lasting positive change.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#fff8f3]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#f37421] font-semibold text-sm">
            Our Core Values
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d3557] mt-4 leading-tight">
            The Principles That Guide Everything We Do
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-[#f37421] rounded-full mx-auto mt-5"></div>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
            Our values shape our decisions, inspire our actions, and strengthen
            our commitment to empowering individuals with disabilities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 lg:p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-[#f37421] hover:border-[#fdcb11]"
            >
              {/* Icon */}
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-orange-100 flex items-center justify-center text-[#f37421] group-hover:bg-[#f37421] group-hover:text-white transition-all duration-300">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-[#1d3557] mt-6">
                {value.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-1 bg-[#f37421] rounded-full mt-4 mb-5 group-hover:w-20 transition-all duration-300"></div>

              {/* Description */}
              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-14 lg:mt-20 bg-white rounded-3xl shadow-lg border border-orange-100 p-6 sm:p-8 lg:p-10 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#1d3557] mb-4">
            Our Promise
          </h3>

          <p className="max-w-3xl mx-auto text-gray-600 leading-7 sm:leading-8 italic text-sm sm:text-base">
            "We are committed to building a society where every individual is
            valued, empowered, and provided with equal opportunities to achieve
            their full potential."
          </p>
        </div>

      </div>
    </section>
  );
};

export default CoreValues;