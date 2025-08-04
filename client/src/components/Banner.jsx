import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row md:items-center items-start justify-between px-6 md:px-14 py-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-4 md:mx-auto rounded-2xl overflow-hidden"
    >
      {/* Text Section */}
      <div className="text-white max-w-xl">
        <h2 className="text-3xl font-bold mb-2">
          Own a Car in Bangladesh?
        </h2>
        <p className="text-base mb-3">
          Earn effortlessly by listing your vehicle on <span className="font-semibold">CarRental BD</span>.
        </p>
        <p className="text-sm leading-relaxed">
          We handle everything—insurance, driver verification, and secure payments—so you can sit back and earn passive income without the hassle.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-5 font-medium"
        >
          List Your Car
        </motion.button>
      </div>

      {/* Image Section */}
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        src={assets.banner_car_image}
        alt="Luxury Car"
        className="max-h-60 mt-6 md:mt-0"
      />
    </motion.div>
  );
};

export default Banner;
