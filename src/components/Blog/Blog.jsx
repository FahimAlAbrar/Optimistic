import React, { useState } from "react";
import { Link } from "react-router-dom";

const blogsData = [
  {
    id: 1,
    title: "Empowering People with Disabilities",
    desc: "How inclusive programs are changing lives across communities.",
    category: "Inclusion",
    date: "June 2026",
  },
  {
    id: 2,
    title: "Education for All Initiative",
    desc: "Breaking barriers in education for disabled individuals.",
    category: "Education",
    date: "May 2026",
  },
  {
    id: 3,
    title: "Employment Opportunities",
    desc: "Creating equal job opportunities in modern workplaces.",
    category: "Jobs",
    date: "April 2026",
  },
  {
    id: 4,
    title: "Healthcare Accessibility",
    desc: "Improving healthcare systems for everyone.",
    category: "Health",
    date: "March 2026",
  },
];

const Blog = () => {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="bg-white min-h-screen">
      {/* HERO */}
      <div className="bg-gradient-to-r from-[#1e2d4d] to-[#2a3f6f] text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-black">
          Our <span className="text-[#fdcb11]">Blog</span>
        </h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto">
          Stories, updates, and insights about disability inclusion and
          empowerment.
        </p>
      </div>

      {/* SEARCH */}
      <div className="max-w-5xl mx-auto px-6 mt-10">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full p-4 border border-gray-400 rounded-xl outline-none hover:border-[#f37421] focus:border-[#f37421] focus:ring-2 focus:ring-[#f37421]/20 transition-all duration-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* BLOG GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="border border-[#f37421] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white"
            >
              {/* Card Top */}
              <div className="h-40 bg-gradient-to-r from-[#f37421] to-[#fdcb11]" />

              {/* Content */}
              <div className="p-5">
                <span className="text-xs font-bold text-[#f37421] uppercase">
                  {blog.category}
                </span>

                <h2 className="text-lg font-bold text-[#1e2d4d] mt-2">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mt-2">{blog.desc}</p>

                <div className="flex justify-between items-center mt-5 text-xs text-gray-400">
                  <span>{blog.date}</span>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-[#f37421] font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No blogs found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Blog;
