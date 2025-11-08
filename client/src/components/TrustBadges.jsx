import React from 'react';
import {
  TruckIcon,
  ArrowUturnLeftIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Free Delivery',
    description: 'On orders over $50',
    icon: TruckIcon,
  },
  {
    name: 'Easy Returns',
    description: '7-day return policy',
    icon: ArrowUturnLeftIcon,
  },
  {
    name: 'High Quality',
    description: 'Premium, curated styles',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Security Guarantee',
    description: '100% secure payments',
    icon: ShieldCheckIcon,
  },
];

const TrustBadges = () => {
  return (
    <div className="my-16 rounded-lg bg-white p-8 shadow-sm">
      <div className="grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-col items-center text-center sm:flex-row sm:text-left">
            <div className="shrink-0">
              <feature.icon
                className="h-8 w-8 text-indigo-600"
                aria-hidden="true"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4">
              <h3 className="text-base font-medium text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;