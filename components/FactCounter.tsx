// components/FactCounter.tsx
'use client';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const facts = [
  {
    count: 1000,
    label: '100% Online, Easy & All India Services',
    indicator: '+',
  },
  {
    count: 12,
    label: '12+ Years Experienced Team of Professionals',
    indicator: '+',
  },
  {
    count: 5.9,
    label: 'Total Number of Served Clients',
    indicator: 'K',
  },
  {
    count: 10,
    label: 'Availability in Major Indian Cities',
    indicator: '+',
  },
];

const FactCounter: React.FC = () => {
  const [visibleFacts, setVisibleFacts] = useState<boolean[]>(Array(facts.length).fill(false));

  useEffect(() => {
    facts.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleFacts(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, index * 500); // Staggered by 500ms for each item
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div className="flex max-w-7xl mx-auto justify-between overflow-hidden gap-5 p-4">
      {facts.map((fact, index) => (
        <div
          key={index}
          className={`flex flex-col items-center transition-transform duration-1000 ease-in-out ${
            visibleFacts[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100px]'
          }`}
        >
          <div className="flex items-center">
            <div className="text-[20px] md:text-7xl text-black font-bold">
              {visibleFacts[index] && (
                <CountUp start={0} end={fact.count} duration={2} />
              )}
            </div>
            <span className="text-[20px] md:text-7xl text-black font-black">{fact.indicator}</span>
          </div>
          <p className="text-gray-700 text-[10px] md:text-base text-center">{fact.label}</p>
        </div>
      ))}
    </div>
  );
};

export default FactCounter;
