import React from "react";
import {
  FaUsers,
  FaHandsHelping,
  FaBriefcase,
  FaSmile,
} from "react-icons/fa";

const impactData = [
  {
    icon: <FaUsers size={30} />,
    number: "500+",
    title: "Individuals Supported",
    description:
      "Providing personalized support and services to people with disabilities.",
  },
  {
    icon: <FaHandsHelping size={30} />,
    number: "30+",
    title: "Community Programs",
    description:
      "Creating opportunities through inclusive events, workshops, and outreach.",
  },
  {
    icon: <FaBriefcase size={30} />,
    number: "20+",
    title: "Professional Partners",
    description:
      "Working together with organizations to build an inclusive community.",
  },
  {
    icon: <FaSmile size={30} />,
    number: "100%",
    title: "Commitment",
    description:
      "Dedicated to empowering every individual with dignity and respect.",
  },
];

const Impact = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#f37421] font-semibold text-sm">
            Our Impact
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d3557] leading-tight">
            Creating Positive Change Every Day
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-[#f37421] rounded-full mx-auto mt-5"></div>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-sm sm:text-base leading-7 sm:leading-8 px-2">
            Our work is driven by compassion, inclusion, and a commitment to
            improving the lives of individuals with disabilities and their
            families.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="group bg-[#fff8f3] rounded-3xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-orange-100 text-[#f37421] flex items-center justify-center group-hover:bg-[#f37421] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="mt-5 sm:mt-6 text-4xl sm:text-5xl font-extrabold text-[#f37421]">
                {item.number}
              </h3>

              {/* Title */}
              <h4 className="mt-3 text-xl sm:text-2xl font-bold text-[#1d3557]">
                {item.title}
              </h4>

              {/* Divider */}
              <div className="w-12 h-1 bg-[#f37421] rounded-full mx-auto mt-4 mb-4 group-hover:w-20 transition-all duration-300"></div>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 md:mt-20 bg-[#1d3557] rounded-3xl p-8 sm:p-10 lg:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5">
            Together We Make a Difference
          </h3>

          <p className="max-w-3xl mx-auto text-gray-300 text-sm sm:text-base leading-7 sm:leading-8">
            Every program, partnership, and success story reflects our
            dedication to creating a more inclusive society where everyone has
            the opportunity to thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;