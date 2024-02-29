import React from 'react';
import PlanSelector from './PlanSelector';
import ServiceSelector from './ServiceSelector';
import TotalCostDisplay from './TotalCostDisplay';
import { motion } from 'framer-motion';

const App = () => {
  const [selectedPlan, setSelectedPlan] = React.useState(0);
  const [selectedServicesCost, setSelectedServicesCost] = React.useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-5"
    >
      <h1 className="text-3xl font-bold mb-4">Service Cost Calculator</h1>
      <PlanSelector onChange={setSelectedPlan} />
      <ServiceSelector onChange={setSelectedServicesCost} />
      <TotalCostDisplay totalCost={selectedPlan + selectedServicesCost} />
    </motion.div>
  );
};

export default App;

ComponentName