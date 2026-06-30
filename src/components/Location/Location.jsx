import React from "react";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <section className="bg-white">
      {/* HERO */}
      <div
        className="relative py-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1e2d4d 0%, #2a3f6f 100%)",
        }}
      >
        <div
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full"
          style={{ background: "rgba(243,116,33,0.15)" }}
        />
        <div
          className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full"
          style={{ background: "rgba(253,203,17,0.10)" }}
        />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span
              className="w-8 h-0.5 rounded-full"
              style={{ background: "#fdcb11" }}
            />
            <p
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#fdcb11" }}
            >
              Our Location
            </p>
            <span
              className="w-8 h-0.5 rounded-full"
              style={{ background: "#fdcb11" }}
            />
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Visit{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#f37421,#f68c1f,#fdcb11)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Office
            </span>
          </h1>

          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            We welcome individuals, families, and partners to visit our office.
            Feel free to stop by during business hours or contact us before your
            visit.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span
                className="w-1 h-10 rounded-full"
                style={{
                  background: "linear-gradient(180deg,#f37421,#f68c1f,#fdcb11)",
                }}
              />

              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "#f68c1f" }}
                >
                  Office Details
                </p>

                <h2
                  className="text-3xl font-extrabold"
                  style={{ color: "#1e2d4d" }}
                >
                  Find Us
                </h2>
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: <MdLocationOn size={22} />,
                  title: "Office Address",
                  value: "Uttara, Dhaka 1230, Bangladesh",
                },
                {
                  icon: <MdPhone size={22} />,
                  title: "Phone",
                  value: "+880 1 0000 00000",
                },
                {
                  icon: <MdEmail size={22} />,
                  title: "Email",
                  value: "hello@optimistic.org",
                },
                {
                  icon: <MdAccessTime size={22} />,
                  title: "Office Hours",
                  value: "Sunday - Thursday | 9:00 AM - 5:00 PM",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-2xl hover:shadow-lg transition-all"
                  style={{
                    border: "1px solid rgba(243,116,33,0.12)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{
                      background:
                        "linear-gradient(135deg,#f37421,#f68c1f,#fdcb11)",
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
                      {item.title}
                    </p>

                    <p className="font-bold mt-1" style={{ color: "#1e2d4d" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Areas */}

            <div
              className="mt-10 p-6 rounded-3xl"
              style={{
                background: "linear-gradient(135deg,#fff7f0,#fff3e0)",
              }}
            >
              <h3
                className="text-xl font-bold mb-5"
                style={{ color: "#1e2d4d" }}
              >
                Areas We Serve
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Dhaka",
                  "Gazipur",
                  "Narayanganj",
                  "Savar",
                  "Cumilla",
                  "Chattogram",
                  "Sylhet",
                  "Rajshahi",
                ].map((city) => (
                  <div
                    key={city}
                    className="rounded-xl px-4 py-3 text-center font-semibold bg-white"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <div
              className="rounded-3xl overflow-hidden shadow-xl"
              style={{
                border: "1px solid rgba(243,116,33,.15)",
              }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                width="100%"
                height="520"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

            <div
              className="mt-8 rounded-3xl p-6"
              style={{
                background: "#fff",
                border: "1px solid rgba(243,116,33,.15)",
              }}
            >
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#1e2d4d" }}
              >
                Getting Here
              </h3>

              <p className="text-gray-600 leading-8">
                Our office is conveniently located in central Dhaka with easy
                access by bus, rideshare, and private vehicle. Parking is
                available nearby for visitors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}

      <div
        className="relative py-16 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#1e2d4d 0%,#2a3f6f 100%)",
        }}
      >
        <div
          className="absolute -top-10 -right-10 w-56 h-56 rounded-full"
          style={{ background: "rgba(243,116,33,.12)" }}
        />

        <div
          className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full"
          style={{ background: "rgba(253,203,17,.08)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-widest font-bold mb-3"
            style={{ color: "#fdcb11" }}
          >
            Come Visit Us
          </p>

          <h2 className="text-4xl font-extrabold text-white mb-4">
            We'd Love To{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#f37421,#f68c1f,#fdcb11)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Meet You
            </span>
          </h2>

          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Visit our office, learn more about our services, and meet our
            friendly team. We're always happy to welcome you.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full text-white font-bold transition hover:scale-105"
              style={{ background: "#f37421" }}
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="px-8 py-3.5 rounded-full border-2 text-white font-bold hover:bg-white/10"
              style={{ borderColor: "rgba(243,116,33,.5)" }}
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
