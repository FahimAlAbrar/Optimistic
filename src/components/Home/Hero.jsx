import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../../assets/HomeCover/HomeCover.avif"

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-start px-6 sm:px-12 pt-20 sm:pt-28 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${HomeImage})` }}
    >
      {/* Dark Overlay with subtle blur to enhance readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full py-24 sm:py-32">
        {/* Top Accent Badge */}
        <div className="inline-flex items-center gap-3 mb-6 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#f37421] animate-pulse" />
          <p className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/90">
            Disability Inclusion & Empowerment
          </p>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6 max-w-4xl">
          Empowering{" "}
          <span className="bg-gradient-to-r from-[#f37421] to-[#fdcb11] bg-clip-text text-transparent drop-shadow-sm">
            Every
          </span>{" "}
          Ability
        </h1>

        {/* Decorative Divider */}
        <div className="w-24 h-1 rounded-full mb-8 bg-gradient-to-r from-[#f37421] to-[#fdcb11]" />

        {/* Supporting Paragraph */}
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10 font-normal">
          We believe disability is not a limitation—it is a unique strength.
          Join us in building a world where every individual can thrive with
          dignity and equal opportunity.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          {/* Primary Button - Solid Color */}
          <Link
            to="/services"
            className="inline-flex justify-center items-center text-center px-8 py-4 rounded-full text-white text-sm font-bold bg-[#f37421] shadow-lg shadow-[#f37421]/20 hover:bg-[#e26310] hover:shadow-[#f37421]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out"
          >
            Explore Our Services
          </Link>

          {/* Secondary Button - Outline */}
          <Link 
          to="/about"
          className="px-8 py-4 rounded-full text-sm text-center font-bold border-2 border-white/20 text-white hover:border-[#f37421] hover:bg-[#f37421] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out">
            Our Story
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
