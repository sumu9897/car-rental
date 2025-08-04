import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { motion } from "motion/react";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const { pickupDate, setPickupDate, returnDate, setReturnDate, navigate } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!pickupLocation || !pickupDate || !returnDate) return;

    navigate(
      `/cars?pickupLocation=${encodeURIComponent(pickupLocation)}&pickupDate=${pickupDate}&returnDate=${returnDate}`
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center gap-12 bg-gray-50 text-center px-6 md:px-16 lg:px-32"
    >
      {/* Heading */}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 max-w-4xl leading-tight"
      >
        Rent Premium Cars Anywhere in Bangladesh
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-xl text-lg md:text-xl text-gray-600"
      >
        Book your next ride in seconds – reliable, comfortable, and affordable car rentals across major cities in Bangladesh.
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ scale: 0.95, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg p-5 max-w-4xl w-full gap-6"
      >
        {/* Pickup Location */}
        <div className="flex flex-col md:flex-1 text-left w-full">
          <label htmlFor="pickup-location" className="mb-2 text-sm font-semibold text-gray-700">
            Pickup Location
          </label>
          <select
            id="pickup-location"
            required
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled>
              Select location
            </option>
            {cityList.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Pickup Date */}
        <div className="flex flex-col md:flex-1 text-left w-full">
          <label htmlFor="pickup-date" className="mb-2 text-sm font-semibold text-gray-700">
            Pick-up Date
          </label>
          <input
            id="pickup-date"
            type="date"
            required
            value={pickupDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Return Date */}
        <div className="flex flex-col md:flex-1 text-left w-full">
          <label htmlFor="return-date" className="mb-2 text-sm font-semibold text-gray-700">
            Return Date
          </label>
          <input
            id="return-date"
            type="date"
            required
            value={returnDate}
            min={pickupDate || new Date().toISOString().split("T")[0]}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary hover:bg-primary-dark text-white font-semibold rounded-full px-8 py-4 shadow-lg transition flex items-center"
        >
          <img
            src={assets.search_icon}
            alt="Search"
            className="w-5 h-5 mr-2 invert"
          />
          Search Cars
        </motion.button>
      </motion.form>

      {/* Hero Image */}
      <motion.img
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        src={assets.main_car}
        alt="Luxury car"
        className="w-full max-w-4xl rounded-lg shadow-xl object-cover"
      />
    </motion.div>
  );
};

export default Hero;
