import React from 'react';
import { motion } from 'framer-motion';

const PlanSelector = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(parseInt(event.target.value));
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <h2 className="text-xl font-semibold mb-3">Select Your Plan:</h2>
      <div className="space-y-2">
        <label className="block">
          <input type="radio" name="plan" value="4500" onChange={handleChange} className="mr-2" /> Base ($4,500/month)
        </label>
        <label className="block">
          <input type="radio" name="plan" value="7500" onChange={handleChange} className="mr-2" /> Growth ($7,500/month)
        </label>
        <label className="block">
          <input type="radio" name="plan" value="9500" onChange={handleChange} className="mr-2" /> Rocket ($9,500/month)
        </label>
      </div>
    </motion.div>
  );
};

export default PlanSelector;
