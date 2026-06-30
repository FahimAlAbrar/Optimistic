import React from "react";
import { Link } from "react-router-dom";

const missionItems = [
  {
    icon: "📢",
    title: "Awareness",
    desc: "Promote disability awareness and positive representation.",
  },
  {
    icon: "🎓",
    title: "Education",
    desc: "Support education, employment, and entrepreneurship opportunities.",
  },
  {
    icon: "♿",
    title: "Accessibility",
    desc: "Encourage accessibility and inclusive environments.",
  },
  {
    icon: "💪",
    title: "Empowerment",
    desc: "Empower individuals through skill development and community support.",
  },
  {
    icon: "⚖️",
    title: "Equal Rights",
    desc: "Advocate for equal rights, independence, and social inclusion.",
  },
  {
    icon: "☀️",
    title: "Optimism",
    desc: "Foster optimism, confidence, and self-belief among people with disabilities.",
  },
];

const joinItems = [
  "Volunteer with our community programs",
  "Partner with us as an employer or organisation",
  "Donate to support our initiatives and services",
  "Spread awareness and advocate for inclusion",
];

const Mission_Vision = () => {
  return (
    <section id="mission" className="bg-white">
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
              Purpose & Direction
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
              Mission & Vision
            </span>
          </h1>

          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Driven by purpose, guided by values, and committed to building a
            more inclusive world for every individual.
          </p>
        </div>
      </div>

      {/* ── MISSION SECTION ─────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div
            className="w-1 h-10 rounded-full"
            style={{
              background: "linear-gradient(180deg, #f37421, #f68c1f, #fdcb11)",
            }}
          />
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#f68c1f" }}
            >
              What Drives Us
            </p>
            <h2
              className="text-3xl font-extrabold"
              style={{ color: "#1e2d4d" }}
            >
              Our Mission
            </h2>
          </div>
        </div>

        {/* Mission cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {missionItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              {/* Top accent bar */}
              <div
                className="w-full h-1 rounded-t-xl -mt-6 -mx-6 mb-5 rounded-t-2xl"
                style={{
                  width: "calc(100% + 48px)",
                  background:
                    "linear-gradient(90deg, #f37421, #f68c1f, #fdcb11)",
                }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #fff7f0, #fff3e0)",
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg font-extrabold mb-2"
                style={{ color: "#1e2d4d" }}
              >
                {item.title}
              </h3>

              {/* Divider */}
              <div
                className="w-8 h-0.5 rounded-full mb-3 transition-all duration-300 group-hover:w-14"
                style={{
                  background: "linear-gradient(90deg, #f37421, #fdcb11)",
                }}
              />

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── VISION SECTION ──────────────────────────────────── */}
      <div
        className="py-16 px-6"
        style={{
          background: "linear-gradient(135deg, #fff7f0, #fff3e0, #fffbf0)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Left: Vision text */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-1 h-10 rounded-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #f37421, #f68c1f, #fdcb11)",
                  }}
                />
                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{ color: "#f68c1f" }}
                  >
                    Where We're Headed
                  </p>
                  <h2
                    className="text-3xl font-extrabold"
                    style={{ color: "#1e2d4d" }}
                  >
                    Our Vision
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 leading-8 mb-6">
                To build an inclusive society where every person with a
                disability can live with{" "}
                <span className="font-bold" style={{ color: "#f37421" }}>
                  confidence
                </span>
                ,{" "}
                <span className="font-bold" style={{ color: "#f68c1f" }}>
                  independence
                </span>
                ,{" "}
                <span className="font-bold" style={{ color: "#fdcb11" }}>
                  respect
                </span>
                , and equal opportunities — contributing meaningfully to their
                communities and achieving their full potential.
              </p>

              <p className="text-gray-600 leading-8">
                This aligns with global disability inclusion principles centered
                on dignity, equality, and participation.
              </p>

              {/* Vision pillars */}
              <div className="grid grid-cols-3 gap-3 mt-8">
                {[
                  { value: "Dignity", color: "#f37421" },
                  { value: "Equality", color: "#f68c1f" },
                  { value: "Participation", color: "#fdcb11" },
                ].map((pillar) => (
                  <div
                    key={pillar.value}
                    className="rounded-2xl p-4 text-center"
                    style={{
                      background: "white",
                      border: `2px solid ${pillar.color}`,
                    }}
                  >
                    <div
                      className="text-sm font-extrabold"
                      style={{ color: pillar.color }}
                    >
                      {pillar.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Large vision card */}
            <div
              className="rounded-3xl p-8 shadow-lg relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1e2d4d, #2a3f6f)",
              }}
            >
              {/* Decorative blob */}
              <div
                className="absolute -top-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "rgba(243,116,33,0.15)" }}
              />

              <div className="relative z-10">
                {/* Quote mark */}
                <div
                  className="text-6xl font-extrabold leading-none mb-4"
                  style={{ color: "#f37421" }}
                >
                  "
                </div>

                <p className="text-white/85 text-base leading-8 mb-6 italic">
                  Disability is not a limitation — it is a unique strength that
                  deserves recognition, respect, and equal opportunity.
                </p>

                {/* Divider */}
                <div
                  className="w-16 h-0.5 rounded-full mb-5"
                  style={{
                    background:
                      "linear-gradient(90deg, #f37421, #f68c1f, #fdcb11)",
                  }}
                />

                {/* Global alignment */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base"
                    style={{
                      background:
                        "linear-gradient(135deg, #f37421, #f68c1f, #fdcb11)",
                    }}
                  >
                    🌏
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-white">
                      Globally Aligned
                    </div>
                    <div className="text-xs text-white/50">
                      UN CRPD & NDIS Standards
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── JOIN OUR MISSION ────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span
              className="w-8 h-0.5 rounded-full"
              style={{ background: "#f37421" }}
            />
            <p
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#f37421" }}
            >
              Get Involved
            </p>
            <span
              className="w-8 h-0.5 rounded-full"
              style={{ background: "#f37421" }}
            />
          </div>
          <h2
            className="text-3xl font-extrabold mb-3"
            style={{ color: "#1e2d4d" }}
          >
            Join Our Mission
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Creating an inclusive society is a shared responsibility. Together,
            we can build a world where every person is recognised for their
            abilities and empowered to achieve their full potential.
          </p>
        </div>

        {/* 4 ways to join */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {joinItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-orange-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center cursor-default"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-extrabold mx-auto mb-3"
                style={{
                  background:
                    "linear-gradient(135deg, #f37421, #f68c1f, #fdcb11)",
                }}
              >
                {index + 1}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="px-8 py-3.5 rounded-full text-white text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#f37421" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f68c1f")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#f37421")
            }
          >
            Get Involved Today
          </button>
          <Link
            to="/join-our-mission-details"
            className="px-8 py-3.5 rounded-full text-sm font-bold border-2 transition-all duration-300 hover:bg-orange-50"
            style={{ borderColor: "#f37421", color: "#f37421" }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mission_Vision;
