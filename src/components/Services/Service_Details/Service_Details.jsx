import React from "react";
import { useParams, Link } from "react-router-dom";

const serviceData = {
  "employment-support": {
    title: "Employment Support",
    desc: "We help individuals find meaningful employment through job placement programs, skill development workshops, and partnerships with inclusive employers.",
  },
  "education-training": {
    title: "Education & Training",
    desc: "Our inclusive education programs provide literacy support, vocational training, and lifelong learning opportunities tailored to every individual.",
  },
  "healthcare-access": {
    title: "Healthcare Access",
    desc: "We connect people with accessible healthcare services and allied health professionals to ensure equal medical support.",
  },
  "community-inclusion": {
    title: "Community Inclusion",
    desc: "We build strong communities through events, social programs, and inclusion initiatives that create belonging for everyone.",
  },
  "advocacy-rights": {
    title: "Advocacy & Rights",
    desc: "We support policy advocacy, legal guidance, and awareness programs to protect the rights of people with disabilities.",
  },
  "assistive-technology": {
    title: "Assistive Technology",
    desc: "We provide access to adaptive devices, digital tools, and training that enhance independence and daily living.",
  },
};

const Service_Details = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <Link to="/services" className="text-orange-500">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white">
      {/* HERO */}
      <div className="bg-gradient-to-r from-[#1e2d4d] to-[#2a3f6f] text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-black">
          {service.title}
        </h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-gray-600 text-lg leading-8">
          {service.desc}
        </p>

        <div className="mt-10">
          <Link
            to="/services"
            className="px-6 py-3 rounded-full bg-[#f37421] text-white font-bold"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service_Details;