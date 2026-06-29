import React from "react";
import {
  FaUsers,
  FaHandsHelping,
  FaHeart,
  FaUserShield,
  FaUniversalAccess,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaHandsHelping size={32} />,
    title: "Personalized Support",
    description:
      "Every individual receives support tailored to their unique goals, strengths, and needs.",
  },
  {
    icon: <FaUsers size={32} />,
    title: "Inclusive Community",
    description:
      "We create opportunities where everyone feels respected, valued, and empowered.",
  },
  {
    icon: <FaUniversalAccess size={32} />,
    title: "Accessible Services",
    description:
      "Our programs are designed to ensure equal access, participation, and independence.",
  },
  {
    icon: <FaHeart size={32} />,
    title: "Compassionate Care",
    description:
      "We provide services with empathy, dignity, and genuine respect for every individual.",
  },
  {
    icon: <FaUserShield size={32} />,
    title: "Trusted Professionals",
    description:
      "Our experienced team works closely with individuals and families to deliver quality support.",
  },
  {
    icon: <FaAward size={32} />,
    title: "Commitment to Excellence",
    description:
      "We continuously improve our services to achieve meaningful outcomes for everyone.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#fff8f3]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#f37421] font-semibold text-sm">
            Why Choose Us
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d3557] mt-4 leading-tight">
            We Make a Positive Difference
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-[#f37421] mx-auto rounded-full mt-5"></div>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base px-2">
            We are dedicated to creating inclusive opportunities through
            compassionate care, professional support, and community engagement.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-100 flex items-center justify-center text-[#f37421] group-hover:bg-[#f37421] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d3557] mt-5 sm:mt-6">
                {feature.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-1 bg-[#f37421] rounded-full mt-4 mb-5 group-hover:w-20 transition-all duration-300"></div>

              {/* Description */}
              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statistics */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { number: "100%", label: "Dedicated Support" },
            { number: "24/7", label: "Care & Assistance" },
            { number: "500+", label: "Lives Empowered" },
            { number: "10+", label: "Years of Service" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#f37421]">
                {item.number}
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;