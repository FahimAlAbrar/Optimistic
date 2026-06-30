import React, { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="bg-white">
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
              Get In Touch
            </p>
            <span
              className="w-8 h-0.5 rounded-full"
              style={{ background: "#fdcb11" }}
            />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            We're{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f37421, #f68c1f, #fdcb11)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Here for You
            </span>
          </h1>

          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Whether you need support, want to partner with us, or simply want to
            learn more — reach out. Our team responds within one business day.
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* ── LEFT: Contact Info ── */}
          <div>
            <div className="flex items-center gap-2 mb-6">
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
                  Contact Details
                </p>
                <h2
                  className="text-3xl font-extrabold"
                  style={{ color: "#1e2d4d" }}
                >
                  Talk to Us
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-8 mb-8">
              Our dedicated team is ready to assist you. Whether you're seeking
              support services, exploring partnership opportunities, or simply
              have a question — we'd love to hear from you.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              {[
                {
                  icon: <MdEmail size={22} />,
                  label: "Email",
                  value: "hello@optimistic.org",
                  sub: "We reply within 1 business day",
                },
                {
                  icon: <MdPhone size={22} />,
                  label: "Phone",
                  value: "+880 1 0000 00000",
                  sub: "Mon – Fri, 9am to 5pm",
                },
                {
                  icon: <MdLocationOn size={22} />,
                  label: "Location",
                  value: "Dhaka, Bangladesh",
                  sub: "Bangladesh-wide services available",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-200 hover:shadow-md group"
                  style={{
                    border: "1px solid rgba(243,116,33,0.12)",
                    background: "#fff",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(135deg, #f37421, #f68c1f, #fdcb11)",
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                      {item.label}
                    </p>
                    <p
                      className="font-extrabold text-sm"
                      style={{ color: "#1e2d4d" }}
                    >
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Response promise badge */}
            <div
              className="mt-8 rounded-2xl p-5 flex items-center gap-4"
              style={{
                background: "linear-gradient(135deg, #fff7f0, #fff3e0)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #f37421, #f68c1f, #fdcb11)",
                }}
              >
                ⚡
              </div>
              <div>
                <p
                  className="text-sm font-extrabold"
                  style={{ color: "#1e2d4d" }}
                >
                  Fast Response Guarantee
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                  We aim to respond to every enquiry within one business day.
                  Your message matters to us.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div
            className="rounded-3xl p-8 shadow-xl"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(243,116,33,0.15)",
            }}
          >
            {/* Form header */}
            <div
              className="flex items-center gap-3 mb-7 pb-6"
              style={{ borderBottom: "1px solid rgba(243,116,33,0.12)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base"
                style={{
                  background:
                    "linear-gradient(135deg, #f37421, #f68c1f, #fdcb11)",
                }}
              >
                ✉️
              </div>
              <div>
                <h3
                  className="text-lg font-extrabold"
                  style={{ color: "#1e2d4d" }}
                >
                  Send Us a Message
                </h3>
                <p className="text-xs text-gray-400">
                  Fill in the form and we'll be in touch
                </p>
              </div>
            </div>

            {/* Success message */}
            {submitted && (
              <div
                className="mb-6 rounded-2xl p-4 flex items-center gap-3"
                style={{
                  background: "linear-gradient(135deg, #fff7f0, #fff3e0)",
                  border: "1px solid rgba(243,116,33,0.3)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #f37421, #fdcb11)",
                  }}
                >
                  ✓
                </div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#f37421" }}
                >
                  Message sent! We'll get back to you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full p-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                    style={{
                      border: "1px solid rgba(243,116,33,0.2)",
                      background: "#fafafa",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#f37421")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(243,116,33,0.2)")
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full p-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                    style={{
                      border: "1px solid rgba(243,116,33,0.2)",
                      background: "#fafafa",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#f37421")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(243,116,33,0.2)")
                    }
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full p-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    border: "1px solid rgba(243,116,33,0.2)",
                    background: "#fafafa",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#f37421")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(243,116,33,0.2)")
                  }
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+880 1 0000 00000"
                  className="w-full p-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    border: "1px solid rgba(243,116,33,0.2)",
                    background: "#fafafa",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#f37421")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(243,116,33,0.2)")
                  }
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                  How Can We Help?
                </label>
                <select
                  className="w-full p-3 rounded-xl text-sm text-gray-600 transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    border: "1px solid rgba(243,116,33,0.2)",
                    background: "#fafafa",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#f37421")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(243,116,33,0.2)")
                  }
                >
                  <option>Employment Support</option>
                  <option>Education & Training</option>
                  <option>Healthcare Access</option>
                  <option>Community Inclusion</option>
                  <option>Advocacy & Rights</option>
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your situation…"
                  className="w-full p-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2 resize-none"
                  style={{
                    border: "1px solid rgba(243,116,33,0.2)",
                    background: "#fafafa",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#f37421")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(243,116,33,0.2)")
                  }
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-white text-sm font-bold shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{ backgroundColor: "#f37421" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f68c1f")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f37421")
                }
              >
                Send Message →
              </button>

              <p className="text-center text-xs text-gray-400">
                We respect your privacy. Your information is never shared.
              </p>
            </form>
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
            Always Here
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            You don't have to{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f37421, #f68c1f, #fdcb11)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              do it alone.
            </span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Our team is dedicated to supporting you every step of the way. Reach
            out today and let's start the conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-8 py-3.5 rounded-full text-white text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#f37421" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f68c1f")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#f37421")
              }
            >
              Call Us Now
            </button>
            <Link
              to="/services"
              className="px-8 py-3.5 rounded-full text-sm font-bold border-2 text-white hover:bg-white/10 transition-all duration-300"
              style={{ borderColor: "rgba(243,116,33,0.5)" }}
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
