import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
//import Logo from "../../assets/Logo/logo.jpg";
import CompanyLogo from "../../assets/Logo/company-logo.jpg";
import CompanyName from "../../assets/Logo/company-name.jpg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseMenu = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-[#f37421] flex items-center justify-center">
            <span className="text-[#f37421] text-xl">✦</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#f37421] uppercase">
              Optimistic
            </h1>
            <p className="text-xs tracking-[2px] text-[#f37421] uppercase">
              Disability Services
            </p>
          </div>
        </div> */}

        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 sm:gap-3"
        >
          <div className="flex items-center justify-center gap-2">
            <img
              src={CompanyLogo}
              alt=""
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <img
              src={CompanyName}
              alt=""
              className="h-5 sm:h-7 md:h-8 w-auto max-w-[140px] sm:max-w-[180px] object-contain mt-2"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[#1d3557] font-semibold">
          <li>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#f37421] transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#f37421] transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#f37421] transition-colors duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/mission"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#f37421] transition-colors duration-200"
            >
              Mission
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#f37421] transition-colors duration-200"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#f37421] transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/location"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#f37421] transition-colors duration-200"
            >
              Location
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[#f37421] transition-colors duration-200"
            >
              Contact
            </Link>
          </li>

          {/* CTA Button */}
          <li>
            <Link
              to="/contact"
              className="ml-6 px-5 py-2 rounded-full font-semibold text-white transition-colors duration-200 shadow-md"
              style={{ backgroundColor: "#f37421" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f68c1f")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#f37421")
              }
            >
              Get Support
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl text-[#f37421]">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <ul className="flex flex-col gap-4 font-semibold text-[#1d3557]">
            <li>
              <Link
                to="/"
                onClick={() => {
                  handleCloseMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-[#f37421] transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  handleCloseMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-[#f37421] transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => {
                  handleCloseMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-[#f37421] transition-colors duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/mission"
                onClick={() => {
                  handleCloseMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-[#f37421] transition-colors duration-200"
              >
                Mission
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                onClick={() => {
                  handleCloseMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-[#f37421] transition-colors duration-200"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={() => {
                  handleCloseMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-[#f37421] transition-colors duration-200"
              >
                Blog
              </Link>
            </li>
            <Link
              to="/location"
              onClick={() => {
                handleCloseMenu();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-[#f37421] transition-colors duration-200"
            >
              Location
            </Link>
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  handleCloseMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:text-[#f37421] transition-colors duration-200"
              >
                Contact
              </Link>
            </li>

            {/* Mobile CTA Button */}
            <li>
              <Link
                to="/contact"
                className="block mt-3 w-full text-center px-5 py-3 rounded-full text-white font-semibold transition-colors duration-200 shadow-md"
                style={{ backgroundColor: "#f37421" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f68c1f")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f37421")
                }
                onClick={handleCloseMenu}
              >
                Get Support
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
