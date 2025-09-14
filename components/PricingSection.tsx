'use client';

import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Basic',
    price: 10,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    name: 'Pro',
    price: 20,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    name: 'Enterprise',
    price: 50,
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
];

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    localStorage.setItem('selectedPlan', planName);
  };

  return (
    <div className="grid-cols-3 gap-8 lg:grid">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-lg border p-8 ${selectedPlan === plan.name ? 'border-blue-500' : 'border-gray-300'}`}
        >
          <h2 className="text-2xl font-bold">{plan.name}</h2>
          <p className="text-4xl font-bold">${plan.price}</p>
          <p className="text-gray-500">per month</p>
          <ul className="mt-8 space-y-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleSelectPlan(plan.name)}
            className="mt-8 w-full rounded-lg bg-blue-500 py-2 font-bold text-white"
          >
            {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
          </button>
        </div>
      ))}
    </div>
  );
}
