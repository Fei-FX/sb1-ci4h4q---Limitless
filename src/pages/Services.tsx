import React from 'react';
import { Building2, Home, Film, Camera, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Building2,
    title: 'Construction Documentation',
    description: 'Comprehensive aerial documentation for construction projects, helping track progress and communicate with stakeholders.',
    features: [
      'Progress tracking',
      'Site surveys',
      'Safety inspections',
      'Marketing material'
    ]
  },
  {
    icon: Home,
    title: 'Real Estate Photography',
    description: 'Stunning aerial photography that showcases properties from unique perspectives, proven to increase sales potential.',
    features: [
      'Property overview shots',
      'Virtual tours',
      'Location context',
      'Marketing packages'
    ]
  },
  {
    icon: Film,
    title: 'Film Production',
    description: 'Dynamic aerial cinematography that adds production value to any film or video project.',
    features: [
      'Aerial establishing shots',
      'Action sequences',
      'Location scouting',
      'B-roll footage'
    ]
  },
  {
    icon: Camera,
    title: 'Event Coverage',
    description: 'Capture the scale and atmosphere of your events with breathtaking aerial photography and video.',
    features: [
      'Crowd shots',
      'Venue coverage',
      'Live streaming',
      'Highlight reels'
    ]
  },
  {
    icon: MapPin,
    title: 'Drone Mapping',
    description: 'Accurate aerial mapping and surveying services for various industries and applications.',
    features: [
      'Topographic surveys',
      'Volumetric calculations',
      '3D modeling',
      'GIS integration'
    ]
  }
];

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center"
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-2xl">
              Professional drone services tailored to your specific needs
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.title} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <service.icon className="h-16 w-16 text-blue-600 mb-6" />
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 h-[400px] w-full rounded-xl overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${index + 1}?auto=format&fit=crop&q=80`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Book your drone service today and elevate your perspective</p>
          <Link
            to="/booking"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition inline-block"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;