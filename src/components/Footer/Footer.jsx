import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/logo.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fff7f0] border-t border-orange-200 text-[#1d3557]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company / Logo (same as Navbar) */}
          <div>
            {/* Logo */}
            <div className="flex items-center">
              <img src={Logo} alt="" className="h-25 w-auto object-contain" />
            </div>

            <p className="text-gray-600 leading-7 text-sm">
              We empower people with disabilities through inclusion,
              independence, dignity, and personalised support to create a better
              future for everyone.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-orange-100 text-[#f37421] hover:bg-[#f37421] hover:text-white flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-orange-100 text-[#f37421] hover:bg-[#f37421] hover:text-white flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-orange-100 text-[#f37421] hover:bg-[#f37421] hover:text-white flex items-center justify-center transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#f37421]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Gallery", "/gallery"],
                ["Location", "/location"],
                ["Contact", "/contact"],
              ].map(([name, path]) => (
                <li key={name}>
                  <Link
                    to={path}
                    className="text-gray-600 hover:text-[#f37421] transition"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#f37421]">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>Personal Care</li>
              <li>Community Participation</li>
              <li>Daily Living Support</li>
              <li>Employment Assistance</li>
              <li>Life Skills Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#f37421]">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#f37421] mt-1" />
                <p>
                  Uttara, Dhaka <br />
                  Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#f37421]" />
                <span>+880 123 456 7849</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#f37421]" />
                <span>info@optimistic.com</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-block mt-6 px-6 py-3 bg-[#f37421] hover:bg-[#fdcb11] hover:text-[#1d3557] font-semibold rounded-full transition text-white"
            >
              Contact Now
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-orange-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-3">
          <p>
            © {new Date().getFullYear()} Optimistic Disability Services. All
            Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#f37421] transition">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-[#f37421] transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
