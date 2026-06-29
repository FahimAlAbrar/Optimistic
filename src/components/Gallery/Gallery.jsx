import React, { useState } from "react";

import p1 from "../../assets/Gallery/p1.webp";
import p2 from "../../assets/Gallery/p2.webp";
import p3 from "../../assets/Gallery/p3.jpg";
import p4 from "../../assets/Gallery/p4.webp";
import p5 from "../../assets/Gallery/p5.jpeg";
import p6 from "../../assets/Gallery/p6.webp";

const images = [
  { src: p1, label: "Community Event" },
  { src: p2, label: "Awareness Campaign" },
  { src: p3, label: "Skill Development" },
  { src: p4, label: "Empowerment Program" },
  { src: p5, label: "Inclusion Activity" },
  { src: p6, label: "Support Session" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="bg-white">

      {/* ── HERO BANNER ─────────────────────────────────────── */}
      <div
        className="relative py-20 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1e2d4d 0%, #2a3f6f 100%)" }}
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
              Our Gallery
            </p>
            <span
              className="w-8 h-0.5 rounded-full"
              style={{ background: "#fdcb11" }}
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Moments That{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f37421, #f68c1f, #fdcb11)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Inspire
            </span>
          </h1>

          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Explore memorable moments from our programs, community events,
            awareness campaigns, and activities that empower individuals
            with disabilities.
          </p>
        </div>
      </div>

      {/* ── GALLERY GRID ────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div
            className="w-1 h-10 rounded-full"
            style={{ background: "linear-gradient(180deg, #f37421, #f68c1f, #fdcb11)" }}
          />
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#f68c1f" }}
            >
              Captured Memories
            </p>
            <h2 className="text-2xl font-extrabold" style={{ color: "#1e2d4d" }}>
              Our Highlights
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setLightbox(index)}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              style={{ border: "1px solid rgba(243,116,33,0.10)" }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 z-10"
                style={{
                  background: "linear-gradient(90deg, #f37421, #f68c1f, #fdcb11)",
                }}
              />

              {/* Image */}
              <img
                src={image.src}
                alt={image.label}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: "rgba(30,45,77,0.75)" }}
              >
                {/* Zoom icon */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #f37421, #f68c1f, #fdcb11)" }}
                >
                  🔍
                </div>
                <span className="text-white text-sm font-bold tracking-wide">
                  View Photo
                </span>
              </div>

              {/* Label bar at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, #f37421, #f68c1f, #fdcb11)" }}
              >
                <span className="text-white text-xs font-bold tracking-widest uppercase">
                  {image.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS STRIP ─────────────────────────────────────── */}
      <div
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #fff7f0, #fff3e0, #fffbf0)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "50+",    label: "Events Held"        },
            { value: "2,500+", label: "Lives Touched"      },
            { value: "12",     label: "Years of Memories"  },
            { value: "180+",   label: "Community Partners" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm"
              style={{ border: "1px solid rgba(243,116,33,0.12)" }}
            >
              <div
                className="text-3xl font-extrabold mb-1"
                style={{ color: "#f37421" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA BANNER ──────────────────────────────────────── */}
      <div
        className="relative py-16 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1e2d4d 0%, #2a3f6f 100%)" }}
      >
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
            Be Part of the Story
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Want to create{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f37421, #f68c1f, #fdcb11)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              memories with us?
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Join our programs, attend our events, or volunteer with our team
            to be part of something truly meaningful.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-8 py-3.5 rounded-full text-white text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#f37421" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f68c1f")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f37421")}
            >
              Get Involved
            </button>
            <button
              className="px-8 py-3.5 rounded-full text-sm font-bold border-2 text-white hover:bg-white/10 transition-all duration-300"
              style={{ borderColor: "rgba(243,116,33,0.5)" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ────────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(10,15,30,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-3xl font-bold transition-colors"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={images[lightbox].src}
              alt={images[lightbox].label}
              className="w-full rounded-2xl shadow-2xl object-cover max-h-[75vh]"
            />

            {/* Label bar */}
            <div
              className="mt-0 px-6 py-3 rounded-b-2xl flex items-center justify-between"
              style={{ background: "linear-gradient(135deg, #f37421, #f68c1f, #fdcb11)" }}
            >
              <span className="text-white text-sm font-bold tracking-widest uppercase">
                {images[lightbox].label}
              </span>
              <span className="text-white/70 text-xs font-semibold">
                {lightbox + 1} / {images.length}
              </span>
            </div>

            {/* Prev / Next */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setLightbox((lightbox - 1 + images.length) % images.length)}
                className="px-6 py-2.5 rounded-full text-white text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "#f37421" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f68c1f")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f37421")}
              >
                ← Previous
              </button>
              <button
                onClick={() => setLightbox((lightbox + 1) % images.length)}
                className="px-6 py-2.5 rounded-full text-white text-sm font-bold transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "#f37421" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f68c1f")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f37421")}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Gallery;