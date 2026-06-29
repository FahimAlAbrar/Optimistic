import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";

import work1 from "../../assets/news/news1.jpg";

const works = [
  {
    image: work1,
    title: "Making Accessible Telehealth Services for Persons with Disabilities",
  },
  {
    image: work1,
    title: "Supporting Communities to Advance Health Equity for People with Disabilities",
  },
  {
    image: work1,
    title: "Strengthening Disability Support and Inclusive Programs",
  },
  {
    image: work1,
    title: "Implementing Inclusive Disability Strategies Across Communities",
  },
];

const OurWork = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">

          <div>
            <p className="uppercase tracking-[4px] text-[#f37421] font-semibold text-sm">
              Our Work
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d3557] mt-3">
              Making a Difference
            </h2>

            <div className="w-20 h-1 bg-[#f37421] rounded-full mt-5"></div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 self-start sm:self-auto">
            <button className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-orange-100 text-[#f37421] hover:bg-[#f37421] hover:text-white transition duration-300 shadow">
              <FaArrowLeft className="mx-auto" />
            </button>

            <button className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-orange-100 text-[#f37421] hover:bg-[#f37421] hover:text-white transition duration-300 shadow">
              <FaArrowRight className="mx-auto" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {works.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 sm:h-60 lg:h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">

                <h3 className="text-xl font-bold text-[#1d3557] leading-8 mb-6">
                  {item.title}
                </h3>

                <button className="mt-auto inline-flex items-center gap-2 text-[#f37421] font-semibold hover:text-[#fdcb11] transition">
                  Read More
                  <FaArrowRight />
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurWork;