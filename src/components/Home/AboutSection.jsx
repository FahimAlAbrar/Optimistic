import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "../../assets/Gallery/p1.webp";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-1">
            <img
              src={AboutImage}
              alt="About Optimistic Disability Services"
              className="rounded-3xl shadow-2xl w-full h-[300px] sm:h-[420px] lg:h-[550px] object-cover"
            />

            {/* Decorative Box */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-40 h-40 bg-orange-100 rounded-3xl -z-10"></div>

            {/* Experience Card */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-2xl shadow-xl px-4 py-3 sm:px-6 sm:py-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#f37421]">
                100%
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 font-medium">
                Committed to Inclusion
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-2">
            <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#f37421] font-semibold text-sm">
              About Us
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1d3557] mt-4 leading-tight">
              Empowering Every Ability Through Inclusion & Care
            </h2>

            <div className="w-20 sm:w-24 h-1 bg-[#f37421] rounded-full mt-5 mb-6"></div>

            <p className="text-gray-600 leading-7 sm:leading-8 mb-5 text-sm sm:text-base">
              At <strong>Optimistic Disability Services</strong>, we believe
              that every individual deserves equal opportunities, dignity, and
              the support needed to achieve their full potential.
            </p>

            <p className="text-gray-600 leading-7 sm:leading-8 mb-8 text-sm sm:text-base">
              Our mission is to create inclusive communities where people with
              disabilities can thrive through personalized support, education,
              employment opportunities, accessibility, and meaningful
              participation in society.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
              {[
                "Inclusive Support",
                "Community Focused",
                "Professional Team",
                "Equal Opportunities",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#f37421] font-bold">
                    ✓
                  </div>

                  <span className="font-semibold text-[#1d3557] text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#f37421] hover:bg-[#fdcb11] hover:text-black transition duration-300 rounded-full text-white font-semibold shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;