import React from "react";
import { Link } from "react-router-dom";

const content_sections = "p-6 border border-gray-300 rounded-2xl shadow-sm";


const Join_Our_Mission = () => {
  return (
    <section className="min-h-screen bg-white">
      {/* HERO */}
      <div
        className="py-20 px-6 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #1e2d4d, #2a3f6f)",
        }}
      >
        <h1 className="text-4xl font-extrabold mb-4">
          Mission & Community Impact
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Everything we stand for — awareness, education, accessibility,
          empowerment, and equal rights.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* Awareness */}
        <div className={content_sections}>
          <h2 className="text-2xl font-bold text-[#f37421] mb-2">
            📢 Awareness
          </h2>
          <p className="text-gray-600 leading-7">
            We promote disability awareness and positive representation in
            society to remove stigma and build understanding.
          </p>
        </div>

        {/* Education */}
        <div className={content_sections}>
          <h2 className="text-2xl font-bold text-[#f37421] mb-2">
            🎓 Education
          </h2>
          <p className="text-gray-600 leading-7">
            We support inclusive education, training programs, and employment
            pathways for people of all abilities.
          </p>
        </div>

        {/* Accessibility */}
        <div className={content_sections}>
          <h2 className="text-2xl font-bold text-[#f37421] mb-2">
            ♿ Accessibility
          </h2>
          <p className="text-gray-600 leading-7">
            We encourage accessible environments, digital inclusion, and equal
            access to opportunities.
          </p>
        </div>

        {/* Empowerment */}
        <div className={content_sections}>
          <h2 className="text-2xl font-bold text-[#f37421] mb-2">
            💪 Empowerment
          </h2>
          <p className="text-gray-600 leading-7">
            We empower individuals through skill development, confidence
            building, and community support.
          </p>
        </div>

        {/* Equal Rights */}
        <div className={content_sections}>
          <h2 className="text-2xl font-bold text-[#f37421] mb-2">
            ⚖️ Equal Rights
          </h2>
          <p className="text-gray-600 leading-7">
            We advocate for equal rights, independence, and social inclusion for
            all individuals.
          </p>
        </div>

        {/* Optimism */}
        <div className={content_sections}>
          <h2 className="text-2xl font-bold text-[#f37421] mb-2">
            ☀️ Optimism
          </h2>
          <p className="text-gray-600 leading-7">
            We encourage confidence, positivity, and belief in one's abilities.
          </p>
        </div>

        {/* BACK BUTTON */}
        <div className="text-center pt-10">
          <Link
            to="/mission"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "linear-gradient(135deg, #f37421, #f68c1f)",
            }}
          >
            <span className="text-lg">←</span>
            Back to Mission
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Join_Our_Mission;
