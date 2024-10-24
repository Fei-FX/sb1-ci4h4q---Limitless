import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Zap } from 'lucide-react';
import toast from 'react-hot-toast';

const services = {
  construction: { base: 299, rushMultiplier: 1.5 },
  realEstate: { base: 249, rushMultiplier: 1.5 },
  filmProduction: { base: 399, rushMultiplier: 1.75 },
  events: { base: 349, rushMultiplier: 1.5 },
  mapping: { base: 499, rushMultiplier: 2 }
};

const QuoteCalculator = () => {
  const [service, setService] = useState('');
  const [hours, setHours] = useState(1);
  const [isRush, setIsRush] = useState(false);
  const [quote, setQuote] = useState<number | null>(null);

  const calculateQuote = () => {
    if (!service) {
      toast.error('Please select a service');
      return;
    }

    const baseRate = services[service as keyof typeof services].base;
    const rushMultiplier = services[service as keyof typeof services].rushMultiplier;
    const total = baseRate * hours * (isRush ? rushMultiplier : 1);
    setQuote(total);
    toast.success('Quote calculated!');
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Service
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose a service...</option>
            <option value="construction">Construction Documentation</option>
            <option value="realEstate">Real Estate Photography</option>
            <option value="filmProduction">Film Production</option>
            <option value="events">Event Coverage</option>
            <option value="mapping">Drone Mapping</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration (hours)
          </label>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="number"
              min="1"
              max="8"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="rush"
            checked={isRush}
            onChange={(e) => setIsRush(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="rush" className="flex items-center text-sm text-gray-700">
            <Zap className="h-4 w-4 text-yellow-500 mr-1" />
            Rush Delivery (50-100% premium)
          </label>
        </div>

        <button
          onClick={calculateQuote}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Calculate Quote
        </button>

        {quote && (
          <div className="mt-6 text-center">
            <p className="text-2xl font-bold text-gray-900">
              Estimated Cost: ${quote.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              *Final price may vary based on specific requirements
            </p>
            <Link
              to="/booking"
              className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteCalculator;