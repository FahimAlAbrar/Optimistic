import React from "react";
import {
  FaPhoneAlt,
  FaClipboardCheck,
  FaHandsHelping,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    id: "01",
    icon: <FaPhoneAlt />,
    title: "Contact Us",
    description:
      "Reach out to our friendly team to discuss your needs and learn about our services.",
  },
  {
    id: "02",
    icon: <FaClipboardCheck />,
    title: "Assessment",
    description:
      "We take the time to understand your goals, strengths, and support requirements.",
  },
  {
    id: "03",
    icon: <FaHandsHelping />,
    title: "Personalised Support",
    description:
      "Together, we create a tailored support plan designed around your individual journey.",
  },
  {
    id: "04",
    icon: <FaStar />,
    title: "Achieve Your Goals",
    description:
      "With ongoing guidance and encouragement, we help you build confidence and independence.",
  },
];

const Process = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <p className="uppercase tracking-[3px] md:tracking-[4px] text-[#f37421] font-semibold text-sm">
            Our Process
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d3557] mt-4">
            Supporting You Every Step of the Way
          </h2>

          <div className="w-20 md:w-24 h-1 bg-[#f37421] mx-auto rounded-full mt-6"></div>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-7 md:leading-8 text-sm sm:text-base">
            We follow a simple and supportive process to ensure every individual
            receives personalised care and opportunities to achieve their full
            potential.
          </p>
        </div>

        {/* Process */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-1 bg-orange-100 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group text-center relative"
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-[#f37421] text-white flex items-center justify-center shadow-lg text-3xl group-hover:bg-[#fdcb11] group-hover:text-[#1d3557] transition duration-300">
                  {step.icon}
                </div>

                {/* Step */}
                <p className="mt-5 text-[#f37421] font-bold tracking-widest text-xs sm:text-sm">
                  STEP {step.id}
                </p>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[#1d3557] mt-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-7 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 bg-[#fff8f3] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1d3557]">
            Ready to Begin Your Journey?
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto leading-7 md:leading-8 mt-5 mb-8 text-sm md:text-base">
            Whether you're looking for support, resources, or guidance, our
            team is here to help you every step of the way.
          </p>

          <Link
            to="/contact"
            className="inline-block w-full sm:w-auto px-8 py-4 rounded-full bg-[#f37421] text-white font-semibold hover:bg-[#fdcb11] hover:text-[#1d3557] transition duration-300 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;