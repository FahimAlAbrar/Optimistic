import React from "react";
import {
  FaUsers,
  FaHandshake,
  FaArrowUp,
  FaHeart,
  FaUniversalAccess,
  FaNetworkWired,
} from "react-icons/fa";
import AboutImage from "../../assets/Gallery/p1.webp";

const values = [
  {
    title: "Inclusion",
    description: "Everyone deserves equal participation and opportunity.",
  },
  {
    title: "Respect",
    description: "We honor the dignity, rights, and individuality of every person.",
  },
  {
    title: "Empowerment",
    description: "We help individuals build confidence, independence, and self-reliance.",
  },
  {
    title: "Compassion",
    description: "We serve with empathy, understanding, and care.",
  },
  {
    title: "Accessibility",
    description: "We promote environments that are welcoming and accessible to all.",
  },
  {
    title: "Collaboration",
    description:
      "We work alongside families, communities, and partners to create lasting positive change.",
  },
];

const valueIcons = {
  Inclusion: FaUsers,
  Respect: FaHandshake,
  Empowerment: FaArrowUp,
  Compassion: FaHeart,
  Accessibility: FaUniversalAccess,
  Collaboration: FaNetworkWired,
};

const About = () => {
  return (
    <section id="about" className="bg-white">

      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <div
        className="relative py-20 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1e2d4d 0%, #2a3f6f 100%)" }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10 bg-orange-400 pointer-events-none" />
        <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full opacity-10 bg-yellow-300 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5" style={{ background: "#fdcb11" }} />
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#fdcb11" }}>
              About Company
            </p>
            <span className="w-8 h-0.5" style={{ background: "#fdcb11" }} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            About{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f37421, #fdcb11)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Optimistic Disability
            </span>{" "}
            Services
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Purpose-driven. People-first. Committed to empowering every ability.
          </p>
        </div>
      </div>

      {/* ── ABOUT CONTENT ───────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-1 h-10 rounded-full"
                style={{ background: "linear-gradient(180deg, #f37421, #fdcb11)" }}
              />
              <h2 className="text-3xl font-extrabold" style={{ color: "#1e2d4d" }}>
                Who We Are
              </h2>
            </div>

            <p className="text-base font-semibold mb-5" style={{ color: "#f37421" }}>
              Empowering Abilities. Creating Opportunities.
            </p>

            <p className="text-gray-600 leading-8 mb-4">
              At{" "}
              <span className="font-bold" style={{ color: "#1e2d4d" }}>
                Optimistic Disability Services
              </span>
              , we are a purpose-driven organisation committed to empowering
              persons with disabilities through inclusion, opportunity, dignity,
              and positive social change. We believe that disability is not a
              limitation — it is a unique strength that deserves recognition,
              respect, and equal opportunity.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Our goal is to build an inclusive society where every individual,
              regardless of ability, has access to education, employment,
              healthcare, technology, and meaningful community participation.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "2,500+", label: "People Supported" },
                { value: "180+",   label: "Partners"         },
                { value: "12 Yrs", label: "Of Service"       },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-4 text-center"
                  style={{ background: "linear-gradient(135deg, #fff7f0, #fff3e0)" }}
                >
                  <div className="text-xl font-extrabold" style={{ color: "#f37421" }}>
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            {/* Decorative background block */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl"
              style={{ background: "linear-gradient(135deg, #f37421, #fdcb11)", opacity: 0.15 }}
            />
            <img
              src={AboutImage}
              alt="About Optimistic Disability Services"
              className="relative z-10 w-full h-80 object-cover rounded-3xl shadow-2xl"
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -left-5 z-20 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3"
              style={{ border: "2px solid #fdcb11" }}
            >
              <span className="text-2xl">🌟</span>
              <div>
                <div className="text-sm font-extrabold" style={{ color: "#1e2d4d" }}>
                  NDIS Registered
                </div>
                <div className="text-xs text-gray-400">Trusted Provider</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── MISSION & VISION STRIP ──────────────────────────── */}
      <div
        className="py-16 px-6"
        style={{ background: "linear-gradient(135deg, #f37421, #f68c1f, #fdcb11)" }}
      >
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg"
                style={{ background: "linear-gradient(135deg, #f37421, #fdcb11)" }}
              >
                🎯
              </div>
              <h3 className="text-xl font-extrabold" style={{ color: "#1e2d4d" }}>
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 leading-7 text-sm">
              To empower persons with disabilities through advocacy, education, skill
              development, and inclusive opportunities — ensuring everyone is recognised
              for their talents and potential, not their challenges.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg"
                style={{ background: "linear-gradient(135deg, #f37421, #fdcb11)" }}
              >
                👁️
              </div>
              <h3 className="text-xl font-extrabold" style={{ color: "#1e2d4d" }}>
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600 leading-7 text-sm">
              To build an inclusive society where every person with a disability can
              live with confidence, independence, respect, and equal opportunities —
              contributing meaningfully to their communities.
            </p>
          </div>

        </div>
      </div>

      {/* ── VALUES SECTION ──────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5" style={{ background: "#f37421" }} />
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#f37421" }}>
              What Drives Us
            </p>
            <span className="w-8 h-0.5" style={{ background: "#f37421" }} />
          </div>
          <h2 className="text-4xl font-extrabold" style={{ color: "#1e2d4d" }}>
            Our Core Values
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
            Every decision we make is guided by these six principles.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = valueIcons[value.title];
            return (
              <div
                key={index}
                className="group bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #fff7f0, #fff3e0)" }}
                >
                  {Icon && <Icon size={24} color="#f37421" />}
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold mb-2" style={{ color: "#1e2d4d" }}>
                  {value.title}
                </h3>

                {/* Divider */}
                <div
                  className="w-8 h-0.5 rounded-full mb-3 transition-all duration-300 group-hover:w-14"
                  style={{ background: "linear-gradient(90deg, #f37421, #fdcb11)" }}
                />

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default About;