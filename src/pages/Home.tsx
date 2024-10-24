import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Building2, Home as HomeIcon, Video, Calendar, Map } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Drone Services</h1>
          <p className="text-xl md:text-2xl mb-8">Elevate Your Perspective with Limitless Media Labs</p>
          <Link 
            to="/booking"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ServiceCard
              icon={<Building2 className="h-12 w-12 text-blue-600" />}
              title="Construction"
              description="Track progress and document construction sites with precision aerial imagery."
            />
            <ServiceCard
              icon={<HomeIcon className="h-12 w-12 text-blue-600" />}
              title="Real Estate"
              description="Showcase properties with stunning aerial photography and videography."
            />
            <ServiceCard
              icon={<Video className="h-12 w-12 text-blue-600" />}
              title="Film Production"
              description="Add cinematic aerial shots to elevate your production value."
            />
            <ServiceCard
              icon={<Calendar className="h-12 w-12 text-blue-600" />}
              title="Events"
              description="Capture the scale and atmosphere of your special events from above."
            />
            <ServiceCard
              icon={<Map className="h-12 w-12 text-blue-600" />}
              title="Drone Mapping"
              description="Accurate land surveys and environmental monitoring solutions."
            />
            <ServiceCard
              icon={<Camera className="h-12 w-12 text-blue-600" />}
              title="Custom Solutions"
              description="Tailored drone services to meet your specific needs."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take Your Project to New Heights?
          </h2>
          <p className="text-xl text-white mb-8">
            Get 30% off your first booking - Limited time offer!
          </p>
          <Link
            to="/booking"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition duration-300">
    <div className="flex justify-center mb-6">{icon}</div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;