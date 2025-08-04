import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500 bg-white"
      aria-label="Footer"
    >
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-between items-start gap-8 pb-6 border-b border-gray-300"
      >
        {/* Company Info */}
        <div className="max-w-xs flex-shrink-0">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            src={assets.logo}
            alt="CarRental Bangladesh Logo"
            className="h-16 md:h-20"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-3 text-gray-600"
          >
            Trusted car rental service in Bangladesh offering premium and affordable vehicles for your journeys across the country.
          </motion.p>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 mt-6"
          >
            {/* Replace '#' with your real social URLs */}
            <a href="#" aria-label="Facebook" className="hover:text-primary transition">
              <img src={assets.facebook_logo} alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary transition">
              <img src={assets.twitter_logo} alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Gmail" className="hover:text-primary transition">
              <img src={assets.gmail_logo} alt="Gmail" className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links" className="flex-grow max-w-xs">
          <h2 className="text-base font-semibold text-gray-800 uppercase mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Browse Cars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                List Your Car
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                About Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Resources */}
        <nav aria-label="Resources" className="flex-grow max-w-xs">
          <h2 className="text-base font-semibold text-gray-800 uppercase mb-3">
            Resources
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-primary transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Insurance
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <address className="not-italic flex-grow max-w-xs text-gray-600">
          <h2 className="text-base font-semibold text-gray-800 uppercase mb-3">
            Contact
          </h2>
          <ul className="space-y-2">
            <li>House 45, Road 12, Banani</li>
            <li>Dhaka 1213, Bangladesh</li>
            <li>
              <a href="tel:+8801712345678" className="hover:text-primary transition">
                +880 1712 345 678
              </a>
            </li>
            <li>
              <a href="mailto:info@carrentalbd.com" className="hover:text-primary transition">
                info@carrentalbd.com
              </a>
            </li>
          </ul>
        </address>
      </motion.div>

      {/* Divider
      <hr className="border-gray-300 mt-8" /> */}

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-gray-600 text-xs md:text-sm">
        <p>© {new Date().getFullYear()} CarRental Bangladesh. All rights reserved.</p>
        <ul className="flex items-center gap-6">
          <li>
            <a href="#" className="hover:text-primary transition">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition">
              Sitemap
            </a>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;
