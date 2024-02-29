import React from 'react';
import { motion } from 'framer-motion';

const TotalCostDisplay = ({ totalCost }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="text-lg font-medium mt-4"
    >
      Total Estimated Cost: <span className="font-bold">${totalCost}/month</span>
    </motion.div>
  );
};

export default TotalCostDisplay;
