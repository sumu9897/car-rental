import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

// Footer component for the car rental website
const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500"
    >
      {/* Top Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor"
      >
        {/* Company Info */}
        <div>
          <motion.img
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }} src={assets.logo} alt="Company Logo" className="h-16 md:h-20" />
          <motion.p initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}  className="max-w-80 mt-3">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </motion.p>

          {/* Social Media Links */}
          <motion.div 
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }} 
           className="flex items-center gap-3 mt-6">
            {/* Uncomment if needed
            <a href="#" aria-label="Instagram">
              <img src={assets.in} alt="Instagram" className="w-5 h-5" />
            </a> */}
            <a href="#" aria-label="Facebook">
              <img
                src={assets.facebook_logo}
                alt="Facebook"
                className="w-5 h-5"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src={assets.twitter_logo}
                alt="Twitter"
                className="w-5 h-5"
              />
            </a>
            <a href="#" aria-label="Gmail">
              <img src={assets.gmail_logo} alt="Gmail" className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Quick Links */}
        <motion.div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Quick Links
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Cars</a>
            </li>
            <li>
              <a href="#">List Your Car</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </motion.div>

        {/* Resources */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Resources
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Contact
          </h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>1234 Luxury Drive</li>
            <li>San Francisco, CA 94107</li>
            <li>+1 234 567890</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </motion.div>

      {/* Divider */}
      <hr className="border-gray-300 mt-8" />

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Footer;
