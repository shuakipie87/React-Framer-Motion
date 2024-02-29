import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ServiceSelector = ({ onChange, selectedPlan }) => {
  const allServices = [
    { id: 'socialChallenges', name: 'Social Challenges', cost: 0 },
    { id: 'ugcCollection', name: 'UGC Collection', cost: 0 },
    { id: 'ugcCuration', name: 'UGC Curation', cost: 0 },
    { id: 'emailCollection', name: 'Email Collection', cost: 0 },
    { id: 'drivingSiteTraffic', name: 'Driving Site Traffic', cost: 0 },
    { id: 'automatedReferrals', name: 'Automated Referrals', cost: 500 },
    { id: 'siteChallenges', name: 'Site Challenges', cost: 500 },
    { id: 'socialCalendaring', name: 'Social Calendaring', cost: 500 },
    { id: 'socialCopywriting', name: 'Social Copywriting', cost: 500 },
    { id: 'socialPublishing', name: 'Social Publishing', cost: 500 },
    { id: 'influencerDiscovery', name: 'Influencer Discovery', cost: 1000 },
    { id: 'influencerManagement', name: 'Influencer Management', cost: 1000 },
  ];

  const planServices = {
    base: ['socialChallenges', 'ugcCollection', 'ugcCuration', 'emailCollection', 'drivingSiteTraffic'],
    growth: ['socialChallenges', 'ugcCollection', 'ugcCuration', 'emailCollection', 'drivingSiteTraffic', 'automatedReferrals', 'siteChallenges', 'socialCalendaring', 'socialCopywriting', 'socialPublishing'],
    rocket: ['socialChallenges', 'ugcCollection', 'ugcCuration', 'emailCollection', 'drivingSiteTraffic', 'automatedReferrals', 'siteChallenges', 'socialCalendaring', 'socialCopywriting', 'socialPublishing', 'influencerDiscovery', 'influencerManagement'],
  };

  // Initialize state to track which services are selected
  const [checkedServices, setCheckedServices] = useState({});

  useEffect(() => {
    // Initialize checked services based on the selected plan
    const initialCheckedServices = allServices.reduce((acc, service) => {
      // For the 'base' plan, enable only specific services
      acc[service.id] = planServices[selectedPlan]?.includes(service.id) ?? false;
      return acc;
    }, {});

    setCheckedServices(initialCheckedServices);
  }, [selectedPlan]);

  // Function to handle changes in checkbox states
  const handleChange = (serviceId, isChecked) => {
    setCheckedServices(prevState => ({
      ...prevState,
      [serviceId]: isChecked,
    }));
  };

  // Calculate and communicate the total cost whenever services selection changes
  useEffect(() => {
    const totalCost = allServices.reduce((total, service) => {
      return total + (checkedServices[service.id] ? service.cost : 0);
    }, 0);
    onChange(totalCost);
  }, [checkedServices, onChange]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-gray-100 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Select Additional Services:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allServices.map(service => (
          <motion.label key={service.id} whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow cursor-pointer">
            <input
              type="checkbox"
              name={service.id}
              checked={checkedServices[service.id]}
              onChange={(e) => handleChange(service.id, e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-gray-700">{service.name} (${service.cost})</span>
          </motion.label>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceSelector;
