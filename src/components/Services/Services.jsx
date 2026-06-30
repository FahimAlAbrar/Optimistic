import React, { useState } from "react";
import { FaHeart, FaUniversalAccess } from "react-icons/fa";
import { MdOutlineSupportAgent, MdCastForEducation } from "react-icons/md";
import { FaHouseCircleCheck, FaArrowRightLong } from "react-icons/fa6";
import { IoHandRightSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Employment Support",
    slug: "employment-support",
    description:
      "Job placement, skill workshops, and employer partnerships to open doors for every ability.",
  },
  {
    title: "Education & Training",
    slug: "education-training",
    description:
      "Inclusive learning programs, literacy support, and vocational training tailored to each individual.",
  },
  {
    title: "Healthcare Access",
    slug: "healthcare-access",
    description:
      "Connecting individuals with allied health professionals and accessible medical services.",
  },
  {
    title: "Community Inclusion",
    slug: "community-inclusion",
    description:
      "Programs, events, and networks that foster belonging, friendship, and social participation.",
  },
  {
    title: "Advocacy & Rights",
    slug: "advocacy-rights",
    description:
      "Policy engagement and legal guidance to defend the rights of persons with disabilities.",
  },
  {
    title: "Assistive Technology",
    slug: "assistive-technology",
    description:
      "Sourcing and training in adaptive devices and digital tools that enhance independence.",
  },
];

const serviceIcons = {
  "Employment Support": MdOutlineSupportAgent,
  "Education & Training": MdCastForEducation,
  "Healthcare Access": FaHeart,
  "Community Inclusion": FaHouseCircleCheck,
  "Advocacy & Rights": IoHandRightSharp,
  "Assistive Technology": FaUniversalAccess,
};

const whatWeDo = [
  "Disability advocacy and awareness programs",
  "Skills development and vocational training",
  "Employment and career support",
  "Accessible education and learning opportunities",
  "Community engagement and inclusion initiatives",
  "Technology and accessibility guidance",
  "Family and caregiver support services",
];

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="bg-white">
      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <div
        className="relative py-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1e2d4d 0%, #2a3f6f 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "rgba(243,116,33,0.15)" }}
        />
        <div
          className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "rgba(253,203,17,0.10)" }}
        />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span
              className="w-8 h-0.5 rounded-full"
              style={{ background: "#fdcb11" }}
            />
            <p
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#fdcb11" }}
            >
              What We Do
            </p>
            <span
              className="w-8 h-0.5 rounded-full"
              style={{ background: "#fdcb11" }}
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f37421, #f68c1f, #fdcb11)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </span>
          </h1>

          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Comprehensive support designed around you — from education and
            employment to healthcare and community connection.
          </p>
        </div>
      </div>

      {/* ── SERVICES GRID ───────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.title];
            const isHovered = hovered === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="group relative bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Hover background fill */}
                <div
                  className="absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, #1e2d4d, #2a3f6f)",
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                {/* Top accent bar — always visible when not hovered */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #f37421, #f68c1f, #fdcb11)",
                    opacity: isHovered ? 0 : 1,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mt-2 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: isHovered
                        ? "linear-gradient(135deg, #f37421, #f68c1f, #fdcb11)"
                        : "linear-gradient(135deg, #fff7f0, #fff3e0)",
                    }}
                  >
                    {Icon && (
                      <Icon
                        size={24}
                        color={isHovered ? "#ffffff" : "#f37421"}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-extrabold mb-2 transition-colors duration-300"
                    style={{ color: isHovered ? "#fdcb11" : "#1e2d4d" }}
                  >
                    {service.title}
                  </h3>

                  {/* Animated divider */}
                  <div
                    className="h-0.5 rounded-full mb-3 transition-all duration-300"
                    style={{
                      width: isHovered ? 56 : 32,
                      background: isHovered
                        ? "linear-gradient(90deg, #f37421, #f68c1f, #fdcb11)"
                        : "linear-gradient(90deg, #f37421, #fdcb11)",
                    }}
                  />

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-6 transition-colors duration-300"
                    style={{
                      color: isHovered ? "rgba(255,255,255,0.75)" : "#6b7280",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Learn more */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300"
                    style={{ color: isHovered ? "#fdcb11" : "#f37421" }}
                  >
                    Learn more
                    <FaArrowRightLong
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── WHAT WE DO ──────────────────────────────────────── */}
      <div
        className="py-16 px-6"
        style={{
          background: "linear-gradient(135deg, #fff7f0, #fff3e0, #fffbf0)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-1 h-10 rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #f37421, #f68c1f, #fdcb11)",
                  }}
                />
                <h2
                  className="text-3xl font-extrabold"
                  style={{ color: "#1e2d4d" }}
                >
                  What We Do
                </h2>
              </div>

              <p className="text-gray-600 leading-8 mb-6">
                We provide a wide range of services and initiatives designed to
                support individuals with disabilities — from advocacy and
                awareness through to careers, technology, and family support.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["NDIS Registered", "Australia-wide", "Person-centred"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="px-4 py-1.5 rounded-full text-xs font-bold text-white"
                      style={{
                        background: "linear-gradient(135deg, #f37421, #f68c1f)",
                      }}
                    >
                      {badge}
                    </span>
                  ),
                )}
              </div>

              {/* Progress bars */}
              <div className="space-y-4">
                {[
                  { label: "Employment Outcomes", pct: 92 },
                  { label: "Education Completion", pct: 87 },
                  { label: "Community Engagement", pct: 95 },
                ].map((bar) => (
                  <div key={bar.label}>
                    <div className="flex justify-between mb-1">
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "#1e2d4d" }}
                      >
                        {bar.label}
                      </span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#f37421" }}
                      >
                        {bar.pct}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-orange-100">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${bar.pct}%`,
                          background:
                            "linear-gradient(90deg, #f37421, #f68c1f, #fdcb11)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: checklist card */}
            <div
              className="rounded-3xl p-8 shadow-lg"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(243,116,33,0.15)",
              }}
            >
              {/* Card header */}
              <div
                className="flex items-center gap-3 mb-6 pb-5"
                style={{ borderBottom: "1px solid rgba(243,116,33,0.15)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base"
                  style={{
                    background:
                      "linear-gradient(135deg, #f37421, #f68c1f, #fdcb11)",
                  }}
                >
                  ✦
                </div>
                <div>
                  <div
                    className="text-sm font-extrabold"
                    style={{ color: "#1e2d4d" }}
                  >
                    Our Full Range
                  </div>
                  <div className="text-xs text-gray-400">
                    Services & Initiatives
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {whatWeDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, #f37421, #f68c1f)",
                      }}
                    >
                      ✓
                    </div>
                    <span className="text-gray-700 text-sm leading-7">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ──────────────────────────────────────── */}
      <div
        className="relative py-16 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1e2d4d 0%, #2a3f6f 100%)",
        }}
      >
        {/* Decorative rings */}
        <div
          className="absolute -top-10 -right-10 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "rgba(243,116,33,0.12)" }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "rgba(253,203,17,0.08)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#fdcb11" }}
          >
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to take the{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f37421, #f68c1f, #fdcb11)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              next step?
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Our team is ready to support you. Get in touch today and let us help
            you find the right service for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-8 py-3.5 rounded-full text-white text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, #f37421, #f68c1f, #fdcb11)",
              }}
            >
              Get Support Today
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-sm font-bold border-2 text-white hover:bg-white/10 transition-all duration-300"
              style={{ borderColor: "rgba(243,116,33,0.5)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
