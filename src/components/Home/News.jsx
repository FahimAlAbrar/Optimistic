import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import news1 from "../../assets/news/news1.jpg";

const newsData = [
  {
    image: news1,
    date: "28 November 2025",
    category: "Departmental Update",
    title:
      "WHO Disability Health Equity Network inaugurated with 154 global members",
  },
  {
    image: news1,
    date: "29 August 2025",
    category: "Departmental Update",
    title:
      "From Gaza to Geneva: WHO Director-General hosts Palestinian disability delegation",
  },
  {
    image: news1,
    date: "27 June 2025",
    category: "Departmental Update",
    title:
      "Partners unite to launch WHO Disability Health Equity initiative",
  },
  {
    image: news1,
    date: "7 May 2025",
    category: "Departmental Update",
    title:
      "Global Disability Summit marks pivotal moment in advancing health for all",
  },
];

const News = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">

          <div>
            <p className="uppercase tracking-[4px] text-[#f37421] font-semibold text-sm">
              Latest News
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d3557] mt-3">
              News & Updates
            </h2>

            <div className="w-20 h-1 bg-[#f37421] rounded-full mt-5"></div>
          </div>

          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[#1d3557] font-semibold hover:text-[#f37421] transition"
          >
            View All
            <FaArrowRight />
          </Link>

        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {newsData.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 sm:h-60 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">

                <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">
                  {item.date} • {item.category}
                </p>

                <h3 className="text-xl font-bold text-[#1d3557] leading-8 mb-6 flex-grow">
                  {item.title}
                </h3>

                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 text-[#f37421] font-semibold hover:text-[#fdcb11] transition"
                >
                  Read More
                  <FaArrowRight />
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default News;